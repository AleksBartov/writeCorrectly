import { shuffle, Word_type } from "@/utils";

const C_6: Word_type[] = [
  {
    DUAL: true,
    CORRECT_WORD: "АЛЮМИНИЙ",
    WORD_TO_TEST: "АЛЛЮМИНИЙ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Л",
    ANSWER_WRONG: "ЛЛ",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АТМОСФЕРА",
    WORD_TO_TEST: "АТМОСФЕРА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АРМАТУРА",
    WORD_TO_TEST: "АРМАТУРА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
];

export const CLASS_6_LENGTH = C_6.length;

export const CLASS_6 = shuffle(C_6);
