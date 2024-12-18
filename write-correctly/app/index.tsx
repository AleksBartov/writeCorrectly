import {
  Alert,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import * as Haptics from "expo-haptics";

import { WORDS } from "@/DATA/CONSTANTS";

const { ANSWER_RIGTH, ANSWER_WRONG, WORD_TO_TEST, TEST_POSITION } = WORDS[3];
const WORD_ARRAY = WORD_TO_TEST.split("");
const RANDOM = Math.random().toFixed(2);
const ANSWER_UP = +RANDOM > 0.5 ? ANSWER_RIGTH : ANSWER_WRONG;
const ANSWER_DOWN = +RANDOM <= 0.5 ? ANSWER_RIGTH : ANSWER_WRONG;

export default function Index() {
  const { width, height } = useWindowDimensions();
  const MAX_WORD_LENGTH = 11;
  const PADDING = 30;
  const SIZE = (width - PADDING * 2) / MAX_WORD_LENGTH;
  return (
    <View
      style={{
        flex: 1,
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
      <View
        style={{
          position: "absolute",
          width: SIZE,
          height: SIZE * 2,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          transform: [
            {
              translateX:
                -((WORD_ARRAY.length / 2) * SIZE - SIZE / 2) +
                SIZE * TEST_POSITION,
            },
          ],
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (ANSWER_UP === ANSWER_RIGTH) {
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
              Alert.alert("ВЕРНЫЙ ОТВЕТ");
            } else {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
              Alert.alert("НЕВЕРНЫЙ ОТВЕТ");
            }
          }}
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
              color: "rgba(0,0,0,0.2)",
            }}
          >
            {ANSWER_UP}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: SIZE,
            height: 7,
            borderRadius: 3.5,
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        ></View>
        <TouchableOpacity
          onPress={() => {
            if (ANSWER_DOWN === ANSWER_RIGTH) {
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
              );
              Alert.alert("ВЕРНЫЙ ОТВЕТ");
            } else {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
              Alert.alert("НЕВЕРНЫЙ ОТВЕТ");
            }
          }}
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
              color: "rgba(0,0,0,0.2)",
            }}
          >
            {ANSWER_DOWN}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
