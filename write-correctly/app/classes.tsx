import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useRouter } from "expo-router";
import { ThemeContext } from "./_layout";

const classes = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setTheme("CLASS_1");
          router.back();
        }}
      >
        <Text style={{ fontSize: 50 }}>1 класс</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTheme("CLASS_2");
          router.back();
        }}
      >
        <Text style={{ fontSize: 50 }}>2 класс</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTheme("CLASS_3");
          router.back();
        }}
      >
        <Text style={{ fontSize: 50 }}>3 класс</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setTheme("CLASS_4");
          router.back();
        }}
      >
        <Text style={{ fontSize: 50 }}>4 класс</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default classes;

const styles = StyleSheet.create({});