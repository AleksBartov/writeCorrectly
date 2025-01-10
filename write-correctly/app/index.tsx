import { TouchableOpacity } from "react-native";

import { useContext, useEffect, useState } from "react";
import { CLASS_4, CLASS_4_LENGTH } from "@/DATA/CLASS_4";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from "expo-router";
import { ThemeContext } from "./_layout";
import { CLASS_1, CLASS_1_LENGTH } from "@/DATA/CLASS_1";
import { CLASS_2, CLASS_2_LENGTH } from "@/DATA/CLASS_2";
import { CLASS_3, CLASS_3_LENGTH } from "@/DATA/CLASS_3";
import StackWords from "@/components/StackWords";
import Animated from "react-native-reanimated";
import { CLASS_5, CLASS_5_LENGTH } from "@/DATA/CLASS_5";
import { CLASS_6, CLASS_6_LENGTH } from "@/DATA/CLASS_6";
import { CLASS_7, CLASS_7_LENGTH } from "@/DATA/CLASS_7";
import { CLASS_8, CLASS_8_LENGTH } from "@/DATA/CLASS_8";
import { CLASS_9, CLASS_9_LENGTH } from "@/DATA/CLASS_9";
import { CLASS_10_11, CLASS_10_11_LENGTH } from "@/DATA/CLASS_10_11";

export default function Index() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [stydy, setStydy] = useState();
  useEffect(() => {
    setStydy(theme);
  }, [theme, setTheme, stydy, setStydy]);

  const router = useRouter();

  return (
    <>
      {stydy === "CLASS_1" && (
        <StackWords
          classToTest={CLASS_1}
          name="CLASS_1"
          classLenght={CLASS_1_LENGTH}
        />
      )}
      {stydy === "CLASS_2" && (
        <StackWords
          classToTest={CLASS_2}
          name="CLASS_2"
          classLenght={CLASS_2_LENGTH}
        />
      )}
      {stydy === "CLASS_3" && (
        <StackWords
          classToTest={CLASS_3}
          name="CLASS_3"
          classLenght={CLASS_3_LENGTH}
        />
      )}
      {stydy === "CLASS_4" && (
        <StackWords
          classToTest={CLASS_4}
          name="CLASS_4"
          classLenght={CLASS_4_LENGTH}
        />
      )}
      {stydy === "CLASS_5" && (
        <StackWords
          classToTest={CLASS_5}
          name="CLASS_5"
          classLenght={CLASS_5_LENGTH}
        />
      )}
      {stydy === "CLASS_6" && (
        <StackWords
          classToTest={CLASS_6}
          name="CLASS_6"
          classLenght={CLASS_6_LENGTH}
        />
      )}
      {stydy === "CLASS_7" && (
        <StackWords
          classToTest={CLASS_7}
          name="CLASS_7"
          classLenght={CLASS_7_LENGTH}
        />
      )}
      {stydy === "CLASS_8" && (
        <StackWords
          classToTest={CLASS_8}
          name="CLASS_8"
          classLenght={CLASS_8_LENGTH}
        />
      )}
      {stydy === "CLASS_9" && (
        <StackWords
          classToTest={CLASS_9}
          name="CLASS_9"
          classLenght={CLASS_9_LENGTH}
        />
      )}
      {stydy === "CLASS_10_11" && (
        <StackWords
          classToTest={CLASS_10_11}
          name="CLASS_10_11"
          classLenght={CLASS_10_11_LENGTH}
        />
      )}
      <TouchableOpacity
        onPress={() => router.push("/classes")}
        style={{
          position: "absolute",
          top: 20,
          left: 50,
          padding: 14,
          borderRadius: 5,
          shadowColor: "gray",
          shadowOffset: {
            width: 10,
            height: -10,
          },
          shadowOpacity: 0.5,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        <Octicons name="number" size={44} color="black" />
      </TouchableOpacity>
      <Animated.View style={{ position: "absolute", top: 20, right: 50 }}>
        {theme === "CLASS_10_11" ? (
          <Animated.Text
            style={{ fontSize: 15, fontFamily: "Nunito_800ExtraBold" }}
          >
            10 и 11 классы
          </Animated.Text>
        ) : (
          <Animated.Text
            style={{ fontSize: 20, fontFamily: "Nunito_800ExtraBold" }}
          >{`${theme[theme.length - 1]} класс`}</Animated.Text>
        )}
      </Animated.View>
    </>
  );
}
