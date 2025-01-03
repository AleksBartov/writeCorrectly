import { shuffle, Word_type } from "@/utils";

const C_10_11: Word_type[] = [
  {
    DUAL: false,
    CORRECT_WORD: "АБОРДАЖ",
    WORD_TO_TEST: "АБОРДАЖ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
];

export const CLASS_10_11_LENGTH = C_10_11.length;

export const CLASS_10_11 = shuffle(C_10_11);
