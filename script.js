const { body } = document;
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const containerMain = document.createElement('div');
containerMain.classList.add('container_main');
container.appendChild(containerMain);

const heding = document.createElement('h1');
heding.classList.add('heding');
containerMain.appendChild(heding);
heding.textContent = 'Virtual Keyboard';

const description = document.createElement('p');
description.classList.add('description');
containerMain.appendChild(description);
description.textContent = 'Клавиатура создана в операционной системе Windows';

const description2 = document.createElement('p');
description2.classList.add('description');
containerMain.appendChild(description2);
description2.textContent = 'Для переключения языка нажмите Ctrl + Alt';

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
containerMain.appendChild(textarea);
textarea.id = 'textarea';
textarea.setAttribute('name', 'textarea');
textarea.setAttribute('rows', '10');

const containerKeyboard = document.createElement('div');
containerKeyboard.classList.add('container_keyboard');
container.appendChild(containerKeyboard);

const items = [
  {
    item_name: 'Backquote',

    normal_rus: 'ё',
    shift_down_rus: 'Ё',
    caps_lock_down_up_rus: 'Ё',
    caps_lock_down_up_shift_down_rus: 'ё',

    normal_eng: '`',
    shift_down_eng: '~',
    caps_lock_down_up_eng: '`',
    caps_lock_down_up_shift_down_eng: '~',
  },
  {
    item_name: 'Digit1',

    normal_rus: '1',
    shift_down_rus: '!',
    caps_lock_down_up_rus: '1',
    caps_lock_down_up_shift_down_rus: '!',

    normal_eng: '1',
    shift_down_eng: '!',
    caps_lock_down_up_eng: '1',
    caps_lock_down_up_shift_down_eng: '!',
  },
  {
    item_name: 'Digit2',

    normal_rus: '2',
    shift_down_rus: '"',
    caps_lock_down_up_rus: '2',
    caps_lock_down_up_shift_down_rus: '"',

    normal_eng: '2',
    shift_down_eng: '@',
    caps_lock_down_up_eng: '2',
    caps_lock_down_up_shift_down_eng: '@',
  },
  {
    item_name: 'Digit3',

    normal_rus: '3',
    shift_down_rus: '№',
    caps_lock_down_up_rus: '3',
    caps_lock_down_up_shift_down_rus: '№',

    normal_eng: '3',
    shift_down_eng: '#',
    caps_lock_down_up_eng: '3',
    caps_lock_down_up_shift_down_eng: '#',
  },
  {
    item_name: 'Digit4',

    normal_rus: '4',
    shift_down_rus: ';',
    caps_lock_down_up_rus: '4',
    caps_lock_down_up_shift_down_rus: ';',

    normal_eng: '4',
    shift_down_eng: '$',
    caps_lock_down_up_eng: '4',
    caps_lock_down_up_shift_down_eng: '$',
  },
  {
    item_name: 'Digit5',

    normal_rus: '5',
    shift_down_rus: '%',
    caps_lock_down_up_rus: '5',
    caps_lock_down_up_shift_down_rus: '%',

    normal_eng: '5',
    shift_down_eng: '%',
    caps_lock_down_up_eng: '5',
    caps_lock_down_up_shift_down_eng: '%',
  },
  {
    item_name: 'Digit6',

    normal_rus: '6',
    shift_down_rus: ':',
    caps_lock_down_up_rus: '6',
    caps_lock_down_up_shift_down_rus: ':',

    normal_eng: '6',
    shift_down_eng: '^',
    caps_lock_down_up_eng: '6',
    caps_lock_down_up_shift_down_eng: '^',
  },
  {
    item_name: 'Digit7',

    normal_rus: '7',
    shift_down_rus: '?',
    caps_lock_down_up_rus: '7',
    caps_lock_down_up_shift_down_rus: '?',

    normal_eng: '7',
    shift_down_eng: '&',
    caps_lock_down_up_eng: '7',
    caps_lock_down_up_shift_down_eng: '&',
  },
  {
    item_name: 'Digit8',

    normal_rus: '8',
    shift_down_rus: '*',
    caps_lock_down_up_rus: '8',
    caps_lock_down_up_shift_down_rus: '*',

    normal_eng: '8',
    shift_down_eng: '*',
    caps_lock_down_up_eng: '8',
    caps_lock_down_up_shift_down_eng: '*',
  },
  {
    item_name: 'Digit9',

    normal_rus: '9',
    shift_down_rus: '(',
    caps_lock_down_up_rus: '9',
    caps_lock_down_up_shift_down_rus: '(',

    normal_eng: '9',
    shift_down_eng: '(',
    caps_lock_down_up_eng: '9',
    caps_lock_down_up_shift_down_eng: '(',
  },
  {
    item_name: 'Digit0',

    normal_rus: '0',
    shift_down_rus: ')',
    caps_lock_down_up_rus: '0',
    caps_lock_down_up_shift_down_rus: ')',

    normal_eng: '0',
    shift_down_eng: ')',
    caps_lock_down_up_eng: '0',
    caps_lock_down_up_shift_down_eng: ')',
  },
  {
    item_name: 'Minus',

    normal_rus: '-',
    shift_down_rus: '_',
    caps_lock_down_up_rus: '-',
    caps_lock_down_up_shift_down_rus: '_',

    normal_eng: '-',
    shift_down_eng: '_',
    caps_lock_down_up_eng: '-',
    caps_lock_down_up_shift_down_eng: '_',
  },
  {
    item_name: 'Equal',

    normal_rus: '=',
    shift_down_rus: '+',
    caps_lock_down_up_rus: '=',
    caps_lock_down_up_shift_down_rus: '+',

    normal_eng: '=',
    shift_down_eng: '_',
    caps_lock_down_up_eng: '=',
    caps_lock_down_up_shift_down_eng: '+',
  },
  {
    item_name: 'Backspace',

    normal_rus: 'Backspace',
    shift_down_rus: 'Backspace',
    caps_lock_down_up_rus: 'Backspace',
    caps_lock_down_up_shift_down_rus: 'Backspace',

    normal_eng: 'Backspace',
    shift_down_eng: 'Backspace',
    caps_lock_down_up_eng: 'Backspace',
    caps_lock_down_up_shift_down_eng: 'Backspace',
  },
  {
    item_name: 'Tab',

    normal_rus: 'Tab',
    shift_down_rus: 'Tab',
    caps_lock_down_up_rus: 'Tab',
    caps_lock_down_up_shift_down_rus: 'Tab',

    normal_eng: 'Tab',
    shift_down_eng: 'Tab',
    caps_lock_down_up_eng: 'Tab',
    caps_lock_down_up_shift_down_eng: 'Tab',
  },
  {
    item_name: 'KeyQ',

    normal_rus: 'й',
    shift_down_rus: 'Й',
    caps_lock_down_up_rus: 'Й',
    caps_lock_down_up_shift_down_rus: 'й',

    normal_eng: 'q',
    shift_down_eng: 'Q',
    caps_lock_down_up_eng: 'Q',
    caps_lock_down_up_shift_down_eng: 'q',
  },
  {
    item_name: 'KeyW',

    normal_rus: 'ц',
    shift_down_rus: 'Ц',
    caps_lock_down_up_rus: 'Ц',
    caps_lock_down_up_shift_down_rus: 'ц',

    normal_eng: 'w',
    shift_down_eng: 'W',
    caps_lock_down_up_eng: 'W',
    caps_lock_down_up_shift_down_eng: 'w',
  },
  {
    item_name: 'KeyE',

    normal_rus: 'у',
    shift_down_rus: 'У',
    caps_lock_down_up_rus: 'У',
    caps_lock_down_up_shift_down_rus: 'у',

    normal_eng: 'e',
    shift_down_eng: 'E',
    caps_lock_down_up_eng: 'E',
    caps_lock_down_up_shift_down_eng: 'e',
  },
  {
    item_name: 'KeyR',

    normal_rus: 'к',
    shift_down_rus: 'К',
    caps_lock_down_up_rus: 'К',
    caps_lock_down_up_shift_down_rus: 'к',

    normal_eng: 'r',
    shift_down_eng: 'R',
    caps_lock_down_up_eng: 'R',
    caps_lock_down_up_shift_down_eng: 'r',
  },
  {
    item_name: 'KeyT',

    normal_rus: 'е',
    shift_down_rus: 'Е',
    caps_lock_down_up_rus: 'Е',
    caps_lock_down_up_shift_down_rus: 'е',

    normal_eng: 't',
    shift_down_eng: 'T',
    caps_lock_down_up_eng: 'T',
    caps_lock_down_up_shift_down_eng: 't',
  },
  {
    item_name: 'KeyY',

    normal_rus: 'н',
    shift_down_rus: 'Н',
    caps_lock_down_up_rus: 'Н',
    caps_lock_down_up_shift_down_rus: 'н',

    normal_eng: 'y',
    shift_down_eng: 'Y',
    caps_lock_down_up_eng: 'Y',
    caps_lock_down_up_shift_down_eng: 'y',
  },
  {
    item_name: 'KeyU',

    normal_rus: 'г',
    shift_down_rus: 'Г',
    caps_lock_down_up_rus: 'Г',
    caps_lock_down_up_shift_down_rus: 'г',

    normal_eng: 'u',
    shift_down_eng: 'U',
    caps_lock_down_up_eng: 'U',
    caps_lock_down_up_shift_down_eng: 'u',
  },
  {
    item_name: 'KeyI',

    normal_rus: 'ш',
    shift_down_rus: 'Ш',
    caps_lock_down_up_rus: 'Ш',
    caps_lock_down_up_shift_down_rus: 'ш',

    normal_eng: 'i',
    shift_down_eng: 'I',
    caps_lock_down_up_eng: 'I',
    caps_lock_down_up_shift_down_eng: 'i',
  },
  {
    item_name: 'KeyO',

    normal_rus: 'щ',
    shift_down_rus: 'Щ',
    caps_lock_down_up_rus: 'Щ',
    caps_lock_down_up_shift_down_rus: 'щ',

    normal_eng: 'o',
    shift_down_eng: 'O',
    caps_lock_down_up_eng: 'O',
    caps_lock_down_up_shift_down_eng: 'o',
  },
  {
    item_name: 'KeyP',

    normal_rus: 'з',
    shift_down_rus: 'З',
    caps_lock_down_up_rus: 'З',
    caps_lock_down_up_shift_down_rus: 'з',

    normal_eng: 'p',
    shift_down_eng: 'P',
    caps_lock_down_up_eng: 'P',
    caps_lock_down_up_shift_down_eng: 'p',
  },
  {
    item_name: 'BracketLeft',

    normal_rus: 'х',
    shift_down_rus: 'Х',
    caps_lock_down_up_rus: 'Х',
    caps_lock_down_up_shift_down_rus: 'х',

    normal_eng: '[',
    shift_down_eng: '{',
    caps_lock_down_up_eng: '[',
    caps_lock_down_up_shift_down_eng: '{',
  },
  {
    item_name: 'BracketRight',

    normal_rus: 'ъ',
    shift_down_rus: 'Ъ',
    caps_lock_down_up_rus: 'Ъ',
    caps_lock_down_up_shift_down_rus: 'ъ',

    normal_eng: ']',
    shift_down_eng: '}',
    caps_lock_down_up_eng: ']',
    caps_lock_down_up_shift_down_eng: '}',
  },
  {
    item_name: 'Backslash',

    normal_rus: '\\',
    shift_down_rus: '/',
    caps_lock_down_up_rus: '\\',
    caps_lock_down_up_shift_down_rus: '/',

    normal_eng: '\\',
    shift_down_eng: '|',
    caps_lock_down_up_eng: '\\',
    caps_lock_down_up_shift_down_eng: '|',
  },
  {
    item_name: 'Delete',

    normal_rus: 'Del',
    shift_down_rus: 'Del',
    caps_lock_down_up_rus: 'Del',
    caps_lock_down_up_shift_down_rus: 'Del',

    normal_eng: 'Del',
    shift_down_eng: 'Del',
    caps_lock_down_up_eng: 'Del',
    caps_lock_down_up_shift_down_eng: 'Del',
  },
  {
    item_name: 'CapsLock',

    normal_rus: 'CapsLock',
    shift_down_rus: 'CapsLock',
    caps_lock_down_up_rus: 'CapsLock',
    caps_lock_down_up_shift_down_rus: 'CapsLock',

    normal_eng: 'CapsLock',
    shift_down_eng: 'CapsLock',
    caps_lock_down_up_eng: 'CapsLock',
    caps_lock_down_up_shift_down_eng: 'CapsLock',
  },
  {
    item_name: 'KeyA',

    normal_rus: 'ф',
    shift_down_rus: 'Ф',
    caps_lock_down_up_rus: 'Ф',
    caps_lock_down_up_shift_down_rus: 'ф',

    normal_eng: 'a',
    shift_down_eng: 'A',
    caps_lock_down_up_eng: 'A',
    caps_lock_down_up_shift_down_eng: 'a',
  },
  {
    item_name: 'KeyS',

    normal_rus: 'ы',
    shift_down_rus: 'Ы',
    caps_lock_down_up_rus: 'Ы',
    caps_lock_down_up_shift_down_rus: 'ы',

    normal_eng: 's',
    shift_down_eng: 'S',
    caps_lock_down_up_eng: 'S',
    caps_lock_down_up_shift_down_eng: 's',
  },
  {
    item_name: 'KeyD',

    normal_rus: 'в',
    shift_down_rus: 'В',
    caps_lock_down_up_rus: 'В',
    caps_lock_down_up_shift_down_rus: 'в',

    normal_eng: 'd',
    shift_down_eng: 'D',
    caps_lock_down_up_eng: 'D',
    caps_lock_down_up_shift_down_eng: 'd',
  },
  {
    item_name: 'KeyF',

    normal_rus: 'а',
    shift_down_rus: 'А',
    caps_lock_down_up_rus: 'А',
    caps_lock_down_up_shift_down_rus: 'а',

    normal_eng: 'f',
    shift_down_eng: 'F',
    caps_lock_down_up_eng: 'F',
    caps_lock_down_up_shift_down_eng: 'f',
  },
  {
    item_name: 'KeyG',

    normal_rus: 'п',
    shift_down_rus: 'П',
    caps_lock_down_up_rus: 'П',
    caps_lock_down_up_shift_down_rus: 'п',

    normal_eng: 'g',
    shift_down_eng: 'G',
    caps_lock_down_up_eng: 'G',
    caps_lock_down_up_shift_down_eng: 'g',
  },
  {
    item_name: 'KeyH',

    normal_rus: 'р',
    shift_down_rus: 'Р',
    caps_lock_down_up_rus: 'Р',
    caps_lock_down_up_shift_down_rus: 'р',

    normal_eng: 'h',
    shift_down_eng: 'H',
    caps_lock_down_up_eng: 'H',
    caps_lock_down_up_shift_down_eng: 'h',
  },
  {
    item_name: 'KeyJ',

    normal_rus: 'о',
    shift_down_rus: 'О',
    caps_lock_down_up_rus: 'О',
    caps_lock_down_up_shift_down_rus: 'о',

    normal_eng: 'j',
    shift_down_eng: 'J',
    caps_lock_down_up_eng: 'J',
    caps_lock_down_up_shift_down_eng: 'j',
  },
  {
    item_name: 'KeyK',

    normal_rus: 'л',
    shift_down_rus: 'Л',
    caps_lock_down_up_rus: 'Л',
    caps_lock_down_up_shift_down_rus: 'л',

    normal_eng: 'k',
    shift_down_eng: 'K',
    caps_lock_down_up_eng: 'K',
    caps_lock_down_up_shift_down_eng: 'k',
  },
  {
    item_name: 'KeyL',

    normal_rus: 'д',
    shift_down_rus: 'Д',
    caps_lock_down_up_rus: 'Д',
    caps_lock_down_up_shift_down_rus: 'д',

    normal_eng: 'l',
    shift_down_eng: 'L',
    caps_lock_down_up_eng: 'L',
    caps_lock_down_up_shift_down_eng: 'l',
  },
  {
    item_name: 'Semicolon',

    normal_rus: 'ж',
    shift_down_rus: 'Ж',
    caps_lock_down_up_rus: 'Ж',
    caps_lock_down_up_shift_down_rus: 'ж',

    normal_eng: ';',
    shift_down_eng: ':',
    caps_lock_down_up_eng: ';',
    caps_lock_down_up_shift_down_eng: ':',
  },
  {
    item_name: 'Quote',

    normal_rus: 'э',
    shift_down_rus: 'Э',
    caps_lock_down_up_rus: 'Э',
    caps_lock_down_up_shift_down_rus: 'э',

    normal_eng: "'",
    shift_down_eng: '"',
    caps_lock_down_up_eng: "'",
    caps_lock_down_up_shift_down_eng: '"',
  },
  {
    item_name: 'Enter',

    normal_rus: 'Enter',
    shift_down_rus: 'Enter',
    caps_lock_down_up_rus: 'Enter',
    caps_lock_down_up_shift_down_rus: 'Enter',

    normal_eng: 'Enter',
    shift_down_eng: 'Enter',
    caps_lock_down_up_eng: 'Enter',
    caps_lock_down_up_shift_down_eng: 'Enter',
  },
  {
    item_name: 'ShiftLeft',

    normal_rus: 'Shift',
    shift_down_rus: 'Shift',
    caps_lock_down_up_rus: 'Shift',
    caps_lock_down_up_shift_down_rus: 'Shift',

    normal_eng: 'Shift',
    shift_down_eng: 'Shift',
    caps_lock_down_up_eng: 'Shift',
    caps_lock_down_up_shift_down_eng: 'Shift',
  },
  {
    item_name: 'KeyZ',

    normal_rus: 'я',
    shift_down_rus: 'Я',
    caps_lock_down_up_rus: 'Я',
    caps_lock_down_up_shift_down_rus: 'я',

    normal_eng: 'z',
    shift_down_eng: 'Z',
    caps_lock_down_up_eng: 'Z',
    caps_lock_down_up_shift_down_eng: 'z',
  },
  {
    item_name: 'KeyX',

    normal_rus: 'ч',
    shift_down_rus: 'Ч',
    caps_lock_down_up_rus: 'Ч',
    caps_lock_down_up_shift_down_rus: 'ч',

    normal_eng: 'x',
    shift_down_eng: 'X',
    caps_lock_down_up_eng: 'X',
    caps_lock_down_up_shift_down_eng: 'x',
  },
  {
    item_name: 'KeyC',

    normal_rus: 'с',
    shift_down_rus: 'С',
    caps_lock_down_up_rus: 'С',
    caps_lock_down_up_shift_down_rus: 'с',

    normal_eng: 'c',
    shift_down_eng: 'C',
    caps_lock_down_up_eng: 'C',
    caps_lock_down_up_shift_down_eng: 'c',
  },
  {
    item_name: 'KeyV',

    normal_rus: 'м',
    shift_down_rus: 'М',
    caps_lock_down_up_rus: 'М',
    caps_lock_down_up_shift_down_rus: 'м',

    normal_eng: 'v',
    shift_down_eng: 'V',
    caps_lock_down_up_eng: 'V',
    caps_lock_down_up_shift_down_eng: 'v',
  },
  {
    item_name: 'KeyB',

    normal_rus: 'и',
    shift_down_rus: 'И',
    caps_lock_down_up_rus: 'И',
    caps_lock_down_up_shift_down_rus: 'и',

    normal_eng: 'b',
    shift_down_eng: 'B',
    caps_lock_down_up_eng: 'B',
    caps_lock_down_up_shift_down_eng: 'b',
  },
  {
    item_name: 'KeyN',

    normal_rus: 'т',
    shift_down_rus: 'Т',
    caps_lock_down_up_rus: 'Т',
    caps_lock_down_up_shift_down_rus: 'т',

    normal_eng: 'n',
    shift_down_eng: 'N',
    caps_lock_down_up_eng: 'N',
    caps_lock_down_up_shift_down_eng: 'n',
  },
  {
    item_name: 'KeyM',

    normal_rus: 'ь',
    shift_down_rus: 'Ь',
    caps_lock_down_up_rus: 'Ь',
    caps_lock_down_up_shift_down_rus: 'ь',

    normal_eng: 'm',
    shift_down_eng: 'M',
    caps_lock_down_up_eng: 'M',
    caps_lock_down_up_shift_down_eng: 'm',
  },
  {
    item_name: 'Comma',

    normal_rus: 'б',
    shift_down_rus: 'Б',
    caps_lock_down_up_rus: 'Б',
    caps_lock_down_up_shift_down_rus: 'б',

    normal_eng: ',',
    shift_down_eng: '<',
    caps_lock_down_up_eng: ',',
    caps_lock_down_up_shift_down_eng: '<',
  },
  {
    item_name: 'Period',

    normal_rus: 'ю',
    shift_down_rus: 'Ю',
    caps_lock_down_up_rus: 'Ю',
    caps_lock_down_up_shift_down_rus: 'ю',

    normal_eng: '.',
    shift_down_eng: '>',
    caps_lock_down_up_eng: '.',
    caps_lock_down_up_shift_down_eng: '>',
  },
  {
    item_name: 'Slash',

    normal_rus: '.',
    shift_down_rus: ',',
    caps_lock_down_up_rus: '.',
    caps_lock_down_up_shift_down_rus: ',',

    normal_eng: '/',
    shift_down_eng: '?',
    caps_lock_down_up_eng: '/',
    caps_lock_down_up_shift_down_eng: '?',
  },
  {
    item_name: 'ArrowUp',

    normal_rus: '▲',
    shift_down_rus: '▲',
    caps_lock_down_up_rus: '▲',
    caps_lock_down_up_shift_down_rus: '▲',

    normal_eng: '▲',
    shift_down_eng: '▲',
    caps_lock_down_up_eng: '▲',
    caps_lock_down_up_shift_down_eng: '▲',
  },
  {
    item_name: 'ShiftRight',

    normal_rus: 'Shift',
    shift_down_rus: 'Shift',
    caps_lock_down_up_rus: 'Shift',
    caps_lock_down_up_shift_down_rus: 'Shift',

    normal_eng: 'Shift',
    shift_down_eng: 'Shift',
    caps_lock_down_up_eng: 'Shift',
    caps_lock_down_up_shift_down_eng: 'Shift',
  },
  {
    item_name: 'ControlLeft',

    normal_rus: 'Ctrl',
    shift_down_rus: 'Ctrl',
    caps_lock_down_up_rus: 'Ctrl',
    caps_lock_down_up_shift_down_rus: 'Ctrl',

    normal_eng: 'Ctrl',
    shift_down_eng: 'Ctrl',
    caps_lock_down_up_eng: 'Ctrl',
    caps_lock_down_up_shift_down_eng: 'Ctrl',
  },
  {
    item_name: 'MetaLeft',

    normal_rus: 'Win',
    shift_down_rus: 'Win',
    caps_lock_down_up_rus: 'Win',
    caps_lock_down_up_shift_down_rus: 'Win',

    normal_eng: 'Win',
    shift_down_eng: 'Win',
    caps_lock_down_up_eng: 'Win',
    caps_lock_down_up_shift_down_eng: 'Win',
  },
  {
    item_name: 'AltLeft',

    normal_rus: 'Alt',
    shift_down_rus: 'Alt',
    caps_lock_down_up_rus: 'Alt',
    caps_lock_down_up_shift_down_rus: 'Alt',

    normal_eng: 'Alt',
    shift_down_eng: 'Alt',
    caps_lock_down_up_eng: 'Alt',
    caps_lock_down_up_shift_down_eng: 'Alt',
  },
  {
    item_name: 'Space',

    normal_rus: '',
    shift_down_rus: '',
    caps_lock_down_up_rus: '',
    caps_lock_down_up_shift_down_rus: '',

    normal_eng: '',
    shift_down_eng: '',
    caps_lock_down_up_eng: '',
    caps_lock_down_up_shift_down_eng: '',
  },
  {
    item_name: 'AltRight',

    normal_rus: 'Alt',
    shift_down_rus: 'Alt',
    caps_lock_down_up_rus: 'Alt',
    caps_lock_down_up_shift_down_rus: 'Alt',

    normal_eng: 'Alt',
    shift_down_eng: 'Alt',
    caps_lock_down_up_eng: 'Alt',
    caps_lock_down_up_shift_down_eng: 'Alt',
  },
  {
    item_name: 'ArrowLeft',

    normal_rus: '◄',
    shift_down_rus: '◄',
    caps_lock_down_up_rus: '◄',
    caps_lock_down_up_shift_down_rus: '◄',

    normal_eng: '◄',
    shift_down_eng: '◄',
    caps_lock_down_up_eng: '◄',
    caps_lock_down_up_shift_down_eng: '◄',
  },
  {
    item_name: 'ArrowDown',

    normal_rus: '▼',
    shift_down_rus: '▼',
    caps_lock_down_up_rus: '▼',
    caps_lock_down_up_shift_down_rus: '▼',

    normal_eng: '▼',
    shift_down_eng: '▼',
    caps_lock_down_up_eng: '▼',
    caps_lock_down_up_shift_down_eng: '▼',
  },
  {
    item_name: 'ArrowRight',

    normal_rus: '►',
    shift_down_rus: '►',
    caps_lock_down_up_rus: '►',
    caps_lock_down_up_shift_down_rus: '►',

    normal_eng: '►',
    shift_down_eng: '►',
    caps_lock_down_up_eng: '►',
    caps_lock_down_up_shift_down_eng: '►',
  },
  {
    item_name: 'ControlRight',

    normal_rus: 'Ctrl',
    shift_down_rus: 'Ctrl',
    caps_lock_down_up_rus: 'Ctrl',
    caps_lock_down_up_shift_down_rus: 'Ctrl',

    normal_eng: 'Ctrl',
    shift_down_eng: 'Ctrl',
    caps_lock_down_up_eng: 'Ctrl',
    caps_lock_down_up_shift_down_eng: 'Ctrl',
  },
];

for (const i of items) {
  const item = document.createElement('div');
  item.classList.add('item');
  item.classList.add(i.item_name);
  item.id = i.item_name;
  containerKeyboard.appendChild(item);

  const rus = document.createElement('span');
  rus.classList.add('rus');
  rus.classList.add('invisible');
  item.appendChild(rus);

  const normalRus = document.createElement('span');
  normalRus.classList.add('normal_rus');
  normalRus.classList.add('invisible');
  rus.appendChild(normalRus);
  normalRus.textContent = i.normal_rus;

  const shiftDownRus = document.createElement('span');
  shiftDownRus.classList.add('shift_down_rus');
  shiftDownRus.classList.add('invisible');
  rus.appendChild(shiftDownRus);
  shiftDownRus.textContent = i.shift_down_rus;

  const capsLockDownUpRus = document.createElement('span');
  capsLockDownUpRus.classList.add('caps_lock_down_up_rus');
  capsLockDownUpRus.classList.add('invisible');
  rus.appendChild(capsLockDownUpRus);
  capsLockDownUpRus.textContent = i.caps_lock_down_up_rus;

  const capsLockDownUpShiftDownRus = document.createElement('span');
  capsLockDownUpShiftDownRus.classList.add('caps_lock_down_up_shift_down_rus');
  capsLockDownUpShiftDownRus.classList.add('invisible');
  rus.appendChild(capsLockDownUpShiftDownRus);
  capsLockDownUpShiftDownRus.textContent = i.caps_lock_down_up_shift_down_rus;

  const eng = document.createElement('span');
  eng.classList.add('eng');
  eng.classList.add('invisible');
  item.appendChild(eng);

  const normalEng = document.createElement('span');
  normalEng.classList.add('normal_eng');
  normalEng.classList.add('invisible');
  eng.appendChild(normalEng);
  normalEng.textContent = i.normal_eng;

  const shiftDownEng = document.createElement('span');
  shiftDownEng.classList.add('shift_down_eng');
  shiftDownEng.classList.add('invisible');
  eng.appendChild(shiftDownEng);
  shiftDownEng.textContent = i.shift_down_eng;

  const capsLockDownUpEng = document.createElement('span');
  capsLockDownUpEng.classList.add('caps_lock_down_up_eng');
  capsLockDownUpEng.classList.add('invisible');
  eng.appendChild(capsLockDownUpEng);
  capsLockDownUpEng.textContent = i.caps_lock_down_up_eng;

  const capsLockDownUpShiftDownEng = document.createElement('span');
  capsLockDownUpShiftDownEng.classList.add('caps_lock_down_up_shift_down_eng');
  capsLockDownUpShiftDownEng.classList.add('invisible');
  eng.appendChild(capsLockDownUpShiftDownEng);
  capsLockDownUpShiftDownEng.textContent = i.caps_lock_down_up_shift_down_eng;

  eng.classList.remove('invisible');
  normalEng.classList.remove('invisible');

  const switchLanguage = (func, ...codes) => {
    const pressed = new Set();
    document.addEventListener('keydown', (event) => {
      pressed.add(event.code);
      for (const code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();
      func();
    });
    document.addEventListener('keyup', (event) => {
      if (event.code !== 'ShiftLeft') {
        pressed.delete(event.code);
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
          if (window.getComputedStyle(eng).display === 'block') {
            normalEng.classList.remove('invisible');
            shiftDownEng.classList.add('invisible');
          }
        }
        if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
          if (window.getComputedStyle(eng).display === 'block') {
            capsLockDownUpEng.classList.remove('invisible');
            capsLockDownUpShiftDownEng.classList.add('invisible');
          }
        }
        if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
          if (window.getComputedStyle(rus).display === 'block') {
            normalRus.classList.remove('invisible');
            shiftDownRus.classList.add('invisible');
          }
        }
        if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
          if (window.getComputedStyle(rus).display === 'block') {
            capsLockDownUpRus.classList.remove('invisible');
            capsLockDownUpShiftDownRus.classList.add('invisible');
          }
        }
      }
    });
  };

  const funcLang = () => {
    eng.classList.toggle('invisible');
    rus.classList.toggle('invisible');
    normalRus.classList.toggle('invisible');
  };

  const funcCaps = () => {
    if (i.item_name === 'CapsLock') {
      item.classList.toggle('btnDownCapsLock');
    }
    normalEng.classList.toggle('invisible');
    capsLockDownUpEng.classList.toggle('invisible');
    normalRus.classList.toggle('invisible');
    capsLockDownUpRus.classList.toggle('invisible');
  };

  const funcShift = () => {
    if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
      if (window.getComputedStyle(eng).display === 'block') {
        normalEng.classList.add('invisible');
        shiftDownEng.classList.remove('invisible');
      }
    }
    if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
      if (window.getComputedStyle(eng).display === 'block') {
        capsLockDownUpEng.classList.add('invisible');
        capsLockDownUpShiftDownEng.classList.remove('invisible');
      }
    }
    if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
      if (window.getComputedStyle(rus).display === 'block') {
        normalRus.classList.add('invisible');
        shiftDownRus.classList.remove('invisible');
      }
    }
    if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
      if (window.getComputedStyle(rus).display === 'block') {
        capsLockDownUpRus.classList.add('invisible');
        capsLockDownUpShiftDownRus.classList.remove('invisible');
      }
    }
  };

  switchLanguage(
    funcLang,
    'ControlLeft',
    'AltLeft',
  );

  switchLanguage(
    funcLang,
    'ControlRight',
    'AltRight',
  );

  switchLanguage(
    funcLang,
    'ControlLeft',
    'AltRight',
  );

  switchLanguage(
    funcLang,
    'ControlRight',
    'AltLeft',
  );

  switchLanguage(
    funcCaps,
    'CapsLock',
  );

  switchLanguage(
    funcShift,
    'ShiftLeft',
  );

  switchLanguage(
    funcShift,
    'ShiftRight',
  );

  // implement phisical keyboard keydown and keyup

  document.addEventListener('keydown', (event) => {
    if (event.code === i.item_name) {
      item.classList.add('btnDown');
      if (
        i.item_name !== 'Backspace'
        && i.item_name !== 'CapsLock'
        && i.item_name !== 'Enter'
        && i.item_name !== 'ShiftLeft'
        && i.item_name !== 'ShiftRight'
        && i.item_name !== 'ControlLeft'
        && i.item_name !== 'MetaLeft'
        && i.item_name !== 'AltLeft'
        && i.item_name !== 'Delete'
        && i.item_name !== 'Tab'
        && i.item_name !== 'Space'
        && i.item_name !== 'AltRight'
        && i.item_name !== 'ControlRight'
      ) {
        event.preventDefault();
        if (window.getComputedStyle(normalRus).display === 'block') {
          textarea.value += i.normal_rus;
        }
        if (window.getComputedStyle(normalEng).display === 'block') {
          textarea.value += i.normal_eng;
        }
        if (window.getComputedStyle(capsLockDownUpRus).display === 'block') {
          textarea.value += i.caps_lock_down_up_rus;
        }
        if (window.getComputedStyle(capsLockDownUpEng).display === 'block') {
          textarea.value += i.caps_lock_down_up_eng;
        }
        if (window.getComputedStyle(shiftDownRus).display === 'block') {
          textarea.value += i.shift_down_rus;
        }
        if (window.getComputedStyle(capsLockDownUpShiftDownRus).display === 'block') {
          textarea.value += i.caps_lock_down_up_shift_down_rus;
        }
        if (window.getComputedStyle(shiftDownEng).display === 'block') {
          textarea.value += i.shift_down_eng;
        }
        if (window.getComputedStyle(capsLockDownUpShiftDownEng).display === 'block') {
          textarea.value += i.caps_lock_down_up_shift_down_eng;
        }
      }
      if (i.item_name === 'Space') {
        event.preventDefault();
        textarea.value += ' ';
      }
      if (i.item_name === 'Tab') {
        event.preventDefault();
        textarea.value += '  ';
      }
      if (i.item_name === 'Enter') {
        event.preventDefault();
        textarea.value += '\n';
      }
      if (i.item_name === 'AltRight' || i.item_name === 'AltLeft') {
        event.preventDefault();
      }
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.code === i.item_name) {
      item.classList.remove('btnDown');
    }
  });
}

// implement mousedown and mouseup

const btns = document.querySelectorAll('.item');

const capsLock = document.querySelector('.CapsLock');
const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');

for (const btn of btns) {
  capsLock.addEventListener('click', (event) => {
    if (event.currentTarget.id === 'CapsLock') {
      if (btn.id === 'CapsLock') {
        btn.classList.toggle('btnDownCapsLock');
      }

      btn.childNodes[1].childNodes[0].classList.toggle('invisible');
      btn.childNodes[1].childNodes[2].classList.toggle('invisible');
      btn.childNodes[0].childNodes[0].classList.toggle('invisible');
      btn.childNodes[0].childNodes[2].classList.toggle('invisible');
    }
  });

  shiftLeft.addEventListener('mousedown', (event) => {
    if (event.currentTarget.id === 'ShiftLeft') {
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
        if (window.getComputedStyle(btn.childNodes[1]).display === 'block') {
          btn.childNodes[1].childNodes[0].classList.add('invisible');
          btn.childNodes[1].childNodes[1].classList.remove('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
        if (window.getComputedStyle(btn.childNodes[1]).display === 'block') {
          btn.childNodes[1].childNodes[2].classList.add('invisible');
          btn.childNodes[1].childNodes[3].classList.remove('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
        if (window.getComputedStyle(btn.childNodes[0]).display === 'block') {
          btn.childNodes[0].childNodes[0].classList.add('invisible');
          btn.childNodes[0].childNodes[1].classList.remove('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
        if (window.getComputedStyle(btn.childNodes[0]).display === 'block') {
          btn.childNodes[0].childNodes[2].classList.add('invisible');
          btn.childNodes[0].childNodes[3].classList.remove('invisible');
        }
      }
    }
  });

  shiftLeft.addEventListener('mouseup', (event) => {
    if (event.currentTarget.id === 'ShiftLeft') {
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
        if (window.getComputedStyle(btn.childNodes[1]).display === 'block') {
          btn.childNodes[1].childNodes[0].classList.remove('invisible');
          btn.childNodes[1].childNodes[1].classList.add('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
        if (window.getComputedStyle(btn.childNodes[1]).display === 'block') {
          btn.childNodes[1].childNodes[2].classList.remove('invisible');
          btn.childNodes[1].childNodes[3].classList.add('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
        if (window.getComputedStyle(btn.childNodes[0]).display === 'block') {
          btn.childNodes[0].childNodes[0].classList.remove('invisible');
          btn.childNodes[0].childNodes[1].classList.add('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
        if (window.getComputedStyle(btn.childNodes[0]).display === 'block') {
          btn.childNodes[0].childNodes[2].classList.remove('invisible');
          btn.childNodes[0].childNodes[3].classList.add('invisible');
        }
      }
    }
  });

  shiftRight.addEventListener('mousedown', (event) => {
    if (event.currentTarget.id === 'ShiftRight') {
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
        if (window.getComputedStyle(btn.childNodes[1]).display === 'block') {
          btn.childNodes[1].childNodes[0].classList.add('invisible');
          btn.childNodes[1].childNodes[1].classList.remove('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
        if (window.getComputedStyle(btn.childNodes[1]).display === 'block') {
          btn.childNodes[1].childNodes[2].classList.add('invisible');
          btn.childNodes[1].childNodes[3].classList.remove('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
        if (window.getComputedStyle(btn.childNodes[0]).display === 'block') {
          btn.childNodes[0].childNodes[0].classList.add('invisible');
          btn.childNodes[0].childNodes[1].classList.remove('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
        if (window.getComputedStyle(btn.childNodes[0]).display === 'block') {
          btn.childNodes[0].childNodes[2].classList.add('invisible');
          btn.childNodes[0].childNodes[3].classList.remove('invisible');
        }
      }
    }
  });

  shiftRight.addEventListener('mouseup', (event) => {
    if (event.currentTarget.id === 'ShiftRight') {
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
        if (window.getComputedStyle(btn.childNodes[1]).display === 'block') {
          btn.childNodes[1].childNodes[0].classList.remove('invisible');
          btn.childNodes[1].childNodes[1].classList.add('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
        if (window.getComputedStyle(btn.childNodes[1]).display === 'block') {
          btn.childNodes[1].childNodes[2].classList.remove('invisible');
          btn.childNodes[1].childNodes[3].classList.add('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius !== '20px') {
        if (window.getComputedStyle(btn.childNodes[0]).display === 'block') {
          btn.childNodes[0].childNodes[0].classList.remove('invisible');
          btn.childNodes[0].childNodes[1].classList.add('invisible');
        }
      }
      if (window.getComputedStyle(containerKeyboard.childNodes[29]).borderRadius === '20px') {
        if (window.getComputedStyle(btn.childNodes[0]).display === 'block') {
          btn.childNodes[0].childNodes[2].classList.remove('invisible');
          btn.childNodes[0].childNodes[3].classList.add('invisible');
        }
      }
    }
  });

  btn.addEventListener('mousedown', (event) => {
    if (event.currentTarget.id !== 'CapsLock') {
      event.currentTarget.classList.add('btnDown');
    }
    const targetKey = items.find((i) => i.item_name === event.currentTarget.id);

    if (
      event.currentTarget.id !== 'Backspace'
      && event.currentTarget.id !== 'CapsLock'
      && event.currentTarget.id !== 'Enter'
      && event.currentTarget.id !== 'ShiftLeft'
      && event.currentTarget.id !== 'ShiftRight'
      && event.currentTarget.id !== 'ControlLeft'
      && event.currentTarget.id !== 'MetaLeft'
      && event.currentTarget.id !== 'AltLeft'
      && event.currentTarget.id !== 'Delete'
      && event.currentTarget.id !== 'Tab'
      && event.currentTarget.id !== 'Space'
      && event.currentTarget.id !== 'AltRight'
      && event.currentTarget.id !== 'ControlRight'
    ) {
      if (window.getComputedStyle(event.currentTarget.childNodes[0].childNodes[0]).display === 'block') {
        textarea.value += targetKey.normal_rus;
      }
      if (window.getComputedStyle(event.currentTarget.childNodes[1].childNodes[0]).display === 'block') {
        textarea.value += targetKey.normal_eng;
      }
      if (window.getComputedStyle(event.currentTarget.childNodes[0].childNodes[2]).display === 'block') {
        textarea.value += targetKey.caps_lock_down_up_rus;
      }
      if (window.getComputedStyle(event.currentTarget.childNodes[1].childNodes[2]).display === 'block') {
        textarea.value += targetKey.caps_lock_down_up_eng;
      }
      if (window.getComputedStyle(event.currentTarget.childNodes[1].childNodes[1]).display === 'block') {
        textarea.value += targetKey.shift_down_eng;
      }
      if (window.getComputedStyle(event.currentTarget.childNodes[1].childNodes[3]).display === 'block') {
        textarea.value += targetKey.caps_lock_down_up_shift_down_eng;
      }
      if (window.getComputedStyle(event.currentTarget.childNodes[0].childNodes[1]).display === 'block') {
        textarea.value += targetKey.shift_down_rus;
      }
      if (window.getComputedStyle(event.currentTarget.childNodes[0].childNodes[3]).display === 'block') {
        textarea.value += targetKey.caps_lock_down_up_shift_down_rus;
      }
    }
    if (event.currentTarget.id === 'Space') {
      textarea.value += ' ';
    }
    if (event.currentTarget.id === 'Tab') {
      textarea.value += '  ';
    }
    if (event.currentTarget.id === 'Enter') {
      textarea.value += '\n';
    }
  });

  document.body.addEventListener('mouseup', (event) => {
    if (event.currentTarget.id !== 'CapsLock') {
      btn.classList.remove('btnDown');
    }
  });
}
