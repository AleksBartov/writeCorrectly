import { View } from "react-native";

import { CLASS_1 } from "@/DATA/CONSTANTS";
import Word from "@/components/Word";
import { useState } from "react";

export default function Index() {
  const [wordsArray, setWordsArray] = useState(CLASS_1);
  return (
    <View style={{ flex: 1 }}>
      {wordsArray.map((w, i) => {
        const RANDOM = Math.random().toFixed(2);
        return (
          <Word
            word_test={w}
            key={i}
            fadeOut={(i: number) => {
              const newArray = CLASS_1.splice(i, 1);
              setWordsArray(newArray);
            }}
            index={i}
            random={RANDOM}
          />
        );
      })}
    </View>
  );
}
