import { invert as _invert } from 'lodash';

const ALPHABET = {
  'а': 'a', 'А': 'A',
  'б': 'b', 'Б': 'B',
  'в': 'v', 'В': 'V',
  'г': 'g', 'Г': 'G',
  'д': 'd', 'Д': 'D',
  'е': 'e', 'Е': 'E',
  'ё': 'yo', 'Ё': 'Yo',
  'ж': 'zh', 'Ж': 'Zh',
  'з': 'z', 'З': 'Z',
  'и': 'i', 'И': 'I',
  'й': 'j', 'Й': 'J',
  'к': 'k', 'К': 'K',
  'л': 'l', 'Л': 'L',
  'м': 'm', 'М': 'M',
  'н': 'n', 'Н': 'N',
  'о': 'o', 'О': 'O',
  'п': 'p', 'П': 'P',
  'р': 'r', 'Р': 'R',
  'с': 's', 'С': 'S',
  'т': 't', 'Т': 'T',
  'у': 'u', 'У': 'U',
  'ф': 'f', 'Ф': 'F',
  'х': 'kh', 'Х': 'Kh',
  'ц': 'ts', 'Ц': 'Ts',
  'ч': 'ch', 'Ч': 'Ch',
  'ш': 'sh', 'Ш': 'Sh',
  'щ': 'shh', 'Щ': 'Shh',
  'Ъ': '\'\'', 'ъ': '\'\'',
  'ы': 'y', 'Ы': 'Y',
  'Ь': '\'', 'ь': '\'',
  'э': 'eh', 'Э': 'Eh',
  'ю': 'yu', 'Ю': 'Yu',
  'я': 'ya', 'Я': 'Ya',
};

const REVERSED_ALPHABET = { ..._invert(ALPHABET) };

const SORTED_REVERSED_ALPHABET = Object.keys(REVERSED_ALPHABET).sort((a, b) => {
  if (a.length > b.length) {
    return -1;
  } else if (b.length > a.length) {
    return 1;
  }
  return 0;
});

const REG_EXPS = SORTED_REVERSED_ALPHABET.reduce((acc, key) => {
  acc[key] = new RegExp(key, 'g');
  return acc;
}, {});

export function cyrilillicToEngTranslit(input: string) {
  if (!input) {
    return '';
  }
  return input.normalize().split('').reduce((acc, curChar) => {
    const transformChar = ALPHABET[curChar];
    if (transformChar) {
      acc += transformChar;
    } else {
      acc += curChar;
    }
    return acc;
  }, '');
}

export function engTranslitToCyrilillic(input: string) {
  if (!input) {
    return '';
  }
  let reversedString = input.normalize();
  SORTED_REVERSED_ALPHABET.forEach((key) => {
    const replaceChar = REVERSED_ALPHABET[key];
    const replaced = reversedString.replace(REG_EXPS[key], REVERSED_ALPHABET[key]);
    reversedString = replaced;
  });
  return reversedString;
}
