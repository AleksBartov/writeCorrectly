import { TouchableOpacity } from "react-native";

import { useContext } from "react";
import { CLASS_4, CLASS_4_LENGTH } from "@/DATA/CLASS_4";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from "expo-router";
import { ThemeContext } from "./_layout";
import { CLASS_1, CLASS_1_LENGTH } from "@/DATA/CLASS_1";
import { CLASS_2, CLASS_2_LENGTH } from "@/DATA/CLASS_2";
import { CLASS_3, CLASS_3_LENGTH } from "@/DATA/CLASS_3";
import StackWords from "@/components/StackWords";

export default function Index() {
  const [theme, setTheme] = useContext(ThemeContext);
  const router = useRouter();

  return (
    <>
      <StackWords classToTest={CLASS_1} classLenght={CLASS_1_LENGTH} />
      <TouchableOpacity
        onPress={() => router.push("/classes")}
        style={{ position: "absolute", top: 20, left: 50 }}
      >
        <Octicons name="number" size={44} color="black" />
      </TouchableOpacity>
    </>
  );
}
