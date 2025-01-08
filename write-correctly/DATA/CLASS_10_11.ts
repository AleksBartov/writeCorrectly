import { shuffle, Word_type } from "@/utils";

const C_10_11: Word_type[] = [
  {
    DUAL: false,
    CORRECT_WORD: "АБАЖУР",
    WORD_TO_TEST: "АБАЖУР",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АБОРИГЕН",
    WORD_TO_TEST: "АБОРИГЕН",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АБСТРАКТНЫЙ",
    WORD_TO_TEST: "АБСТРАКТНЫЙ",
    TEST_POSITION: 0,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АЖИОТАЖ",
    WORD_TO_TEST: "АЖИОТАЖ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АККОРДЕОН",
    WORD_TO_TEST: "АККОРДЕОН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "КК",
    ANSWER_WRONG: "К",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АКСЕЛЕРАЦИЯ",
    WORD_TO_TEST: "АКСЕЛЕРАЦИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АЛЛИТЕРАЦИЯ",
    WORD_TO_TEST: "АЛЛИТЕРАЦИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АЛЬМАНАХ",
    WORD_TO_TEST: "АЛЬМАНАХ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АМПЛИТУДА",
    WORD_TO_TEST: "АМПЛИТУДА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АНАЛОГИЯ",
    WORD_TO_TEST: "АНАЛОГИЯ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АНАХРОНИЗМ",
    WORD_TO_TEST: "АНАХРОНИЗМ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АННАЛЫ",
    WORD_TO_TEST: "АННАЛЫ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АНОМАЛИЯ",
    WORD_TO_TEST: "АНОМАЛИЯ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АПОГЕЙ",
    WORD_TO_TEST: "АПОГЕЙ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АППАРАТ",
    WORD_TO_TEST: "АППАРАТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "ПП",
    ANSWER_WRONG: "П",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АРХИПЕЛАГ",
    WORD_TO_TEST: "АРХИПЕЛАГ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АСИММЕТРИЯ",
    WORD_TO_TEST: "АСИММЕТРИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "ММ",
    ANSWER_WRONG: "М",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АДАПТАЦИЯ",
    WORD_TO_TEST: "АДАПТАЦИЯ",
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
    CORRECT_WORD: "АЛЬБАТРОС",
    WORD_TO_TEST: "АЛЬБАТРОС",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АНАФОРА",
    WORD_TO_TEST: "АНАФОРА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АНЕКДОТ",
    WORD_TO_TEST: "АНЕКДОТ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АНТЕННА",
    WORD_TO_TEST: "АНТЕННА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АНТИЦИКЛОН",
    WORD_TO_TEST: "АНТИЦИКЛОН",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АППЕНДИЦИТ",
    WORD_TO_TEST: "АППЕНДИЦИТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "ПП",
    ANSWER_WRONG: "П",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "АРТИКУЛЯЦИЯ",
    WORD_TO_TEST: "АРТИКУЛЯЦИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АСЕССОР",
    WORD_TO_TEST: "АСЕССОР",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "АССАМБЛЕЯ",
    WORD_TO_TEST: "АССАМБЛЕЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БАДМИНТОН",
    WORD_TO_TEST: "БАДМИНТОН",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БАЛЛАСТ",
    WORD_TO_TEST: "БАЛЛАСТ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БАРЕЛЬЕФ",
    WORD_TO_TEST: "БАРЕЛЬЕФ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БЕЗЫСХОДНЫЙ",
    WORD_TO_TEST: "БЕЗЫСХОДНЫЙ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Ы",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БЕЛЛАДОННА",
    WORD_TO_TEST: "БЕЛЛАДОННА",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БИЛЛИОН",
    WORD_TO_TEST: "БИЛЛИОН",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БОНБОНЬЕРКА",
    WORD_TO_TEST: "БОНБОНЬЕРКА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БРИЛЬЯНТ",
    WORD_TO_TEST: "БРИЛЬЯНТ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БУЛАНЫЙ",
    WORD_TO_TEST: "БУЛАННЫЙ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Н",
    ANSWER_WRONG: "НН",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БУХГАЛТЕР",
    WORD_TO_TEST: "БУХГАЛТЕР",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "УХ",
    ANSWER_WRONG: "У",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БАРОККО",
    WORD_TO_TEST: "БАРОККО",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "КК",
    ANSWER_WRONG: "К",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БАТИСКАФ",
    WORD_TO_TEST: "БАТИСКАФ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БЕЛИБЕРДА",
    WORD_TO_TEST: "БЕЛИБЕРДА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БЕСКОЗЫРКА",
    WORD_TO_TEST: "БЕСКОЗЫРКА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БЕЧЕВА",
    WORD_TO_TEST: "БЕЧЕВА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БРИЛЛИАНТ",
    WORD_TO_TEST: "БРИЛЛИАНТ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "БУКИНИСТ",
    WORD_TO_TEST: "БУКИНИСТ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "БЮЛЛЕТЕНЬ",
    WORD_TO_TEST: "БЮЛЛЕТЕНЬ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВДРЕБЕЗГИ",
    WORD_TO_TEST: "ВДРЕБЕЗГИ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВЕЛЕРЕЧИВЫЙ",
    WORD_TO_TEST: "ВЕЛЕРЕЧИВЫЙ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВЕРМИШЕЛЬ",
    WORD_TO_TEST: "ВЕРМИШЕЛЬ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВЕРТИШЕЙКА",
    WORD_TO_TEST: "ВЕРТИШЕЙКА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВИОЛОНЧЕЛЬ",
    WORD_TO_TEST: "ВИОЛОНЧЕЛЬ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВОДОРОСЛЬ",
    WORD_TO_TEST: "ВОДОРОСЛЬ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВПЕРЕВАЛКУ",
    WORD_TO_TEST: "ВПЕРЕВАЛКУ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВПОТЬМАХ",
    WORD_TO_TEST: "ВПОТЬМАХ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВПРИПРЫЖКУ",
    WORD_TO_TEST: "ВПРИПРЫЖКУ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ВРАССЫПНУЮ",
    WORD_TO_TEST: "ВРАССЫПНУЮ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВАКХАНАЛИЯ",
    WORD_TO_TEST: "ВАКХАНАЛИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ВЕЛИКОРОСС",
    WORD_TO_TEST: "ВЕЛИКОРОСС",
    TEST_POSITION: 8,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВЕРНИСАЖ",
    WORD_TO_TEST: "ВЕРНИСАЖ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВПЕРЕМЕШКУ",
    WORD_TO_TEST: "ВПЕРЕМЕШКУ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВПОВАЛКУ",
    WORD_TO_TEST: "ВПОВАЛКУ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ВТИХОМОЛКУ",
    WORD_TO_TEST: "ВТИХОМОЛКУ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ГАБАРИТ",
    WORD_TO_TEST: "ГАБАРИТ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ГИГИЕНА",
    WORD_TO_TEST: "ГИГИЕНА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ГЕНЕАЛОГИЯ",
    WORD_TO_TEST: "ГЕНЕАЛОГИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ГИПЕРБОЛА",
    WORD_TO_TEST: "ГИПЕРБОЛА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ГРАДАЦИЯ",
    WORD_TO_TEST: "ГРАДАЦИЯ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДЕФИЦИТ",
    WORD_TO_TEST: "ДЕФИЦИТ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ДИССОНАНС",
    WORD_TO_TEST: "ДИССОНАНС",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДОВЛЕТЬ",
    WORD_TO_TEST: "ДОВЛЕТЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
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
    CORRECT_WORD: "ДЕРИВАЦИЯ",
    WORD_TO_TEST: "ДЕРИВАЦИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ДЖЕНТЛЬМЕН",
    WORD_TO_TEST: "ДЖЕНТЕЛЬМЕН",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Т",
    ANSWER_WRONG: "ТЕ",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДИКТОФОН",
    WORD_TO_TEST: "ДИКТОФОН",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДИССЕРТАЦИЯ",
    WORD_TO_TEST: "ДИССЕРТАЦИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДИФИРАМБ",
    WORD_TO_TEST: "ДИФИРАМБ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ДОМИНАНТА",
    WORD_TO_TEST: "ДОМИНАНТА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЕВАНГЕЛИЕ",
    WORD_TO_TEST: "ЕВАНГЕЛИЕ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЕРЕТИК",
    WORD_TO_TEST: "ЕРЕТИК",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЖЕЛАТИН",
    WORD_TO_TEST: "ЖЕЛАТИН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ЖОКЕЙ",
    WORD_TO_TEST: "ЖОККЕЙ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "К",
    ANSWER_WRONG: "КК",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЖЁЛОБ",
    WORD_TO_TEST: "ЖЁЛОБ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Ё",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЖЕРДОЧКА",
    WORD_TO_TEST: "ЖЕРДОЧКА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЖОНГЛЁР",
    WORD_TO_TEST: "ЖОНГЛЁР",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЗОДИАК",
    WORD_TO_TEST: "ЗОДИАК",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ИДИЛЛИЯ",
    WORD_TO_TEST: "ИДИЛЛИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ИНГРЕДИЕНТ",
    WORD_TO_TEST: "ИНГРЕДИЕНТ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ИНФИНИТИВ",
    WORD_TO_TEST: "ИНФИНИТИВ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ИНКАССАТОР",
    WORD_TO_TEST: "ИНКАССАТОР",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ИСПОДТИШКА",
    WORD_TO_TEST: "ИСПОДТИШКА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КАКОФОНИЯ",
    WORD_TO_TEST: "КАКОФОНИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КАНОНАДА",
    WORD_TO_TEST: "КАНОНАДА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОВРИЖКА",
    WORD_TO_TEST: "КОВРИЖКА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "КОРАЛЛ",
    WORD_TO_TEST: "КОРАЛЛ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "КОТТЕДЖ",
    WORD_TO_TEST: "КОТТЕДЖ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "ТТ",
    ANSWER_WRONG: "Т",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "КАССЕТА",
    WORD_TO_TEST: "КАССЕТА",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "КОЛОННАДА",
    WORD_TO_TEST: "КОЛОННАДА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "КОНТЕКСТ",
    WORD_TO_TEST: "КОНТЕКСТ",
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
    CORRECT_WORD: "ЛАБИРИНТ",
    WORD_TO_TEST: "ЛАБИРИНТ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "МАВЗОЛЕЙ",
    WORD_TO_TEST: "МАВЗОЛЕЙ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "МАКУЛАТУРА",
    WORD_TO_TEST: "МАКУЛАТУРА",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "МАСКАРАД",
    WORD_TO_TEST: "МАСКАРАД",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "МАСЛЕНИЦА",
    WORD_TO_TEST: "МАСЛЕННИЦА",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "Н",
    ANSWER_WRONG: "НН",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "МАЧЕХА",
    WORD_TO_TEST: "МАЧЕХА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "МЕТРДОТЕЛЬ",
    WORD_TO_TEST: "МЕТРОДОТЕЛЬ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Р",
    ANSWER_WRONG: "РО",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "НАРЦИСС",
    WORD_TO_TEST: "НАРЦИСС",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "НОВЕЛЛА",
    WORD_TO_TEST: "НОВЕЛЛА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "НЕОЛОГИЗМ",
    WORD_TO_TEST: "НЕОЛОГИЗМ",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "НОСТАЛЬГИЯ",
    WORD_TO_TEST: "НОСТАЛЬГИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ОБОГАЩАТЬ",
    WORD_TO_TEST: "ОБОГАЩАТЬ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ОККУПАЦИЯ",
    WORD_TO_TEST: "ОККУПАЦИЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "КК",
    ANSWER_WRONG: "К",
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
    DUAL: false,
    CORRECT_WORD: "ОРАНЖЕРЕЯ",
    WORD_TO_TEST: "ОРАНЖЕРЕЯ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПАПОРОТНИК",
    WORD_TO_TEST: "ПАПОРОТНИК",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПРОПАГАНДА",
    WORD_TO_TEST: "ПРОПАГАНДА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПАНТОМИМА",
    WORD_TO_TEST: "ПАНТОМИМА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПЕРИФЕРИЯ",
    WORD_TO_TEST: "ПЕРИФЕРИЯ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПЕСКАРЬ",
    WORD_TO_TEST: "ПЕСКАРЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПОНТОН",
    WORD_TO_TEST: "ПОНТОН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ПУДИНГ",
    WORD_TO_TEST: "ПУДИНГ",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "Г",
    ANSWER_WRONG: "К",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "РЕМАРКА",
    WORD_TO_TEST: "РЕМАРКА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "СЕМАНТИКА",
    WORD_TO_TEST: "СЕМАНТИКА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "САВАННА",
    WORD_TO_TEST: "САВАННА",
    TEST_POSITION: 4,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "СВЯЩЕННИК",
    WORD_TO_TEST: "СВЯЩЕННИК",
    TEST_POSITION: 5,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "СЕМИНАР",
    WORD_TO_TEST: "СЕМИНАР",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ТУШЁНКА",
    WORD_TO_TEST: "ТУШЁНКА",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Ё",
    ANSWER_WRONG: "О",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ФОНТАН",
    WORD_TO_TEST: "ФОНТАН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "О",
    ANSWER_WRONG: "А",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ХЛЕСТАТЬ",
    WORD_TO_TEST: "ХЛЕСТАТЬ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ЦЕЛЛОФАН",
    WORD_TO_TEST: "ЦЕЛЛОФАН",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "ЛЛ",
    ANSWER_WRONG: "Л",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЦЫКАТЬ",
    WORD_TO_TEST: "ЦЫКАТЬ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Ы",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЦИЛИНДР",
    WORD_TO_TEST: "ЦИЛИНДР",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Ы",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЦЫГАН",
    WORD_TO_TEST: "ЦЫГАН",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Ы",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЦЫПЛЁНОК",
    WORD_TO_TEST: "ЦЫПЛЁНОК",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Ы",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЦЫЦ",
    WORD_TO_TEST: "ЦЫЦ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Ы",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЧАСОВНЯ",
    WORD_TO_TEST: "ЧАСОВНЯ",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ШЕРЕНГА",
    WORD_TO_TEST: "ШЕРЕНГА",
    TEST_POSITION: 1,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ШОВ",
    WORD_TO_TEST: "ШОВ",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "В",
    ANSWER_WRONG: "Ф",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЩУПАЛЬЦА",
    WORD_TO_TEST: "ЩУПАЛЬЦА",
    TEST_POSITION: 7,
    ANSWER_RIGTH: "А",
    ANSWER_WRONG: "Ы",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЭВФЕМИЗМ",
    WORD_TO_TEST: "ЭВФЕМИЗМ",
    TEST_POSITION: 3,
    ANSWER_RIGTH: "Е",
    ANSWER_WRONG: "И",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ЭКСПРЕССИЯ",
    WORD_TO_TEST: "ЭКСПРЕССИЯ",
    TEST_POSITION: 6,
    ANSWER_RIGTH: "СС",
    ANSWER_WRONG: "С",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: false,
    CORRECT_WORD: "ЭЛИКСИР",
    WORD_TO_TEST: "ЭЛИКСИР",
    TEST_POSITION: 2,
    ANSWER_RIGTH: "И",
    ANSWER_WRONG: "Е",
    RANDOM: +Math.random().toFixed(2),
  },
  {
    DUAL: true,
    CORRECT_WORD: "ЯВСТВЕННЫЙ",
    WORD_TO_TEST: "ЯВСТВЕННЫЙ",
    TEST_POSITION: 6,
    ANSWER_RIGTH: "НН",
    ANSWER_WRONG: "Н",
    RANDOM: +Math.random().toFixed(2),
  },
];

export const CLASS_10_11_LENGTH = C_10_11.length;

export const CLASS_10_11 = shuffle(C_10_11);
