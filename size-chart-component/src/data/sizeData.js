// nike

const NikeMenShoes = [
  { us: "6", uk: "38.5", eu: "5,5", cm: "24" },
  { us: "6,5", uk: "39", eu: "6", cm: "24.5" },
  { us: "7", uk: "40", eu: "6", cm: "25" },
  { us: "7.5", uk: "40.5", eu: "6.5", cm: "25.5" },
  { us: "8", uk: "41", eu: "7", cm: "26" },
  { us: "8.5", uk: "42", eu: "7.5", cm: "26.5" },
  { us: "9", uk: "42.5", eu: "8", cm: "27" },
  { us: "9.5", uk: "43", eu: "8.5", cm: "27.5" },
  { us: "10", uk: "44", eu: "9", cm: "28" },
  { us: "10.5", uk: "44.5", eu: "9.5", cm: "28.5" },
  { us: "11", uk: "45", eu: "10", cm: "29" },
  { us: "11.5", uk: "45.5", eu: "10.5", cm: "29.5" },
  { us: "12", uk: "46", eu: "11", cm: "30" },
  { us: "12.5", uk: "47", eu: "11.5", cm: "30.5" },
  { us: "13", uk: "47.5", eu: "12", cm: "31" },
  { us: "13.5", uk: "48", eu: "12.5", cm: "31.5" },
  { us: "14", uk: "48.5", eu: "13", cm: "32" },
  { us: "15", uk: "49.5", eu: "14", cm: "33" },
  { us: "16", uk: "50.5", eu: "15", cm: "34" },
  { us: "17", uk: "51.5", eu: "16", cm: "35" },
  { us: "18", uk: "52.5", eu: "17", cm: "36" },
];

const NikeMenTop = [
  { size: "S", chest: "73-81", waist: "88-96", hips: "88-96" },
  { size: "M", chest: "81-89", waist: "96-104", hips: "96-104" },
  { size: "L", chest: "89-97", waist: "104-112", hips: "104-112" },
  { size: "XL", chest: "97-109", waist: "112-124", hips: "112-120" },
  { size: "XXL", chest: "109-121", waist: "124-136", hips: "120-128" },
  { size: "3XL", chest: "121-133", waist: "136-148", hips: "128-136" },
  { size: "4XL", chest: "133-145", waist: "147-160", hips: "136-148" },
];

const NikeMenBottom = [
  {
    size: "XS",
    waist: "73",
    hips: "88",
    reginsiderl: "",
    shortinsiderl: "",
  },
];

const NikeMenPants = [
  {
    size: "s",
    waist: "79-84",
    hips: "94-99",
    tallinleg: "",
    shortinleg: "",
    reginleg: "",
  },
];

const NikeWomenShoes = [
  { us: "5", uk: "35.5", eu: "2.5", cm: "22" },
  { us: "5.5", uk: "36", eu: "3", cm: "22.5" },
  { us: "6", uk: "36.5", eu: "3.5", cm: "23" },
  { us: "6.5", uk: "37.5", eu: "4", cm: "23.5" },
  { us: "7", uk: "38", eu: "4.5", cm: "24" },
  { us: "7.5", uk: "38.5", eu: "5", cm: "24.5" },
  { us: "8", uk: "39", eu: "5.5", cm: "25" },
  { us: "8.5", uk: "40", eu: "6", cm: "25.5" },
  { us: "9", uk: "40.5", eu: "6.5", cm: "26" },
  { us: "9.5", uk: "41", eu: "7", cm: "26.5" },
  { us: "10", uk: "42", eu: "7.5", cm: "27" },
  { us: "10.5", uk: "42.5", eu: "8", cm: "27.5" },
  { us: "11", uk: "43", eu: "8.5", cm: "28" },
  { us: "11.5", uk: "44", eu: "9", cm: "28.5" },
  { us: "12", uk: "44.5", eu: "9.5", cm: "29" },
];

const NikeWomenTop = [
  { size: "XS", chest: "60-67", waist: "", hips: "84-91" },
  { size: "S", chest: "67-74", waist: "", hips: "91-98" },
  { size: "M", chest: "74-81", waist: "", hips: "98-105" },
  { size: "L", chest: "81-88", waist: "", hips: "105-112" },
  { size: "XL", chest: "88-98", waist: "", hips: "112-120" },
  { size: "XXL", chest: "98-108", waist: "", hips: "120-128" },
];

const NikeWomenBottom = [];

const NikeWomenPants = [];

const NikeKidsShoes = [
  { us: "0C", uk: "15", eu: "0", cm: "6" },
  { us: "1C", uk: "16", eu: "0.5", cm: "7" },
  { us: "1.5C", uk: "16.5", eu: "1", cm: "7.5" },
  { us: "2C", uk: "17", eu: "1.5", cm: "8" },
  { us: "2.5C", uk: "18", eu: "2", cm: "8.5" },
  { us: "3C", uk: "18.5", eu: "2.5", cm: "9" },
  { us: "3.5C", uk: "19", eu: "3", cm: "9.5" },
  { us: "4C", uk: "19.5", eu: "3.5", cm: "10" },
  { us: "4.5C", uk: "20", eu: "4", cm: "10.5" },
  { us: "5C", uk: "21", eu: "4.5", cm: "11" },
  { us: "5.5C", uk: "21.5", eu: "5", cm: "11.5" },
  { us: "6C", uk: "22", eu: "5.5", cm: "12" },
  { us: "6.5C", uk: "22.5", eu: "6", cm: "12.5" },
  { us: "7C", uk: "23.5", eu: "6.5", cm: "13" },
  { us: "7.5C", uk: "24", eu: "7", cm: "13.5" },
  { us: "8C", uk: "25", eu: "7.5", cm: "14" },
  { us: "8.5C", uk: "25.5", eu: "8", cm: "14.5" },
  { us: "9C", uk: "26", eu: "8.5", cm: "15" },
  { us: "9.5C", uk: "26.5", eu: "9", cm: "15.5" },
  { us: "10C", uk: "27", eu: "9.5", cm: "16" },
  { us: "10.5C", uk: "27.5", eu: "10", cm: "16.5" },
  { us: "11C", uk: "28", eu: "10.5", cm: "17" },
  { us: "11.5C", uk: "28.5", eu: "11", cm: "17.5" },
  { us: "12C", uk: "29.5", eu: "11.5", cm: "18" },
  { us: "12.5C", uk: "30", eu: "12", cm: "18.5" },
  { us: "13C", uk: "31", eu: "12.5", cm: "19" },
  { us: "13.5C", uk: "31.5", eu: "13", cm: "19.5" },
  { us: "1Y", uk: "32", eu: "13.5", cm: "20" },
  { us: "1.5Y", uk: "33", eu: "1", cm: "20.5" },
  { us: "2Y", uk: "33.5", eu: "1.5", cm: "21" },
  { us: "2.5Y", uk: "34", eu: "2", cm: "21.5" },
  { us: "3Y", uk: "35", eu: "2.5", cm: "22" },
  { us: "3.5Y", uk: "35.5", eu: "3", cm: "22.5" },
  { us: "4Y", uk: "36", eu: "3.5", cm: "23" },
  { us: "4.5Y", uk: "36.5", eu: "4", cm: "23.5" },
  { us: "5Y", uk: "37.5", eu: "4.5", cm: "23.5" },
  { us: "5.5Y", uk: "38", eu: "5", cm: "24" },
  { us: "6Y", uk: "38.5", eu: "5.5", cm: "24" },
  { us: "6.5Y", uk: "39", eu: "6", cm: "24.5" },
  { us: "7Y", uk: "40", eu: "6", cm: "25" },
  { us: "7.5Y", uk: "40.5", eu: "6.5", cm: "25.5" },
  { us: "8Y", uk: "41", eu: "7", cm: "26" },
  { us: "8.5Y", uk: "42", eu: "7.5", cm: "26.5" },
  { us: "9Y", uk: "42.5", eu: "8", cm: "27" },
  { us: "9.5Y", uk: "43", eu: "8.5", cm: "27.5" },
  { us: "10Y", uk: "44", eu: "9", cm: "28" },
  { us: "10.5Y", uk: "44.5", eu: "9.5", cm: "28.5" },
];

const NikeKidsTop = [
  { size: "XXS", chest: "54-54", waist: "52-53", hips: "54-56" },
  { size: "XS", chest: "54-56", waist: "53-56", hips: "56-59" },
  { size: "S", chest: "56-58", waist: "56-59", hips: "59-61" },
  { size: "M", chest: "58-59", waist: "59-61", hips: "61-63" },
  { size: "L", chest: "59-60", waist: "61-63", hips: "63-66" },
  { size: "XL", chest: "60-61", waist: "63-66", hips: "66-70" },
];

const NikeKidsBottom = [];

const NikeKidsPants = [];

// adidas

const AdidasMenShoes = [
  { us: "4", uk: "36", eu: "3.5", cm: "22" },
  { us: "4.5", uk: "36 2/3", eu: "4", cm: "22.5" },
  { us: "5", uk: "37 1/3", eu: "4.5", cm: "23" },
  { us: "5.5", uk: "38", eu: "5", cm: "23.5" },
  { us: "6", uk: "38 2/3", eu: "5.5", cm: "24" },
  { us: "6.5", uk: "39 1/3", eu: "6", cm: "24.5" },
  { us: "7", uk: "40", eu: "6.5", cm: "25" },
  { us: "7.5", uk: "40 2/3", eu: "7", cm: "25.5" },
  { us: "8", uk: "41 1/3", eu: "7.5", cm: "26" },
  { us: "8.5", uk: "42", eu: "8", cm: "26.5" },
  { us: "9", uk: "42 2/3", eu: "8.5", cm: "27" },
  { us: "9.5", uk: "43 1/3", eu: "9", cm: "27.5" },
  { us: "10", uk: "44", eu: "9.5", cm: "28" },
  { us: "10.5", uk: "44 2/3", eu: "10", cm: "28.5" },
  { us: "11", uk: "45 1/3", eu: "10.5", cm: "29" },
  { us: "11.5", uk: "46", eu: "11", cm: "29.5" },
  { us: "12", uk: "46 2/3", eu: "11.5", cm: "30" },
  { us: "12.5", uk: "47 1/3", eu: "12", cm: "30.5" },
  { us: "13", uk: "48", eu: "12.5", cm: "31" },
  { us: "13.5", uk: "48 2/3", eu: "13", cm: "31.5" },
  { us: "14", uk: "49 1/3", eu: "13.5", cm: "32" },
  { us: "14.5", uk: "50", eu: "14", cm: "32.5" },
  { us: "15", uk: "50 2/3", eu: "14.5", cm: "33" },
  { us: "16", uk: "51 1/3", eu: "15", cm: "34" },
  { us: "17", uk: "52 2/3", eu: "16", cm: "35" },
  { us: "18", uk: "53 1/3", eu: "17", cm: "36" },
  { us: "19", uk: "54 2/3", eu: "18", cm: "37" },
  { us: "20", uk: "55 2/3", eu: "19", cm: "38" },
];

const AdidasMenTop = [
  { size: "XS", chest: "71 - 75", waist: "82 - 87", hips: "82 - 86" },
  { size: "S", chest: "76 - 82", waist: "88 - 94", hips: "87 - 93" },
  { size: "M", chest: "83 - 90", waist: "95 - 102", hips: "94 - 101" },
  { size: "L", chest: "91 - 99", waist: "103 - 111", hips: "102 - 110" },
  { size: "XL", chest: "100 - 109", waist: "112 - 121", hips: "111 - 119" },
  { size: "XXL", chest: "110 - 121", waist: "122 - 132", hips: "120 - 128" },
  { size: "3XL", chest: "122 - 134", waist: "133 - 144", hips: "129 - 138" },
];

const AdidasMenBottom = [];

const AdidasMenPants = [];

const AdidasWomenShoes = [
  { us: "5", uk: "36", eu: "3.5", cm: "22" },
  { us: "5.5", uk: "36 2/3", eu: "4", cm: "22.5" },
  { us: "6", uk: "37 1/3", eu: "4.5", cm: "23" },
  { us: "6.5", uk: "38", eu: "5", cm: "23.5" },
  { us: "7", uk: "38 2/3", eu: "5.5", cm: "24" },
  { us: "7.5", uk: "39 1/3", eu: "6", cm: "24.5" },
  { us: "8", uk: "40", eu: "6.5", cm: "25" },
  { us: "8.5", uk: "40 2/3", eu: "7", cm: "25.5" },
  { us: "9", uk: "41 1/3", eu: "7.5", cm: "26" },
  { us: "9.5", uk: "42", eu: "8", cm: "26.5" },
  { us: "10", uk: "42 2/3", eu: "8.5", cm: "27" },
  { us: "10.5", uk: "43 1/3", eu: "9", cm: "27.5" },
  { us: "11", uk: "44", eu: "9.5", cm: "28" },
  { us: "11.5", uk: "44 2/3", eu: "10", cm: "28.5" },
  { us: "12", uk: "45 1/3", eu: "10.5", cm: "29" },
  { us: "12.5", uk: "46", eu: "11", cm: "29.5" },
  { us: "13", uk: "46 2/3", eu: "11.5", cm: "30" },
  { us: "13.5", uk: "47 1/3", eu: "12", cm: "30.5" },
  { us: "14", uk: "48", eu: "12.5", cm: "31" },
  { us: "14.5", uk: "48 2/3", eu: "13", cm: "31.5" },
  { us: "15", uk: "49 1/3", eu: "13.5", cm: "32" },
  { us: "15.5", uk: "50", eu: "14", cm: "32.5" },
];

const AdidasWomenTop = [
  { size: "XXS", chest: "57 - 60", waist: "73 - 76", hips: "82 - 85" },
  { size: "XS", chest: "61 - 66", waist: "77 - 82", hips: "86 - 91" },
  { size: "S", chest: "67 - 72", waist: "83 - 88", hips: "92 - 97" },
  { size: "M", chest: "73 - 78", waist: "89 - 94", hips: "98 - 103" },
  { size: "L", chest: "79 - 85", waist: "95 - 101", hips: "104 - 110" },
  { size: "XL", chest: "86 - 94", waist: "102 - 109", hips: "111 - 117" },
  { size: "XXL", chest: "94 - 104", waist: "110 - 118", hips: "118 - 125" },
  { size: "1X", chest: "89 - 98", waist: "104 - 113", hips: "111 - 120" },
  { size: "2X", chest: "99 - 108", waist: "114 - 123", hips: "121 - 130" },
  { size: "3X", chest: "109 - 118", waist: "124 - 133", hips: "131 - 140" },
  { size: "4X", chest: "119 - 128", waist: "134 - 143", hips: "141 - 150" },
];

const AdidasWomenBottom = [];

const AdidasWomenPants = [];

const AdidasKidsShoes = [
  { us: "1k", uk: "16", eu: "0k", cm: "8.1" },
  { us: "2k", uk: "17", eu: "1k", cm: "9" },
  { us: "3k", uk: "18", eu: "2k", cm: "9.8" },
  { us: "4k", uk: "19", eu: "3k", cm: "10.6" },
  { us: "5k", uk: "20", eu: "4k", cm: "11.5" },
  { us: "5.5k", uk: "21", eu: "5k", cm: "12.3" },
  { us: "6k", uk: "22", eu: "5.5k", cm: "12.8" },
  { us: "7k", uk: "23.5", eu: "6.5k", cm: "13.6" },
  { us: "7.5", uk: "24", eu: "7k", cm: "14" },
  { us: "8k", uk: "25", eu: "7.5k", cm: "14.5" },
  { us: "8.5k", uk: "25.5", eu: "8k", cm: "14.9" },
  { us: "9k", uk: "26", eu: "8.5k", cm: "15.3" },
  { us: "9.5k", uk: "26.5", eu: "9k", cm: "15.7" },
  { us: "10k", uk: "27", eu: "9.5k", cm: "16.1" },
  { us: "10.5k", uk: "28", eu: "10k", cm: "16.6" },
  { us: "11k", uk: "28.5", eu: "10.5k", cm: "17" },
  { us: "11.5k", uk: "29", eu: "11k", cm: "17.4" },
  { us: "12k", uk: "30", eu: "11.5k", cm: "17.8" },
  { us: "12.5k", uk: "30.5", eu: "12k", cm: "18.3" },
  { us: "13k", uk: "31", eu: "12.5k", cm: "18.7" },
  { us: "13.5k", uk: "31.5", eu: "13k", cm: "19.1" },
  { us: "1", uk: "32", eu: "13.5k", cm: "19.5" },
  { us: "1.5", uk: "33", eu: "1", cm: "20" },
  { us: "2", uk: "33.5", eu: "1.5", cm: "20.4" },
  { us: "2.5", uk: "34", eu: "2", cm: "20.8" },
  { us: "3", uk: "35", eu: "2.5", cm: "21.2" },
  { us: "3.5", uk: "35.5", eu: "3", cm: "21.6" },
  { us: "4", uk: "36", eu: "3.5", cm: "22.1" },
  { us: "4.5", uk: "36 2/3", eu: "4", cm: "22.5" },
  { us: "5", uk: "37 1/3", eu: "4.5", cm: "22.9" },
  { us: "5.5", uk: "38", eu: "5", cm: "23.3" },
  { us: "6", uk: "38 2/3", eu: "5.5", cm: "23.8" },
  { us: "6.5", uk: "39 1/3", eu: "6", cm: "24.2" },
  { us: "7", uk: "40", eu: "6.5", cm: "24.6" },
  { us: "7.5", uk: "40 2/3", eu: "7", cm: "25" },
];

const AdidasKidsTop = [];

const AdidasKidsBottoms = [];

const AdidasKidsPants = [];

// puma
const PumaMenShoes = [
  { us: "6", uk: "38", eu: "5", cm: "24" },
  { us: "6.5", uk: "38.5", eu: "5.5", cm: "24.5" },
  { us: "7", uk: "39", eu: "6", cm: "25" },
  { us: "7.5", uk: "40", eu: "6.5", cm: "25.5" },
  { us: "8", uk: "40.5", eu: "7", cm: "26" },
  { us: "8.5", uk: "41", eu: "7.5", cm: "26.5" },
  { us: "9", uk: "42", eu: "8", cm: "27" },
  { us: "9.5", uk: "42.5", eu: "8.5", cm: "27.5" },
  { us: "10", uk: "43", eu: "9", cm: "28" },
  { us: "10.5", uk: "44", eu: "9.5", cm: "28.5" },
  { us: "11", uk: "44.5", eu: "10", cm: "29" },
  { us: "11.5", uk: "45", eu: "10.5", cm: "29.5" },
  { us: "12", uk: "46", eu: "11", cm: "30" },
  { us: "12.5", uk: "46.5", eu: "11.5", cm: "30.5" },
  { us: "13", uk: "47", eu: "12", cm: "31" },
  { us: "14", uk: "48.5", eu: "13", cm: "31.5" },
  { us: "15", uk: "49.5", eu: "14", cm: "32" },
  { us: "16", uk: "51", eu: "15", cm: "32.5" },
];

const PumaMenTop = [
  { size: "xxs", chest: "68.5", waist: "76", hips: "" },
  { size: "xs", chest: "76", waist: "84", hips: "" },
  { size: "s", chest: "81.5", waist: "91.5", hips: "" },
  { size: "M", chest: "86.5", waist: "99", hips: "" },
  { size: "L", chest: "94", waist: "106.5", hips: "" },
  { size: "XL", chest: "104", waist: "114.5", hips: "" },
  { size: "XXL", chest: "114.5", waist: "122", hips: "" },
  { size: "3XL", chest: "124.5", waist: "132", hips: "" },
];

const PumaMenBottoms = [];

const PumaMenPants = [];

const PumaWomenShoes = [
  { us: "5.5", uk: "35.5", eu: "3", cm: "22" },
  { us: "6", uk: "36", eu: "3.5", cm: "22.5" },
  { us: "6.5", uk: "37", eu: "4", cm: "23" },
  { us: "7", uk: "37.5", eu: "4.5", cm: "23.5" },
  { us: "7.5", uk: "38", eu: "5", cm: "24" },
  { us: "8", uk: "38.5", eu: "5.5", cm: "24.5" },
  { us: "8.5", uk: "39", eu: "6", cm: "25" },
  { us: "9", uk: "40", eu: "6.5", cm: "25.5" },
  { us: "9.5", uk: "40.5", eu: "7", cm: "26" },
  { us: "10", uk: "41", eu: "7.5", cm: "26.5" },
  { us: "10.5", uk: "42", eu: "8", cm: "27" },
  { us: "11", uk: "42.5", eu: "8.5", cm: "27.5" },
];

const PumaWomenTop = [
  { size: "XXS", chest: "61", waist: "76", hips: "89" },
  { size: "XS", chest: "63.5", waist: "81.5", hips: "91.5" },
  { size: "S", chest: "66", waist: "86.5", hips: "94" },
  { size: "M", chest: "73.5", waist: "91.5", hips: "99" },
  { size: "L", chest: "78.5", waist: "96.5", hips: "104" },
  { size: "XL", chest: "86.5", waist: "101.5", hips: "112" },
  { size: "XXL", chest: "91.5", waist: "106.5", hips: "117" },
  { size: "3XL", chest: "96.5", waist: "112", hips: "122" },
];

const PumaWomenBottoms = [];

const PumaWomenPants = [];

const PumaKidsShoes = [
  { us: "3", uk: "18", eu: "2", cm: "4.5 in" },
  { us: "4", uk: "19", eu: "3", cm: "4.75in" },
  { us: "5", uk: "20", eu: "4", cm: "5 in" },
  { us: "5.5", uk: "21", eu: "4.5", cm: "5.125 in" },
  { us: "6", uk: "22", eu: "5", cm: "5.5 in" },
  { us: "7", uk: "23", eu: "6", cm: "5.75 in" },
  { us: "8", uk: "24", eu: "7", cm: "6.125 in" },
  { us: "9", uk: "25", eu: "8", cm: "6.25 in" },
  { us: "10", uk: "26", eu: "8.5", cm: "6.5 in" },
  { us: "10.5", uk: "27", eu: "9.5", cm: "6.625 in" },
  { us: "11", uk: "28", eu: "10", cm: "6.75 in" },
  { us: "12", uk: "30", eu: "11", cm: "7.125 in" },
  { us: "13", uk: "31", eu: "12", cm: "7.5 in" },
  { us: "1", uk: "32", eu: "13", cm: "7.75 in" },
  { us: "1.5", uk: "33", eu: "13.5", cm: "8 in" },
  { us: "2", uk: "33", eu: "1", cm: "8.125 in" },
  { us: "2.5", uk: "34", eu: "1.5", cm: "8.25 in" },
  { us: "3", uk: "34.5", eu: "2", cm: "8.5 in" },
  { us: "3.5", uk: "35", eu: "2.5", cm: "8.625 in" },
  { us: "4", uk: "35.5", eu: "3", cm: "8.75 in" },
  { us: "4.5", uk: "36", eu: "3.5", cm: "9 in" },
  { us: "5", uk: "37", eu: "4", cm: "9.125 in" },
  { us: "5.5", uk: "37.5", eu: "4.5", cm: "9.25 in" },
  { us: "6", uk: "38", eu: "5", cm: "9.5 in" },
  { us: "6.5", uk: "38.5", eu: "5.5", cm: "9.625 in" },
  { us: "7", uk: "39", eu: "6", cm: "9.75 in" },
];

const PumaKidsTop = [];

const PumaKidsBottoms = [];

const PumaKidsPants = [];

export {
  NikeMenShoes,
  NikeMenTop,
  NikeMenBottom,
  NikeMenPants,
  NikeWomenShoes,
  NikeWomenTop,
  NikeWomenBottom,
  NikeWomenPants,
  NikeKidsShoes,
  NikeKidsTop,
  NikeKidsBottom,
  NikeKidsPants,
  AdidasMenShoes,
  AdidasMenTop,
  AdidasMenBottom,
  AdidasMenPants,
  AdidasWomenShoes,
  AdidasWomenTop,
  AdidasWomenBottom,
  AdidasWomenPants,
  AdidasKidsShoes,
  AdidasKidsTop,
  AdidasKidsBottoms,
  AdidasKidsPants,
  PumaMenShoes,
  PumaMenTop,
  PumaMenBottoms,
  PumaMenPants,
  PumaWomenShoes,
  PumaWomenTop,
  PumaWomenBottoms,
  PumaWomenPants,
  PumaKidsShoes,
  PumaKidsTop,
  PumaKidsBottoms,
  PumaKidsPants,
};
