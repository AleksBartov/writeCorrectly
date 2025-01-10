import { shuffle, Word_type } from "@/utils";

const C_1: Word_type[] = [
  {
    DUAL: true,
    CORRECT_WORD: "АЛЛЕЯ",
    WORD_TO_TEST: "АЛЛЕЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ГРУППА",
    WORD_TO_TEST: "ГРУППА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "ПП",
    ANSWER_WRONG: "П",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АГРОНОМ",
    WORD_TO_TEST: "АГРОНОМ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АЛЬБОМ",
    WORD_TO_TEST: "АЛЬБОМ",
    TEST_POSITION: 0,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
];

export const CLASS_1_LENGTH = C_1.length;

export const CLASS_1 = shuffle(C_1);
