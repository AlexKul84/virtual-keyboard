let body = document.body
let container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

  let container_main = document.createElement('div')
  container_main.classList.add('container_main')
  container.appendChild(container_main)

    let heding = document.createElement('h1')
    heding.classList.add('heding')
    container_main.appendChild(heding)
    heding.textContent = 'Virtual Keyboard'

    let description = document.createElement('p')
    description.classList.add('description')
    container_main.appendChild(description)
    description.textContent = 'Клавиатура создана в операционной системе Windows'

    let textarea = document.createElement('textarea')
    textarea.classList.add('textarea')
    container_main.appendChild(textarea)
    textarea.id = 'textarea'
    textarea.setAttribute('name', 'textarea')
    textarea.setAttribute('rows', '10')

  let container_keyboard = document.createElement('div')
  container_keyboard.classList.add('container_keyboard')
  container.appendChild(container_keyboard)

let items = [
  {
    "item_name": "Backquote",

    "normal_rus": "ё",
    "shift_down_rus": "Ё",
    "caps_lock_down_up_rus": "Ё",
    "caps_lock_down_up_shift_down_rus": "ё",
    
    "normal_eng": "`",
    "shift_down_eng": "~",
    "caps_lock_down_up_eng": "`",
    "caps_lock_down_up_shift_down_eng": "~"
  },
  {
    "item_name": "Digit1",

    "normal_rus": "1",
    "shift_down_rus": "!",
    "caps_lock_down_up_rus": "1",
    "caps_lock_down_up_shift_down_rus": "!",
    
    "normal_eng": "1",
    "shift_down_eng": "!",
    "caps_lock_down_up_eng": "1",
    "caps_lock_down_up_shift_down_eng": "!"
  },
  {
    "item_name": "Digit2",

    "normal_rus": "2",
    "shift_down_rus": '"',
    "caps_lock_down_up_rus": "2",
    "caps_lock_down_up_shift_down_rus": '"',
    
    "normal_eng": "2",
    "shift_down_eng": "@",
    "caps_lock_down_up_eng": "2",
    "caps_lock_down_up_shift_down_eng": "@"
  },
  {
    "item_name": "Digit3",

    "normal_rus": "3",
    "shift_down_rus": "№",
    "caps_lock_down_up_rus": "3",
    "caps_lock_down_up_shift_down_rus": "№",
    
    "normal_eng": "3",
    "shift_down_eng": "#",
    "caps_lock_down_up_eng": "3",
    "caps_lock_down_up_shift_down_eng": "#"
  },
  {
    "item_name": "Digit4",

    "normal_rus": "4",
    "shift_down_rus": ";",
    "caps_lock_down_up_rus": "4",
    "caps_lock_down_up_shift_down_rus": ";",
    
    "normal_eng": "4",
    "shift_down_eng": "$",
    "caps_lock_down_up_eng": "4",
    "caps_lock_down_up_shift_down_eng": "$"
  },
  {
    "item_name": "Digit5",

    "normal_rus": "5",
    "shift_down_rus": "%",
    "caps_lock_down_up_rus": "5",
    "caps_lock_down_up_shift_down_rus": "%",
    
    "normal_eng": "5",
    "shift_down_eng": "%",
    "caps_lock_down_up_eng": "5",
    "caps_lock_down_up_shift_down_eng": "%"
  },
  {
    "item_name": "Digit6",

    "normal_rus": "6",
    "shift_down_rus": ":",
    "caps_lock_down_up_rus": "6",
    "caps_lock_down_up_shift_down_rus": ":",
    
    "normal_eng": "6",
    "shift_down_eng": "^",
    "caps_lock_down_up_eng": "6",
    "caps_lock_down_up_shift_down_eng": "^"
  },
  {
    "item_name": "Digit7",

    "normal_rus": "7",
    "shift_down_rus": "?",
    "caps_lock_down_up_rus": "7",
    "caps_lock_down_up_shift_down_rus": "?",
    
    "normal_eng": "7",
    "shift_down_eng": "&",
    "caps_lock_down_up_eng": "7",
    "caps_lock_down_up_shift_down_eng": "&"
  },
  {
    "item_name": "Digit8",

    "normal_rus": "8",
    "shift_down_rus": "*",
    "caps_lock_down_up_rus": "8",
    "caps_lock_down_up_shift_down_rus": "*",
    
    "normal_eng": "8",
    "shift_down_eng": "*",
    "caps_lock_down_up_eng": "8",
    "caps_lock_down_up_shift_down_eng": "*"
  },
  {
    "item_name": "Digit9",

    "normal_rus": "9",
    "shift_down_rus": "(",
    "caps_lock_down_up_rus": "9",
    "caps_lock_down_up_shift_down_rus": "(",
    
    "normal_eng": "9",
    "shift_down_eng": "(",
    "caps_lock_down_up_eng": "9",
    "caps_lock_down_up_shift_down_eng": "("
  },
  {
    "item_name": "Digit0",

    "normal_rus": "0",
    "shift_down_rus": ")",
    "caps_lock_down_up_rus": "0",
    "caps_lock_down_up_shift_down_rus": ")",
    
    "normal_eng": "0",
    "shift_down_eng": ")",
    "caps_lock_down_up_eng": "0",
    "caps_lock_down_up_shift_down_eng": ")"
  },
  {
    "item_name": "Minus",

    "normal_rus": "-",
    "shift_down_rus": "_",
    "caps_lock_down_up_rus": "-",
    "caps_lock_down_up_shift_down_rus": "_",
    
    "normal_eng": "-",
    "shift_down_eng": "_",
    "caps_lock_down_up_eng": "-",
    "caps_lock_down_up_shift_down_eng": "_"
  },
  {
    "item_name": "Equal",

    "normal_rus": "=",
    "shift_down_rus": "+",
    "caps_lock_down_up_rus": "=",
    "caps_lock_down_up_shift_down_rus": "+",
    
    "normal_eng": "=",
    "shift_down_eng": "_",
    "caps_lock_down_up_eng": "=",
    "caps_lock_down_up_shift_down_eng": "+"
  },
  {
    "item_name": "Backspace",

    "normal_rus": "Backspace",
    "shift_down_rus": "Backspace",
    "caps_lock_down_up_rus": "Backspace",
    "caps_lock_down_up_shift_down_rus": "Backspace",
    
    "normal_eng": "Backspace",
    "shift_down_eng": "Backspace",
    "caps_lock_down_up_eng": "Backspace",
    "caps_lock_down_up_shift_down_eng": "Backspace"
  },
  {
    "item_name": "Tab",

    "normal_rus": "Tab",
    "shift_down_rus": "Tab",
    "caps_lock_down_up_rus": "Tab",
    "caps_lock_down_up_shift_down_rus": "Tab",
    
    "normal_eng": "Tab",
    "shift_down_eng": "Tab",
    "caps_lock_down_up_eng": "Tab",
    "caps_lock_down_up_shift_down_eng": "Tab"
  },
  {
    "item_name": "KeyQ",

    "normal_rus": "й",
    "shift_down_rus": "Й",
    "caps_lock_down_up_rus": "Й",
    "caps_lock_down_up_shift_down_rus": "й",
    
    "normal_eng": "q",
    "shift_down_eng": "Q",
    "caps_lock_down_up_eng": "Q",
    "caps_lock_down_up_shift_down_eng": "q"
  },
  {
    "item_name": "KeyW",

    "normal_rus": "ц",
    "shift_down_rus": "Ц",
    "caps_lock_down_up_rus": "Ц",
    "caps_lock_down_up_shift_down_rus": "ц",
    
    "normal_eng": "w",
    "shift_down_eng": "W",
    "caps_lock_down_up_eng": "W",
    "caps_lock_down_up_shift_down_eng": "w"
  },
  {
    "item_name": "KeyE",

    "normal_rus": "у",
    "shift_down_rus": "У",
    "caps_lock_down_up_rus": "У",
    "caps_lock_down_up_shift_down_rus": "у",
    
    "normal_eng": "e",
    "shift_down_eng": "E",
    "caps_lock_down_up_eng": "E",
    "caps_lock_down_up_shift_down_eng": "e"
  },
  {
    "item_name": "KeyR",

    "normal_rus": "к",
    "shift_down_rus": "К",
    "caps_lock_down_up_rus": "К",
    "caps_lock_down_up_shift_down_rus": "к",
    
    "normal_eng": "r",
    "shift_down_eng": "R",
    "caps_lock_down_up_eng": "R",
    "caps_lock_down_up_shift_down_eng": "r"
  },
  {
    "item_name": "KeyT",

    "normal_rus": "е",
    "shift_down_rus": "Е",
    "caps_lock_down_up_rus": "Е",
    "caps_lock_down_up_shift_down_rus": "е",
    
    "normal_eng": "t",
    "shift_down_eng": "T",
    "caps_lock_down_up_eng": "T",
    "caps_lock_down_up_shift_down_eng": "t"
  },
  {
    "item_name": "KeyY",

    "normal_rus": "н",
    "shift_down_rus": "Н",
    "caps_lock_down_up_rus": "Н",
    "caps_lock_down_up_shift_down_rus": "н",
    
    "normal_eng": "y",
    "shift_down_eng": "Y",
    "caps_lock_down_up_eng": "Y",
    "caps_lock_down_up_shift_down_eng": "y"
  },
  {
    "item_name": "KeyU",

    "normal_rus": "г",
    "shift_down_rus": "Г",
    "caps_lock_down_up_rus": "Г",
    "caps_lock_down_up_shift_down_rus": "г",
    
    "normal_eng": "u",
    "shift_down_eng": "U",
    "caps_lock_down_up_eng": "U",
    "caps_lock_down_up_shift_down_eng": "u"
  },
  {
    "item_name": "KeyI",

    "normal_rus": "ш",
    "shift_down_rus": "Ш",
    "caps_lock_down_up_rus": "Ш",
    "caps_lock_down_up_shift_down_rus": "ш",
    
    "normal_eng": "i",
    "shift_down_eng": "I",
    "caps_lock_down_up_eng": "I",
    "caps_lock_down_up_shift_down_eng": "i"
  },
  {
    "item_name": "KeyO",

    "normal_rus": "щ",
    "shift_down_rus": "Щ",
    "caps_lock_down_up_rus": "Щ",
    "caps_lock_down_up_shift_down_rus": "щ",
    
    "normal_eng": "o",
    "shift_down_eng": "O",
    "caps_lock_down_up_eng": "O",
    "caps_lock_down_up_shift_down_eng": "o"
  },
  {
    "item_name": "KeyP",

    "normal_rus": "з",
    "shift_down_rus": "З",
    "caps_lock_down_up_rus": "З",
    "caps_lock_down_up_shift_down_rus": "з",
    
    "normal_eng": "p",
    "shift_down_eng": "P",
    "caps_lock_down_up_eng": "P",
    "caps_lock_down_up_shift_down_eng": "p"
  },
  {
    "item_name": "BracketLeft",

    "normal_rus": "х",
    "shift_down_rus": "Х",
    "caps_lock_down_up_rus": "Х",
    "caps_lock_down_up_shift_down_rus": "х",
    
    "normal_eng": "[",
    "shift_down_eng": "{",
    "caps_lock_down_up_eng": "[",
    "caps_lock_down_up_shift_down_eng": "{"
  },
  {
    "item_name": "BracketRight",

    "normal_rus": "ъ",
    "shift_down_rus": "Ъ",
    "caps_lock_down_up_rus": "Ъ",
    "caps_lock_down_up_shift_down_rus": "ъ",
    
    "normal_eng": "]",
    "shift_down_eng": "}",
    "caps_lock_down_up_eng": "]",
    "caps_lock_down_up_shift_down_eng": "}"
  },
  {
    "item_name": "Backslash",

    "normal_rus": "\\",
    "shift_down_rus": "/",
    "caps_lock_down_up_rus": "\\",
    "caps_lock_down_up_shift_down_rus": "/",
    
    "normal_eng": "\\",
    "shift_down_eng": "|",
    "caps_lock_down_up_eng": "\\",
    "caps_lock_down_up_shift_down_eng": "|"
  },
  {
    "item_name": "Delete",

    "normal_rus": "Del",
    "shift_down_rus": "Del",
    "caps_lock_down_up_rus": "Del",
    "caps_lock_down_up_shift_down_rus": "Del",
    
    "normal_eng": "Del",
    "shift_down_eng": "Del",
    "caps_lock_down_up_eng": "Del",
    "caps_lock_down_up_shift_down_eng": "Del"
  },
  {
    "item_name": "CapsLock",

    "normal_rus": "CapsLock",
    "shift_down_rus": "CapsLock",
    "caps_lock_down_up_rus": "CapsLock",
    "caps_lock_down_up_shift_down_rus": "CapsLock",
    
    "normal_eng": "CapsLock",
    "shift_down_eng": "CapsLock",
    "caps_lock_down_up_eng": "CapsLock",
    "caps_lock_down_up_shift_down_eng": "CapsLock"
  },
  {
    "item_name": "KeyA",

    "normal_rus": "ф",
    "shift_down_rus": "Ф",
    "caps_lock_down_up_rus": "Ф",
    "caps_lock_down_up_shift_down_rus": "ф",
    
    "normal_eng": "a",
    "shift_down_eng": "A",
    "caps_lock_down_up_eng": "A",
    "caps_lock_down_up_shift_down_eng": "a"
  },
  {
    "item_name": "KeyS",

    "normal_rus": "ы",
    "shift_down_rus": "Ы",
    "caps_lock_down_up_rus": "Ы",
    "caps_lock_down_up_shift_down_rus": "ы",
    
    "normal_eng": "s",
    "shift_down_eng": "S",
    "caps_lock_down_up_eng": "S",
    "caps_lock_down_up_shift_down_eng": "s"
  },
  {
    "item_name": "KeyD",

    "normal_rus": "в",
    "shift_down_rus": "В",
    "caps_lock_down_up_rus": "В",
    "caps_lock_down_up_shift_down_rus": "в",
    
    "normal_eng": "d",
    "shift_down_eng": "D",
    "caps_lock_down_up_eng": "D",
    "caps_lock_down_up_shift_down_eng": "d"
  },
  {
    "item_name": "KeyF",

    "normal_rus": "а",
    "shift_down_rus": "А",
    "caps_lock_down_up_rus": "А",
    "caps_lock_down_up_shift_down_rus": "а",
    
    "normal_eng": "f",
    "shift_down_eng": "F",
    "caps_lock_down_up_eng": "F",
    "caps_lock_down_up_shift_down_eng": "f"
  },
  {
    "item_name": "KeyG",

    "normal_rus": "п",
    "shift_down_rus": "П",
    "caps_lock_down_up_rus": "П",
    "caps_lock_down_up_shift_down_rus": "п",
    
    "normal_eng": "g",
    "shift_down_eng": "G",
    "caps_lock_down_up_eng": "G",
    "caps_lock_down_up_shift_down_eng": "g"
  },
  {
    "item_name": "KeyH",

    "normal_rus": "р",
    "shift_down_rus": "Р",
    "caps_lock_down_up_rus": "Р",
    "caps_lock_down_up_shift_down_rus": "р",
    
    "normal_eng": "h",
    "shift_down_eng": "H",
    "caps_lock_down_up_eng": "H",
    "caps_lock_down_up_shift_down_eng": "h"
  },
  {
    "item_name": "KeyJ",

    "normal_rus": "о",
    "shift_down_rus": "О",
    "caps_lock_down_up_rus": "О",
    "caps_lock_down_up_shift_down_rus": "о",
    
    "normal_eng": "j",
    "shift_down_eng": "J",
    "caps_lock_down_up_eng": "J",
    "caps_lock_down_up_shift_down_eng": "j"
  },
  {
    "item_name": "KeyK",

    "normal_rus": "л",
    "shift_down_rus": "Л",
    "caps_lock_down_up_rus": "Л",
    "caps_lock_down_up_shift_down_rus": "л",
    
    "normal_eng": "k",
    "shift_down_eng": "K",
    "caps_lock_down_up_eng": "K",
    "caps_lock_down_up_shift_down_eng": "k"
  },
  {
    "item_name": "KeyL",

    "normal_rus": "д",
    "shift_down_rus": "Д",
    "caps_lock_down_up_rus": "Д",
    "caps_lock_down_up_shift_down_rus": "д",
    
    "normal_eng": "l",
    "shift_down_eng": "L",
    "caps_lock_down_up_eng": "L",
    "caps_lock_down_up_shift_down_eng": "l"
  },
  {
    "item_name": "Semicolon",

    "normal_rus": "ж",
    "shift_down_rus": "Ж",
    "caps_lock_down_up_rus": "Ж",
    "caps_lock_down_up_shift_down_rus": "ж",
    
    "normal_eng": ";",
    "shift_down_eng": ":",
    "caps_lock_down_up_eng": ";",
    "caps_lock_down_up_shift_down_eng": ":"
  },
  {
    "item_name": "Quote",

    "normal_rus": "э",
    "shift_down_rus": "Э",
    "caps_lock_down_up_rus": "Э",
    "caps_lock_down_up_shift_down_rus": "э",
    
    "normal_eng": "'",
    "shift_down_eng": '"',
    "caps_lock_down_up_eng": "'",
    "caps_lock_down_up_shift_down_eng": '"'
  },
  {
    "item_name": "Enter",

    "normal_rus": "Enter",
    "shift_down_rus": "Enter",
    "caps_lock_down_up_rus": "Enter",
    "caps_lock_down_up_shift_down_rus": "Enter",
    
    "normal_eng": "Enter",
    "shift_down_eng": "Enter",
    "caps_lock_down_up_eng": "Enter",
    "caps_lock_down_up_shift_down_eng": "Enter"
  },
  {
    "item_name": "ShiftLeft",

    "normal_rus": "Shift",
    "shift_down_rus": "Shift",
    "caps_lock_down_up_rus": "Shift",
    "caps_lock_down_up_shift_down_rus": "Shift",
    
    "normal_eng": "Shift",
    "shift_down_eng": "Shift",
    "caps_lock_down_up_eng": "Shift",
    "caps_lock_down_up_shift_down_eng": "Shift"
  },
  {
    "item_name": "KeyZ",

    "normal_rus": "я",
    "shift_down_rus": "Я",
    "caps_lock_down_up_rus": "Я",
    "caps_lock_down_up_shift_down_rus": "я",
    
    "normal_eng": "z",
    "shift_down_eng": "Z",
    "caps_lock_down_up_eng": "Z",
    "caps_lock_down_up_shift_down_eng": "z"
  },
  {
    "item_name": "KeyX",

    "normal_rus": "ч",
    "shift_down_rus": "Ч",
    "caps_lock_down_up_rus": "Ч",
    "caps_lock_down_up_shift_down_rus": "ч",
    
    "normal_eng": "x",
    "shift_down_eng": "X",
    "caps_lock_down_up_eng": "X",
    "caps_lock_down_up_shift_down_eng": "x"
  },
  {
    "item_name": "KeyC",

    "normal_rus": "с",
    "shift_down_rus": "С",
    "caps_lock_down_up_rus": "С",
    "caps_lock_down_up_shift_down_rus": "с",
    
    "normal_eng": "c",
    "shift_down_eng": "C",
    "caps_lock_down_up_eng": "C",
    "caps_lock_down_up_shift_down_eng": "c"
  },
  {
    "item_name": "KeyV",

    "normal_rus": "м",
    "shift_down_rus": "М",
    "caps_lock_down_up_rus": "М",
    "caps_lock_down_up_shift_down_rus": "м",
    
    "normal_eng": "v",
    "shift_down_eng": "V",
    "caps_lock_down_up_eng": "V",
    "caps_lock_down_up_shift_down_eng": "v"
  },
  {
    "item_name": "KeyB",

    "normal_rus": "и",
    "shift_down_rus": "И",
    "caps_lock_down_up_rus": "И",
    "caps_lock_down_up_shift_down_rus": "и",
    
    "normal_eng": "b",
    "shift_down_eng": "B",
    "caps_lock_down_up_eng": "B",
    "caps_lock_down_up_shift_down_eng": "b"
  },
  {
    "item_name": "KeyN",

    "normal_rus": "т",
    "shift_down_rus": "Т",
    "caps_lock_down_up_rus": "Т",
    "caps_lock_down_up_shift_down_rus": "т",
    
    "normal_eng": "n",
    "shift_down_eng": "N",
    "caps_lock_down_up_eng": "N",
    "caps_lock_down_up_shift_down_eng": "n"
  },
  {
    "item_name": "KeyM",

    "normal_rus": "ь",
    "shift_down_rus": "Ь",
    "caps_lock_down_up_rus": "Ь",
    "caps_lock_down_up_shift_down_rus": "ь",
    
    "normal_eng": "m",
    "shift_down_eng": "M",
    "caps_lock_down_up_eng": "M",
    "caps_lock_down_up_shift_down_eng": "m"
  },
  {
    "item_name": "Comma",

    "normal_rus": "б",
    "shift_down_rus": "Б",
    "caps_lock_down_up_rus": "Б",
    "caps_lock_down_up_shift_down_rus": "б",
    
    "normal_eng": ",",
    "shift_down_eng": "<",
    "caps_lock_down_up_eng": ",",
    "caps_lock_down_up_shift_down_eng": "<"
  },
  {
    "item_name": "Period",

    "normal_rus": "ю",
    "shift_down_rus": "Ю",
    "caps_lock_down_up_rus": "Ю",
    "caps_lock_down_up_shift_down_rus": "ю",
    
    "normal_eng": ".",
    "shift_down_eng": ">",
    "caps_lock_down_up_eng": ".",
    "caps_lock_down_up_shift_down_eng": ">"
  },
  {
    "item_name": "Slash",

    "normal_rus": ".",
    "shift_down_rus": ",",
    "caps_lock_down_up_rus": ".",
    "caps_lock_down_up_shift_down_rus": ",",
    
    "normal_eng": "/",
    "shift_down_eng": "?",
    "caps_lock_down_up_eng": "/",
    "caps_lock_down_up_shift_down_eng": "?"
  },
  {
    "item_name": "ArrowUp",

    "normal_rus": "▲",
    "shift_down_rus": "▲",
    "caps_lock_down_up_rus": "▲",
    "caps_lock_down_up_shift_down_rus": "▲",
    
    "normal_eng": "▲",
    "shift_down_eng": "▲",
    "caps_lock_down_up_eng": "▲",
    "caps_lock_down_up_shift_down_eng": "▲"
  },
  {
    "item_name": "ShiftRight",

    "normal_rus": "Shift",
    "shift_down_rus": "Shift",
    "caps_lock_down_up_rus": "Shift",
    "caps_lock_down_up_shift_down_rus": "Shift",
    
    "normal_eng": "Shift",
    "shift_down_eng": "Shift",
    "caps_lock_down_up_eng": "Shift",
    "caps_lock_down_up_shift_down_eng": "Shift"
  },
  {
    "item_name": "ControlLeft",

    "normal_rus": "Ctrl",
    "shift_down_rus": "Ctrl",
    "caps_lock_down_up_rus": "Ctrl",
    "caps_lock_down_up_shift_down_rus": "Ctrl",
    
    "normal_eng": "Ctrl",
    "shift_down_eng": "Ctrl",
    "caps_lock_down_up_eng": "Ctrl",
    "caps_lock_down_up_shift_down_eng": "Ctrl"
  },
  {
    "item_name": "MetaLeft",

    "normal_rus": "Win",
    "shift_down_rus": "Win",
    "caps_lock_down_up_rus": "Win",
    "caps_lock_down_up_shift_down_rus": "Win",
    
    "normal_eng": "Win",
    "shift_down_eng": "Win",
    "caps_lock_down_up_eng": "Win",
    "caps_lock_down_up_shift_down_eng": "Win"
  },
  {
    "item_name": "AltLeft",

    "normal_rus": "Alt",
    "shift_down_rus": "Alt",
    "caps_lock_down_up_rus": "Alt",
    "caps_lock_down_up_shift_down_rus": "Alt",
    
    "normal_eng": "Alt",
    "shift_down_eng": "Alt",
    "caps_lock_down_up_eng": "Alt",
    "caps_lock_down_up_shift_down_eng": "Alt"
  },
  {
    "item_name": "Space",

    "normal_rus": "",
    "shift_down_rus": "",
    "caps_lock_down_up_rus": "",
    "caps_lock_down_up_shift_down_rus": "",
    
    "normal_eng": "",
    "shift_down_eng": "",
    "caps_lock_down_up_eng": "",
    "caps_lock_down_up_shift_down_eng": ""
  },
  {
    "item_name": "AltRight",

    "normal_rus": "Alt",
    "shift_down_rus": "Alt",
    "caps_lock_down_up_rus": "Alt",
    "caps_lock_down_up_shift_down_rus": "Alt",
    
    "normal_eng": "Alt",
    "shift_down_eng": "Alt",
    "caps_lock_down_up_eng": "Alt",
    "caps_lock_down_up_shift_down_eng": "Alt"
  },
  {
    "item_name": "ArrowLeft",

    "normal_rus": "◄",
    "shift_down_rus": "◄",
    "caps_lock_down_up_rus": "◄",
    "caps_lock_down_up_shift_down_rus": "◄",
    
    "normal_eng": "◄",
    "shift_down_eng": "◄",
    "caps_lock_down_up_eng": "◄",
    "caps_lock_down_up_shift_down_eng": "◄"
  },
  {
    "item_name": "ArrowDown",

    "normal_rus": "▼",
    "shift_down_rus": "▼",
    "caps_lock_down_up_rus": "▼",
    "caps_lock_down_up_shift_down_rus": "▼",
    
    "normal_eng": "▼",
    "shift_down_eng": "▼",
    "caps_lock_down_up_eng": "▼",
    "caps_lock_down_up_shift_down_eng": "▼"
  },
  {
    "item_name": "ArrowRight",

    "normal_rus": "►",
    "shift_down_rus": "►",
    "caps_lock_down_up_rus": "►",
    "caps_lock_down_up_shift_down_rus": "►",
    
    "normal_eng": "►",
    "shift_down_eng": "►",
    "caps_lock_down_up_eng": "►",
    "caps_lock_down_up_shift_down_eng": "►"
  },
  {
    "item_name": "ControlRight",

    "normal_rus": "Ctrl",
    "shift_down_rus": "Ctrl",
    "caps_lock_down_up_rus": "Ctrl",
    "caps_lock_down_up_shift_down_rus": "Ctrl",
    
    "normal_eng": "Ctrl",
    "shift_down_eng": "Ctrl",
    "caps_lock_down_up_eng": "Ctrl",
    "caps_lock_down_up_shift_down_eng": "Ctrl"
  }
]



  for (let i of items) {

    //output items

    let item = document.createElement('div')
    item.classList.add('item')
    item.classList.add(i.item_name)
    item.id = i.item_name
    container_keyboard.appendChild(item)

      let rus = document.createElement('span')
      rus.classList.add('rus')
      rus.classList.add('invisible')
      item.appendChild(rus)

        let normal_rus = document.createElement('span')
        normal_rus.classList.add('normal_rus')
        normal_rus.classList.add('invisible')
        rus.appendChild(normal_rus)
        normal_rus.textContent = i.normal_rus

        let shift_down_rus = document.createElement('span')
        shift_down_rus.classList.add('shift_down_rus')
        shift_down_rus.classList.add('invisible')
        rus.appendChild(shift_down_rus)
        shift_down_rus.textContent = i.shift_down_rus

        let caps_lock_down_up_rus = document.createElement('span')
        caps_lock_down_up_rus.classList.add('caps_lock_down_up_rus')
        caps_lock_down_up_rus.classList.add('invisible')
        rus.appendChild(caps_lock_down_up_rus)
        caps_lock_down_up_rus.textContent = i.caps_lock_down_up_rus

        let caps_lock_down_up_shift_down_rus = document.createElement('span')
        caps_lock_down_up_shift_down_rus.classList.add('caps_lock_down_up_shift_down_rus')
        caps_lock_down_up_shift_down_rus.classList.add('invisible')
        rus.appendChild(caps_lock_down_up_shift_down_rus)
        caps_lock_down_up_shift_down_rus.textContent = i.caps_lock_down_up_shift_down_rus

      let eng = document.createElement('span')
      eng.classList.add('eng')
      eng.classList.add('invisible')
      item.appendChild(eng)

        let normal_eng = document.createElement('span')
        normal_eng.classList.add('normal_eng')
        normal_eng.classList.add('invisible')
        eng.appendChild(normal_eng)
        normal_eng.textContent = i.normal_eng

        let shift_down_eng = document.createElement('span')
        shift_down_eng.classList.add('shift_down_eng')
        shift_down_eng.classList.add('invisible')
        eng.appendChild(shift_down_eng)
        shift_down_eng.textContent = i.shift_down_eng

        let caps_lock_down_up_eng = document.createElement('span')
        caps_lock_down_up_eng.classList.add('caps_lock_down_up_eng')
        caps_lock_down_up_eng.classList.add('invisible')
        eng.appendChild(caps_lock_down_up_eng)
        caps_lock_down_up_eng.textContent = i.caps_lock_down_up_eng

        let caps_lock_down_up_shift_down_eng = document.createElement('span')
        caps_lock_down_up_shift_down_eng.classList.add('caps_lock_down_up_shift_down_eng')
        caps_lock_down_up_shift_down_eng.classList.add('invisible')
        eng.appendChild(caps_lock_down_up_shift_down_eng)
        caps_lock_down_up_shift_down_eng.textContent = i.caps_lock_down_up_shift_down_eng

    eng.classList.remove('invisible')
    normal_eng.classList.remove('invisible')

  ///////////////////////////////////////////////////////////////////////////

  function switchLanguage(func, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);
      for (let code of codes) {
        if (!pressed.has(code)) {
          return;
        }
      }
      pressed.clear();
      func();
    });
    document.addEventListener('keyup', function(event) {
      if(event.code !== 'ShiftLeft') {
        pressed.delete(event.code);
      }
      if(event.code == 'ShiftLeft') {

      }
    });
  }
  
  let funcLang = () => {
    eng.classList.toggle('invisible')
    rus.classList.toggle('invisible')
    normal_rus.classList.toggle('invisible')
  }

  let funcCaps = () => {
    if(i.item_name == 'CapsLock') {
      item.classList.toggle('btnDownCapsLock')
    }
    normal_eng.classList.toggle('invisible')
    caps_lock_down_up_eng.classList.toggle('invisible')
    normal_rus.classList.toggle('invisible')
    caps_lock_down_up_rus.classList.toggle('invisible')
  }

  let funcShift = () => {
    // if(window.getComputedStyle(normal_rus).display == 'block') {

    // }
  }
  
  switchLanguage(
    funcLang,
    "ControlLeft",
    "AltLeft"
  )

  switchLanguage(
    funcCaps,
    "CapsLock",
  )

  switchLanguage(
    funcShift,
    "ShiftLeft",
  )

///////////////////////////////////////////////////////////////////////////

    //implement phisical keyboard keydown and keyup

  document.addEventListener('keydown', function(event) {
    
    if (event.code == i.item_name) {
      item.classList.add('btnDown')
      if (
        i.item_name !== 'Backspace' && 
        i.item_name !== 'CapsLock' && 
        i.item_name !== 'Enter' && 
        i.item_name !== 'ShiftLeft' && 
        i.item_name !== 'ShiftRight' &&
        i.item_name !== 'ControlLeft' && 
        i.item_name !== 'MetaLeft' && 
        i.item_name !== 'AltLeft' && 
        i.item_name !== 'Delete' &&
        i.item_name !== 'Tab' && 
        i.item_name !== 'Space' && 
        i.item_name !== 'AltRight' && 
        i.item_name !== 'ControlRight'
      ) {
        event.preventDefault()
        if(window.getComputedStyle(normal_rus).display == 'block') {
          textarea.value += i.normal_rus
        } 
        if(window.getComputedStyle(normal_eng).display == 'block') {
          textarea.value += i.normal_eng
        }         
        if(window.getComputedStyle(caps_lock_down_up_rus).display == 'block') {
          textarea.value += i.caps_lock_down_up_rus
        } 
        if(window.getComputedStyle(caps_lock_down_up_eng).display == 'block') {
          textarea.value += i.caps_lock_down_up_eng
        } 
        
      }
      if ( i.item_name == 'Space') {
        event.preventDefault()
        textarea.value += ' '
      }
      if ( i.item_name == 'Tab') {
        event.preventDefault()
        textarea.value += '  '
      }
      if ( i.item_name == 'AltRight' || i.item_name == 'AltLeft') {
        event.preventDefault()
      }     

    }
  });    
  
  document.addEventListener('keyup', function(event) {
    if (event.code == i.item_name) {
      item.classList.remove('btnDown')
    }
  });

}

//implement mousedown and mouseup

let btns = document.querySelectorAll('.item')

let capsLock = document.querySelector('.CapsLock')


for(let btn of btns) {
  capsLock.addEventListener('click', function(event) {
    if (event.currentTarget.id == 'CapsLock') {

      if(btn.id == 'CapsLock') {
        btn.classList.toggle('btnDownCapsLock')
      }

      btn.childNodes[1].childNodes[0].classList.toggle('invisible')
      btn.childNodes[1].childNodes[2].classList.toggle('invisible')
      btn.childNodes[0].childNodes[0].classList.toggle('invisible')
      btn.childNodes[0].childNodes[2].classList.toggle('invisible')
    }
  })

  btn.addEventListener('mousedown', function(event) {
    if (event.currentTarget.id !== 'CapsLock') {
      event.currentTarget.classList.add('btnDown')
    }
    let targetKey = items.find(i => {
      return i.item_name == event.currentTarget.id
    })

    if (
      event.currentTarget.id !== 'Backspace' && 
      event.currentTarget.id !== 'CapsLock' && 
      event.currentTarget.id !== 'Enter' && 
      event.currentTarget.id !== 'ShiftLeft' && 
      event.currentTarget.id !== 'ShiftRight' &&
      event.currentTarget.id !== 'ControlLeft' && 
      event.currentTarget.id !== 'MetaLeft' && 
      event.currentTarget.id !== 'AltLeft' && 
      event.currentTarget.id !== 'Delete' &&
      event.currentTarget.id !== 'Tab' && 
      event.currentTarget.id !== 'Space' && 
      event.currentTarget.id !== 'AltRight' && 
      event.currentTarget.id !== 'ControlRight'
    ) {
      if(window.getComputedStyle(event.currentTarget.childNodes[0].childNodes[0]).display == 'block') {
        textarea.value += targetKey.normal_rus
      }
      if(window.getComputedStyle(event.currentTarget.childNodes[1].childNodes[0]).display == 'block') {
        textarea.value += targetKey.normal_eng
      }
      if(window.getComputedStyle(event.currentTarget.childNodes[0].childNodes[2]).display == 'block') {
        textarea.value += targetKey.caps_lock_down_up_rus
      }
      if(window.getComputedStyle(event.currentTarget.childNodes[1].childNodes[2]).display == 'block') {
        textarea.value += targetKey.caps_lock_down_up_eng
      }
    } 
    if (event.currentTarget.id == 'Space') {
      textarea.value += ' '
    }
    if (event.currentTarget.id == 'Tab') {
      textarea.value += '  '
    }
  })

  document.body.addEventListener('mouseup', function(event) {
    if (event.currentTarget.id !== 'CapsLock') {

      btn.classList.remove('btnDown')
    }
  })

}

  