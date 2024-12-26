import { TouchableOpacity, useWindowDimensions, View } from "react-native";

import Word from "@/components/Word";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import { useContext, useEffect, useState } from "react";
import { useDerivedValue, useSharedValue } from "react-native-reanimated";
import { CLASS_4, CLASS_4_LENGTH } from "@/DATA/CLASS_4";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from "expo-router";
import { ThemeContext } from "./_layout";
import { CLASS_1, CLASS_1_LENGTH } from "@/DATA/CLASS_1";
import { CLASS_2, CLASS_2_LENGTH } from "@/DATA/CLASS_2";
import { CLASS_3, CLASS_3_LENGTH } from "@/DATA/CLASS_3";

export default function Index() {
  const [theme, setTheme] = useContext(ThemeContext);
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [wordsArray, setWordsArray] = useState(
    theme === "CLASS_2"
      ? CLASS_2
      : theme === "CLASS_3"
      ? CLASS_3
      : theme === "CLASS_4"
      ? CLASS_4
      : CLASS_1
  );
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const CANVAS_HEIGHT = 10;
  const STROKE_WIDTH = 10;
  const counterRight = useSharedValue(0);
  const counterWrong = useSharedValue(0);
  const percentage = useDerivedValue(() => {
    const LENGTH =
      theme === "CLASS_2"
        ? CLASS_2_LENGTH
        : theme === "CLASS_3"
        ? CLASS_3_LENGTH
        : theme === "CLASS_4"
        ? CLASS_4_LENGTH
        : CLASS_1_LENGTH;
    return counterRight.value / LENGTH;
  });
  const redPercentage = useDerivedValue(() => {
    const LENGTH =
      theme === "CLASS_2"
        ? CLASS_2_LENGTH
        : theme === "CLASS_3"
        ? CLASS_3_LENGTH
        : theme === "CLASS_4"
        ? CLASS_4_LENGTH
        : CLASS_1_LENGTH;
    return 1 - counterWrong.value / LENGTH;
  });
  const linePath = Skia.Path.MakeFromSVGString(
    `M ${width * 0.2} ${CANVAS_HEIGHT / 2} L ${width * 0.8} ${
      CANVAS_HEIGHT / 2
    }`
  );
  const linePathGreen = Skia.Path.MakeFromSVGString(
    `M ${width * 0.2 - STROKE_WIDTH} ${CANVAS_HEIGHT / 2} L ${width * 0.8} ${
      CANVAS_HEIGHT / 2
    }`
  );
  const linePathRed = Skia.Path.MakeFromSVGString(
    `M ${width * 0.2} ${CANVAS_HEIGHT / 2} L ${width * 0.8 + STROKE_WIDTH} ${
      CANVAS_HEIGHT / 2
    }`
  );

  useEffect(() => {
    setWordsArray(
      theme === "CLASS_2"
        ? CLASS_2
        : theme === "CLASS_3"
        ? CLASS_3
        : theme === "CLASS_4"
        ? CLASS_4
        : CLASS_1
    );
    counterRight.value = 0;
    counterWrong.value = 0;
  }, [theme]);

  return (
    <>
      <View style={{ flex: 1 }}>
        {wordsArray.map((w, i) => {
          if (i > 0) {
            return null;
          }
          return (
            <Word
              word_test={w}
              key={i}
              fadeOut={(i: number) => {
                wordsArray.splice(i, 1);
                setWordsArray([...wordsArray]);
              }}
              index={i}
              counterRight={counterRight}
              counterWrong={counterWrong}
              wordsLenght={wordsArray.length}
              wrongAnswers={wrongAnswers}
              setWrongAnswers={setWrongAnswers}
            />
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => router.push("/classes")}
        style={{ position: "absolute", top: 20, left: 50 }}
      >
        <Octicons name="number" size={44} color="black" />
      </TouchableOpacity>
      <Canvas
        style={{
          position: "absolute",
          top: 20,
          width: width,
          height: CANVAS_HEIGHT,
        }}
      >
        <Path
          style="stroke"
          path={linePath!}
          strokeWidth={STROKE_WIDTH}
          color="rgba(0,0,0,0.2)"
          end={1}
          start={0}
          strokeCap={"round"}
        />
        <Path
          style="stroke"
          path={linePathGreen!}
          strokeWidth={STROKE_WIDTH}
          color="green"
          end={percentage}
          start={0}
          strokeCap={"round"}
        />
        <Path
          style="stroke"
          path={linePathRed!}
          strokeWidth={STROKE_WIDTH}
          color="red"
          end={1}
          start={redPercentage}
          strokeCap={"round"}
        />
      </Canvas>
    </>
  );
}
