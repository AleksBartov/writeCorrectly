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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 50,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          width: "70%",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 45,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_1");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            1 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_2");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            2 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_3");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            3 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_4");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            4 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_5");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            5 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_6");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            6 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_7");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            7 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_8");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            8 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.05)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_9");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            9 класс
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0,0,0,0.01)",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            setTheme("CLASS_10_11");
            router.back();
          }}
        >
          <Text style={{ fontSize: 38, fontFamily: "Nunito_800ExtraBold" }}>
            10 и 11 классы
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default classes;

const styles = StyleSheet.create({});
