import { shuffle, Word_type } from "@/utils";

const C_8: Word_type[] = [
  {
    DUAL: false,
    CORRECT_WORD: "АКАДЕМИЯ",
    WORD_TO_TEST: "АКАДЕМИЯ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АЛЛЕГОРИЯ",
    WORD_TO_TEST: "АЛЛЕГОРИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АРОМАТ",
    WORD_TO_TEST: "АРОМАТ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АССОРТИМЕНТ",
    WORD_TO_TEST: "АССОРТИМЕНТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АКАЦИЯ",
    WORD_TO_TEST: "АКАЦИЯ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АМБРАЗУРА",
    WORD_TO_TEST: "АМБРАЗУРА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АПОФЕОЗ",
    WORD_TO_TEST: "АПОФЕОЗ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АТТЕСТАТ",
    WORD_TO_TEST: "АТТЕСТАТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "ТТ",
    ANSWER_WRONG: "Т",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БЕЗВЕСТНЫЙ",
    WORD_TO_TEST: "БЕЗВЕСТНЫЙ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "СТ",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БЕССМЕРТНЫЙ",
    WORD_TO_TEST: "БЕССМЕРТНЫЙ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВЕЛИЧИНА",
    WORD_TO_TEST: "ВЕЛИЧИНА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВИТЯЗЬ",
    WORD_TO_TEST: "ВИТЯЗЬ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Я",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВПОПЫХАХ",
    WORD_TO_TEST: "ВПОПЫХАХ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ГАРАНТИЯ",
    WORD_TO_TEST: "ГАРАНТИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ГРАЦИОЗНЫЙ",
    WORD_TO_TEST: "ГРАЦИОЗНЫЙ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДЕБАТЫ",
    WORD_TO_TEST: "ДЕБАТЫ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДЕКЛАРАЦИЯ",
    WORD_TO_TEST: "ДЕКЛАРАЦИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДЕЛЕГАТ",
    WORD_TO_TEST: "ДЕЛЕГАТ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДЕПУТАТ",
    WORD_TO_TEST: "ДЕПУТАТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДЕКОРАЦИЯ",
    WORD_TO_TEST: "ДЕКОРАЦИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДЕЛИКАТНЫЙ",
    WORD_TO_TEST: "ДЕЛИКАТНЫЙ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ДИСКУССИЯ",
    WORD_TO_TEST: "ДИСКУССИЯ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЗОДЧИЙ",
    WORD_TO_TEST: "ЗОДЧИЙ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Д",
    ANSWER_WRONG: "Т",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ИДЕАЛ",
    WORD_TO_TEST: "ИДЕАЛ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ИЗЯЩЕСТВО",
    WORD_TO_TEST: "ИЗЯЩЕСТВО",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ИНТЕРЬЕР",
    WORD_TO_TEST: "ИНТЕРЬЕР",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "Ь",
    ANSWER_WRONG: "Ъ",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ИССЕЧЕННЫЙ",
    WORD_TO_TEST: "ИССЕЧЕННЫЙ",
    TEST_POSITION: 6,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ИЛЛЮМИНАЦИЯ",
    WORD_TO_TEST: "ИЛЛЮМИНАЦИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ИНТЕЛЛЕКТ",
    WORD_TO_TEST: "ИНТЕЛЛЕКТ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ИНФОРМАЦИЯ",
    WORD_TO_TEST: "ИНФОРМАЦИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "КАВАЛЕРИЯ",
    WORD_TO_TEST: "КАВАЛЛЕРИЯ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Л",
    ANSWER_WRONG: "ЛЛ",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КАРНАВАЛ",
    WORD_TO_TEST: "КАРНАВАЛ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОЛОКОЛ",
    WORD_TO_TEST: "КОЛОКОЛ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "КОМИССИЯ",
    WORD_TO_TEST: "КОМИССИЯ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОМПАНЬОН",
    WORD_TO_TEST: "КОМПАНЬОН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОМПОЗИЦИЯ",
    WORD_TO_TEST: "КОМПОЗИЦИЯ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОМФОРТ",
    WORD_TO_TEST: "КОМФОРТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОНФЕРЕНЦИЯ",
    WORD_TO_TEST: "КОНФЕРЕНЦИЯ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КАРТОТЕКА",
    WORD_TO_TEST: "КАРТОТЕКА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОЛОРИТ",
    WORD_TO_TEST: "КОЛОРИТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОМБИНАЦИЯ",
    WORD_TO_TEST: "КОМБИНАЦИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОМИТЕТ",
    WORD_TO_TEST: "КОМИТЕТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОМПОЗИТОР",
    WORD_TO_TEST: "КОМПОЗИТОР",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОМПОНЕНТ",
    WORD_TO_TEST: "КОМПОНЕНТ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОНГРЕСС",
    WORD_TO_TEST: "КОНГРЕСС",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "КОРРЕКТОР",
    WORD_TO_TEST: "КОРРЕКТОР",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "РР",
    ANSWER_WRONG: "Р",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КУТЮРЬЕ",
    WORD_TO_TEST: "КУТЮРЬЕ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Ю",
    ANSWER_WRONG: "У",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЛАУРЕАТ",
    WORD_TO_TEST: "ЛАУРЕАТ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ЛАНДШАФТ",
    WORD_TO_TEST: "ЛАНДШАФТ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "НД",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "МАНЁВР",
    WORD_TO_TEST: "МАНЁВР",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "МИГРАЦИЯ",
    WORD_TO_TEST: "МИГРАЦИЯ",
    TEST_POSITION: 6,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Ы",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "МОНОЛОГ",
    WORD_TO_TEST: "МОНОЛОГ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "МАССИВ",
    WORD_TO_TEST: "МАССИВ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "МИКРОФОН",
    WORD_TO_TEST: "МИКРОФОН",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ОБЕЛИСК",
    WORD_TO_TEST: "ОБЕЛИСК",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ОЖИВЛЕННЫЙ",
    WORD_TO_TEST: "ОЖИВЛЕННЫЙ",
    TEST_POSITION: 6,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ОРАТОР",
    WORD_TO_TEST: "ОРАТОР",
    TEST_POSITION: 0,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ОРНАМЕНТ",
    WORD_TO_TEST: "ОРНАМЕНТ",
    TEST_POSITION: 0,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПАНОРАМА",
    WORD_TO_TEST: "ПАНОРАМА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПАФОС",
    WORD_TO_TEST: "ПАФОС",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПИТОМЕЦ",
    WORD_TO_TEST: "ПИТОМЕЦ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПРЕЕМНИК",
    WORD_TO_TEST: "ПРЕЕМНИК",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ПРЕЛЕСТНЫЙ",
    WORD_TO_TEST: "ПРЕЛЕСТНЫЙ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "СТ",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПРИВИЛЕГИЯ",
    WORD_TO_TEST: "ПРИВИЛЕГИЯ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ПРОДЮСЕР",
    WORD_TO_TEST: "ПРОДЮССЕР",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "С",
    ANSWER_WRONG: "СС",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПРОТОТИП",
    WORD_TO_TEST: "ПРОТОТИП",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ПЬЕСА",
    WORD_TO_TEST: "ПЬЕССА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "С",
    ANSWER_WRONG: "СС",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ПОЗДНИЙ",
    WORD_TO_TEST: "ПОЗДНИЙ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "ЗД",
    ANSWER_WRONG: "З",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПОСТАМЕНТ",
    WORD_TO_TEST: "ПОСТАМЕНТ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПРОПОРЦИЯ",
    WORD_TO_TEST: "ПРОПОРЦИЯ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПЬЕДЕСТАЛ",
    WORD_TO_TEST: "ПЬЕДЕСТАЛ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "РЕЗОЛЮЦИЯ",
    WORD_TO_TEST: "РЕЗОЛЮЦИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "РЕЛИКВИЯ",
    WORD_TO_TEST: "РЕЛИКВИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "РЕПЕТИЦИЯ",
    WORD_TO_TEST: "РЕПЕТИЦИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "РЕССОРА",
    WORD_TO_TEST: "РЕССОРА",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "РИТОРИКА",
    WORD_TO_TEST: "РИТОРИКА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "СОВРЕМЕННИК",
    WORD_TO_TEST: "СОВРЕМЕННИК",
    TEST_POSITION: 7,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "СОЗДАННЫЙ",
    WORD_TO_TEST: "СОЗДАННЫЙ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "СТИПЕНДИЯ",
    WORD_TO_TEST: "СТИПЕНДИЯ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "СКАНЕР",
    WORD_TO_TEST: "СКАННЕР",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Н",
    ANSWER_WRONG: "НН",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "СОЖЖЕННЫЙ",
    WORD_TO_TEST: "СОЖЖЕННЫЙ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "ЖЖ",
    ANSWER_WRONG: "Ж",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ТЕРРАСА",
    WORD_TO_TEST: "ТЕРРАСА",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "РР",
    ANSWER_WRONG: "Р",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ШЕСТВОВАТЬ",
    WORD_TO_TEST: "ШЕВСТВОВАТЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "ЕВ",
    RANDOM: +Math.random().toFixed(2),
  },
];

export const CLASS_8_LENGTH = C_8.length;

export const CLASS_8 = shuffle(C_8);
