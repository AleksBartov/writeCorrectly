const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export interface Word_type {
  WORD_TO_TEST: string;
  TEST_POSITION: number;
  ANSWER_RIGTH: string;
  ANSWER_WRONG: string;
}

const C_1: Word_type[] = [
  {
    WORD_TO_TEST: "АГРОНОМ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "АЛЬБОМ",
    TEST_POSITION: 0,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "АДРЕС",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "С",
    ANSWER_WRONG: "З",
  },
  {
    WORD_TO_TEST: "АЛФАВИТ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "АРБУЗ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "З",
    ANSWER_WRONG: "С",
  },
  {
    WORD_TO_TEST: "БАРАБАН",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "БЕСЕДОВАТЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "БИЛЕТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
  },
  {
    WORD_TO_TEST: "БЕСЕДА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "БИБЛИОТЕКА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
  },
  {
    WORD_TO_TEST: "ВЕСЕЛО",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "ВОРОБЕЙ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "ВПЕРЕДИ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "ВОКЗАЛ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "ВОРОНА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "ВЧЕРА",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "ГАЗЕТА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "ГОРОД",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "ДВЕНАДЦАТЬ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "ДЕЖУРНЫЙ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "ДИРЕКТОР",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
  },
  {
    WORD_TO_TEST: "ДЕВОЧКА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "ДЕРЕВНЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "ЕЩЁ",
    TEST_POSITION: 0,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "ЖЕЛЕЗО",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "ЗАВОД",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Д",
    ANSWER_WRONG: "Т",
  },
  {
    WORD_TO_TEST: "ЗАЯЦ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Я",
    ANSWER_WRONG: "Е",
  },
  {
    WORD_TO_TEST: "ЗАВТРА",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "В",
    ANSWER_WRONG: "Ф",
  },
  {
    WORD_TO_TEST: "ЗДЕСЬ",
    TEST_POSITION: 0,
    ANSWER_RIGTH: "З",
    ANSWER_WRONG: "С",
  },
  {
    WORD_TO_TEST: "ИНЖЕНЕР",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "КАНАВА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КАРАНДАШ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КАРТИНА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КАРТОФЕЛЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КВАДРАТ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КОНЦЕРТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КОРАБЛЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КОРОВА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КОСТЁР",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КАПУСТА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КАРМАН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КАРТОН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КАРТОЧКА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КВАРТИРА",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "КОМПОТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КОНЬКИ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КОРИДОР",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КОСТЮМ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "КОСЫНКА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "ЛАДОНЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "ЛИНЕЙКА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
  },
  {
    WORD_TO_TEST: "ЛИМОН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
  },
  {
    WORD_TO_TEST: "ЛИСИЦА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
  },
  {
    WORD_TO_TEST: "МОСКВА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "МАШИНА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
  },
  {
    WORD_TO_TEST: "МЕДВЕДЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "МОЛОКО",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "МОРОЗ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
  {
    WORD_TO_TEST: "МАЛЬЧИК",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
  },
  {
    WORD_TO_TEST: "МЕБЕЛЬ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
  },
  {
    WORD_TO_TEST: "МОРКОВЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
  },
];

export const CLASS_1_LENGTH = C_1.length;

export const CLASS_1 = shuffle(C_1);
