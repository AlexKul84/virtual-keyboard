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
  }
]

//output items

  for (let i of items) {

    let item = document.createElement('div')
    item.classList.add('item')
    item.classList.add(i.item_name)
    item.id = i.item_name
    container_keyboard.appendChild(item)

      let rus = document.createElement('span')
      rus.classList.add('rus')
      item.appendChild(rus)

        let normal = document.createElement('span')
        normal.classList.add('normal')
        rus.appendChild(normal)
        normal.textContent = i.normal_rus

        let shift_down_rus = document.createElement('span')
        shift_down_rus.classList.add('shift_down')
        rus.appendChild(shift_down_rus)
        shift_down_rus.textContent = i.shift_down_rus

        let caps_lock_down_up_rus = document.createElement('span')
        caps_lock_down_up_rus.classList.add('caps_lock_down_up')
        rus.appendChild(caps_lock_down_up_rus)
        caps_lock_down_up_rus.textContent = i.caps_lock_down_up_rus

        let caps_lock_down_up_shift_down_rus = document.createElement('span')
        caps_lock_down_up_shift_down_rus.classList.add('caps_lock_down_up_shift_down')
        rus.appendChild(caps_lock_down_up_shift_down_rus)
        caps_lock_down_up_shift_down_rus.textContent = i.caps_lock_down_up_shift_down_rus

      let eng = document.createElement('span')
      eng.classList.add('eng')
      item.appendChild(eng)

        let normal_eng = document.createElement('span')
        normal_eng.classList.add('normal')
        eng.appendChild(normal_eng)
        normal_eng.textContent = i.normal_eng

        let shift_down_eng = document.createElement('span')
        shift_down_eng.classList.add('shift_down')
        eng.appendChild(shift_down_eng)
        shift_down_eng.textContent = i.shift_down_eng

        let caps_lock_down_up_eng = document.createElement('span')
        caps_lock_down_up_eng.classList.add('caps_lock_down_up')
        eng.appendChild(caps_lock_down_up_eng)
        caps_lock_down_up_eng.textContent = i.caps_lock_down_up_eng

        let caps_lock_down_up_shift_down_eng = document.createElement('span')
        caps_lock_down_up_shift_down_eng.classList.add('caps_lock_down_up_shift_down')
        eng.appendChild(caps_lock_down_up_shift_down_eng)
        caps_lock_down_up_shift_down_eng.textContent = i.caps_lock_down_up_shift_down_eng

    document.addEventListener('keydown', function(event) {
      if (event.code == i.item_name) {
        item.classList.add('btnDown')
      }
    });    
    
    document.addEventListener('keyup', function(event) {
      if (event.code == i.item_name) {
        item.classList.remove('btnDown')
      }
    });

  }

//implement buttonDown

let btns = document.querySelectorAll('.item')

for(let btn of btns) {
  btn.addEventListener('mousedown', function(event) {
    event.currentTarget.classList.add('btnDown')
  })
  btn.addEventListener('mouseup', function(event) {
    event.currentTarget.classList.remove('btnDown')
  })
}
  