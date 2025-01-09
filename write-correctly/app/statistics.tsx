import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const statistics = () => {
  const { wrongAnswers } = useLocalSearchParams();
  const actualWrongAnswers = wrongAnswers.split(",");
  // console.log(actualWrongAnswers);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {actualWrongAnswers.map((a, i) => {
        return <Text key={i}>{a}</Text>;
      })}
    </View>
  );
};

export default statistics;

const styles = StyleSheet.create({});
