import { useWindowDimensions, View } from "react-native";

import { CLASS_1, CLASS_1_LENGTH } from "@/DATA/CONSTANTS";
import Word from "@/components/Word";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import { useDebugValue, useState } from "react";
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function Index() {
  const { width } = useWindowDimensions();
  const [wordsArray, setWordsArray] = useState(CLASS_1);
  const CANVAS_HEIGHT = 10;
  const counterRight = useSharedValue(0);
  const counterWrong = useSharedValue(0);
  const percentage = useDerivedValue(() => {
    return counterRight.value / CLASS_1_LENGTH;
  });
  const redPercentage = useDerivedValue(() => {
    return 1 - counterWrong.value / CLASS_1_LENGTH;
  });
  const linePath = Skia.Path.MakeFromSVGString(
    `M ${width * 0.2} ${CANVAS_HEIGHT / 2} L ${width * 0.8} ${
      CANVAS_HEIGHT / 2
    }`
  );
  return (
    <>
      <View style={{ flex: 1 }}>
        {wordsArray.map((w, i) => {
          const RANDOM = Math.random().toFixed(2);
          return (
            <Word
              word_test={w}
              key={i}
              fadeOut={(i: number) => {
                wordsArray.splice(i, 1);
                setWordsArray([...wordsArray]);
              }}
              index={i}
              random={RANDOM}
              counterRight={counterRight}
              counterWrong={counterWrong}
            />
          );
        })}
      </View>
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
          strokeWidth={10}
          color="rgba(0,0,0,0.2)"
          end={1}
          start={0}
          strokeCap={"round"}
        />
        <Path
          style="stroke"
          path={linePath!}
          strokeWidth={10}
          color="green"
          end={percentage}
          start={0}
          strokeCap={"round"}
        />
        <Path
          style="stroke"
          path={linePath!}
          strokeWidth={10}
          color="red"
          end={1}
          start={redPercentage}
          strokeCap={"round"}
        />
      </Canvas>
    </>
  );
}
