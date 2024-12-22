import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import * as Haptics from "expo-haptics";
import { SIZE } from "@/DATA/SIZES";
import { Word_type } from "@/DATA/CONSTANTS";
import { SharedValueType } from "@shopify/react-native-skia";

type Props = {
  word_test: Word_type;
  fadeOut: any;
  index: number;
  random: string;
};

const DIVIDER_HEIGHT = 7;

const Word = ({
  word_test,
  fadeOut,
  index,
  random,
  counterRight,
  counterWrong,
}: Props) => {
  const { width } = useWindowDimensions();
  const [done, setDone] = useState(false);
  const { ANSWER_RIGTH, ANSWER_WRONG, TEST_POSITION, WORD_TO_TEST } = word_test;

  const WORD_ARRAY = WORD_TO_TEST.split("");

  const ANSWER_UP = +random > 0.5 ? ANSWER_RIGTH : ANSWER_WRONG;
  const ANSWER_DOWN = +random <= 0.5 ? ANSWER_RIGTH : ANSWER_WRONG;

  const translateY = useSharedValue(0);
  const answerUpColor = useSharedValue("rgba(0,0,0,0.2)");
  const answerDownColor = useSharedValue("rgba(0,0,0,0.2)");
  const answerUpOpacity = useSharedValue(1);
  const answerDownOpacity = useSharedValue(1);
  const dividerOpacity = useSharedValue(1);

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:
            -((WORD_ARRAY.length / 2) * SIZE - SIZE / 2) + SIZE * TEST_POSITION,
        },
        { translateY: translateY.value },
      ],
    };
  });

  const reanAnswerDownStyle = useAnimatedStyle(() => {
    return {
      color: answerDownColor.value,
      opacity: answerDownOpacity.value,
    };
  });
  const reanAnswerUpStyle = useAnimatedStyle(() => {
    return {
      color: answerUpColor.value,
      opacity: answerUpOpacity.value,
    };
  });

  const reanDividerStyle = useAnimatedStyle(() => {
    return {
      opacity: dividerOpacity.value,
    };
  });

  return (
    <Animated.View
      style={{
        ...StyleSheet.absoluteFill,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ffffff",
      }}
    >
      {WORD_ARRAY.map((l, i) => {
        return (
          <View
            key={i}
            style={{
              width: SIZE,
              height: SIZE,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: SIZE * 0.68,
                fontFamily: "Nunito_800ExtraBold",
              }}
            >
              {l}
            </Text>
          </View>
        );
      })}
      <Animated.View
        style={[
          {
            position: "absolute",
            width: SIZE,
            height: SIZE * 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
          },
          animStyle,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            if (done) return;
            setDone(true);
            dividerOpacity.value = withTiming(0);
            answerDownOpacity.value = withTiming(0);
            translateY.value = withSpring(SIZE / 2 + DIVIDER_HEIGHT / 2);
            if (ANSWER_UP === ANSWER_RIGTH) {
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
              answerUpColor.value = "green";

              counterRight.value = withSpring(counterRight.value + 1);
              // Alert.alert("ВЕРНЫЙ ОТВЕТ");
            } else {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
              answerUpColor.value = "red";
              counterWrong.value = withSpring(counterWrong.value + 1);
              // Alert.alert("НЕВЕРНЫЙ ОТВЕТ");
            }
          }}
          style={{
            width: SIZE,
            height: SIZE,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated.Text
            style={[
              {
                fontSize: SIZE * 0.68,
                fontFamily: "Nunito_800ExtraBold",
              },
              reanAnswerUpStyle,
            ]}
          >
            {ANSWER_UP}
          </Animated.Text>
        </TouchableOpacity>
        <Animated.View
          style={[
            {
              width: SIZE,
              height: DIVIDER_HEIGHT,
              borderRadius: 3.5,
              backgroundColor: "rgba(0,0,0,0.2)",
            },
            reanDividerStyle,
          ]}
        ></Animated.View>
        <TouchableOpacity
          onPress={() => {
            if (done) return;
            setDone(true);
            dividerOpacity.value = withTiming(0);
            answerUpOpacity.value = withTiming(0);
            translateY.value = withSpring(-SIZE / 2 - DIVIDER_HEIGHT / 2);
            if (ANSWER_DOWN === ANSWER_RIGTH) {
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
              answerDownColor.value = "green";
              counterRight.value = withSpring(counterRight.value + 1);
            } else {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
              answerDownColor.value = "red";
              counterWrong.value = withSpring(counterWrong.value + 1);
              // Alert.alert("НЕВЕРНЫЙ ОТВЕТ");
            }
          }}
          style={{
            width: SIZE,
            height: SIZE,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated.Text
            style={[
              {
                fontSize: SIZE * 0.68,
                fontFamily: "Nunito_800ExtraBold",
              },
              reanAnswerDownStyle,
            ]}
          >
            {ANSWER_DOWN}
          </Animated.Text>
        </TouchableOpacity>
      </Animated.View>
      {done && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: width / 2 - 50,
            bottom: 10,
            width: 100,
            height: 100,
          }}
          onPress={() => {
            fadeOut(index);
            setDone(false);
            translateY.value = 0;
            answerUpColor.value = "rgba(0,0,0,0.2)";
            answerDownColor.value = "rgba(0,0,0,0.2)";
            dividerOpacity.value = 1;
            answerUpOpacity.value = 1;
            answerDownOpacity.value = 1;
          }}
        >
          <MaterialIcons name="navigate-next" size={54} color="black" />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default Word;

const styles = StyleSheet.create({});
