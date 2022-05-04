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
    description.textContent = 'Клавиатура создана в операционной системе Windiws'

    let textarea = document.createElement('textarea')
    textarea.classList.add('textarea')
    container_main.appendChild(textarea)
    textarea.id = 'textarea'
    textarea.setAttribute('name', 'textarea')
    textarea.setAttribute('rows', '10')

  let container_keyboard = document.createElement('div')
  container_keyboard.classList.add('container_keyboard')
  container.appendChild(container_keyboard)

    let key_backquote = document.createElement('div')
    key_backquote.classList.add('item')
    key_backquote.classList.add('key_backquote')
    container_keyboard.appendChild(key_backquote)

      let rus_backquote = document.createElement('span')
      rus_backquote.classList.add('rus')
      key_backquote.appendChild(rus_backquote)

        let normal_rus_backquote = document.createElement('span')
        normal_rus_backquote.classList.add('normal')
        rus_backquote.appendChild(normal_rus_backquote)
        normal_rus_backquote.textContent = 'ё'

        let shift_down_rus_backquote = document.createElement('span')
        shift_down_rus_backquote.classList.add('shift_down')
        rus_backquote.appendChild(shift_down_rus_backquote)
        shift_down_rus_backquote.textContent = 'Ё'

        let caps_lock_down_up_rus_backquote = document.createElement('span')
        caps_lock_down_up_rus_backquote.classList.add('caps_lock_down_up')
        rus_backquote.appendChild(caps_lock_down_up_rus_backquote)
        caps_lock_down_up_rus_backquote.textContent = 'Ё'

        let caps_lock_down_up_shift_down_rus_backquote = document.createElement('span')
        caps_lock_down_up_shift_down_rus_backquote.classList.add('caps_lock_down_up_shift_down')
        rus_backquote.appendChild(caps_lock_down_up_shift_down_rus_backquote)
        caps_lock_down_up_shift_down_rus_backquote.textContent = 'ё'

        let eng_backquote = document.createElement('span')
        eng_backquote.classList.add('eng')
        key_backquote.appendChild(eng_backquote)
  
          let normal_eng_backquote = document.createElement('span')
          normal_eng_backquote.classList.add('normal')
          eng_backquote.appendChild(normal_eng_backquote)
          normal_eng_backquote.textContent = '`'
  
          let shift_down_eng_backquote = document.createElement('span')
          shift_down_eng_backquote.classList.add('shift_down')
          eng_backquote.appendChild(shift_down_eng_backquote)
          shift_down_eng_backquote.textContent = '~'
  
          let caps_lock_down_up_eng_backquote = document.createElement('span')
          caps_lock_down_up_eng_backquote.classList.add('caps_lock_down_up')
          eng_backquote.appendChild(caps_lock_down_up_eng_backquote)
          caps_lock_down_up_eng_backquote.textContent = '`'
  
          let caps_lock_down_up_shift_down_eng_backquote = document.createElement('span')
          caps_lock_down_up_shift_down_eng_backquote.classList.add('caps_lock_down_up_shift_down')
          eng_backquote.appendChild(caps_lock_down_up_shift_down_eng_backquote)
          caps_lock_down_up_shift_down_eng_backquote.textContent = '~'



