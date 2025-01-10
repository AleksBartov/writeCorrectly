import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Word from "./Word";
import Animated, {
  FadeIn,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ThemeContext } from "@/app/_layout";

const StackWords = ({ classToTest, classLenght, name }) => {
  const { width, height } = useWindowDimensions();
  const [theme, setTheme] = useContext(ThemeContext);
  const [wordsArray, setWordsArray] = useState([]);

  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [rightAnswers, setRightAnswers] = useState([]);
  const [reload, setReload] = useState(false);
  const CANVAS_HEIGHT = 10;
  const STROKE_WIDTH = 10;
  const RELOAD_SIZE = 180;
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
  useEffect(() => {
    setWordsArray(classToTest);
  }, []);
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
              setReload={setReload}
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
      {reload && (
        <Animated.View
          entering={FadeIn.delay(1000)}
          style={{
            position: "absolute",
            width: RELOAD_SIZE,
            height: RELOAD_SIZE,
            right: width / 2 - RELOAD_SIZE / 2,
            top: height / 2 - RELOAD_SIZE / 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // setTheme(name);
              const newArray = [...classToTest];
              setWordsArray(newArray);
              setReload(false);
              setWrongAnswers([]);
              setRightAnswers([]);
              counterWrong.value = withTiming(0, { duration: 1400 });
              counterRight.value = withTiming(0, { duration: 1400 });
            }}
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              width: RELOAD_SIZE,
              height: RELOAD_SIZE,
            }}
          >
            <AntDesign name="reload1" size={54} color="black" />
            <Text>Учить слова еще раз</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
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
