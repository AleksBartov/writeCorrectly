import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import Word from "./Word";
import Animated, {
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";

const StackWords = ({ classToTest, classLenght }) => {
  const { width } = useWindowDimensions();
  const [wordsArray, setWordsArray] = useState(classToTest);

  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const CANVAS_HEIGHT = 10;
  const STROKE_WIDTH = 10;
  const counterRight = useSharedValue(0);
  const counterWrong = useSharedValue(0);
  const percentage = useDerivedValue(() => {
    return counterRight.value / classLenght;
  });
  const redPercentage = useDerivedValue(() => {
    return 1 - counterWrong.value / classLenght;
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
              setRightAnswers={setRightAnswers}
            />
          );
        })}
      </View>
      <Animated.View
        style={{
          position: "absolute",
          right: width / 2 - width * 0.3,
        }}
      >
        <Animated.Text
          style={{
            fontSize: 12,
            opacity: 0.7,
            fontFamily: "Nunito_800ExtraBold",
          }}
        >
          {wrongAnswers.length}
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          right: width / 2 + width * 0.3 - 6,
        }}
      >
        <Animated.Text
          style={{
            fontSize: 12,
            opacity: 0.7,
            fontFamily: "Nunito_800ExtraBold",
          }}
        >
          {rightAnswers.length}
        </Animated.Text>
      </Animated.View>
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
};

export default StackWords;

const styles = StyleSheet.create({});
