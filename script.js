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

    let key_1 = document.createElement('div')
    key_1.classList.add('item')
    key_1.classList.add('key_1')
    container_keyboard.appendChild(key_1)

      let rus_1 = document.createElement('span')
      rus_1.classList.add('rus')
      key_1.appendChild(rus_1)

        let normal_rus_1 = document.createElement('span')
        normal_rus_1.classList.add('normal')
        rus_1.appendChild(normal_rus_1)
        normal_rus_1.textContent = '1'

        let shift_down_rus_1 = document.createElement('span')
        shift_down_rus_1.classList.add('shift_down')
        rus_1.appendChild(shift_down_rus_1)
        shift_down_rus_1.textContent = '!'

        let caps_lock_down_up_rus_1 = document.createElement('span')
        caps_lock_down_up_rus_1.classList.add('caps_lock_down_up')
        rus_1.appendChild(caps_lock_down_up_rus_1)
        caps_lock_down_up_rus_1.textContent = '1'

        let caps_lock_down_up_shift_down_rus_1 = document.createElement('span')
        caps_lock_down_up_shift_down_rus_1.classList.add('caps_lock_down_up_shift_down')
        rus_1.appendChild(caps_lock_down_up_shift_down_rus_1)
        caps_lock_down_up_shift_down_rus_1.textContent = '!'

      let eng_1 = document.createElement('span')
      eng_1.classList.add('eng')
      key_1.appendChild(eng_1)

        let normal_eng_1 = document.createElement('span')
        normal_eng_1.classList.add('normal')
        eng_1.appendChild(normal_eng_1)
        normal_eng_1.textContent = '1'

        let shift_down_eng_1 = document.createElement('span')
        shift_down_eng_1.classList.add('shift_down')
        eng_1.appendChild(shift_down_eng_1)
        shift_down_eng_1.textContent = '!'

        let caps_lock_down_up_eng_1 = document.createElement('span')
        caps_lock_down_up_eng_1.classList.add('caps_lock_down_up')
        eng_1.appendChild(caps_lock_down_up_eng_1)
        caps_lock_down_up_eng_1.textContent = '1'

        let caps_lock_down_up_shift_down_eng_1 = document.createElement('span')
        caps_lock_down_up_shift_down_eng_1.classList.add('caps_lock_down_up_shift_down')
        eng_1.appendChild(caps_lock_down_up_shift_down_eng_1)
        caps_lock_down_up_shift_down_eng_1.textContent = '!'

    let key_2 = document.createElement('div')
    key_2.classList.add('item')
    key_2.classList.add('key_2')
    container_keyboard.appendChild(key_2)

      let rus_2 = document.createElement('span')
      rus_2.classList.add('rus')
      key_2.appendChild(rus_2)

        let normal_rus_2 = document.createElement('span')
        normal_rus_2.classList.add('normal')
        rus_2.appendChild(normal_rus_2)
        normal_rus_2.textContent = '2'

        let shift_down_rus_2 = document.createElement('span')
        shift_down_rus_2.classList.add('shift_down')
        rus_2.appendChild(shift_down_rus_2)
        shift_down_rus_2.textContent = '"'

        let caps_lock_down_up_rus_2 = document.createElement('span')
        caps_lock_down_up_rus_2.classList.add('caps_lock_down_up')
        rus_2.appendChild(caps_lock_down_up_rus_2)
        caps_lock_down_up_rus_2.textContent = '2'

        let caps_lock_down_up_shift_down_rus_2 = document.createElement('span')
        caps_lock_down_up_shift_down_rus_2.classList.add('caps_lock_down_up_shift_down')
        rus_2.appendChild(caps_lock_down_up_shift_down_rus_2)
        caps_lock_down_up_shift_down_rus_2.textContent = '"'

      let eng_2 = document.createElement('span')
      eng_2.classList.add('eng')
      key_2.appendChild(eng_2)

        let normal_eng_2 = document.createElement('span')
        normal_eng_2.classList.add('normal')
        eng_2.appendChild(normal_eng_2)
        normal_eng_2.textContent = '2'

        let shift_down_eng_2 = document.createElement('span')
        shift_down_eng_2.classList.add('shift_down')
        eng_2.appendChild(shift_down_eng_2)
        shift_down_eng_2.textContent = '@'

        let caps_lock_down_up_eng_2 = document.createElement('span')
        caps_lock_down_up_eng_2.classList.add('caps_lock_down_up')
        eng_2.appendChild(caps_lock_down_up_eng_2)
        caps_lock_down_up_eng_2.textContent = '2'

        let caps_lock_down_up_shift_down_eng_2 = document.createElement('span')
        caps_lock_down_up_shift_down_eng_2.classList.add('caps_lock_down_up_shift_down')
        eng_2.appendChild(caps_lock_down_up_shift_down_eng_2)
        caps_lock_down_up_shift_down_eng_2.textContent = '@'

    let key_3 = document.createElement('div')
    key_3.classList.add('item')
    key_3.classList.add('key_3')
    container_keyboard.appendChild(key_3)

      let rus_3 = document.createElement('span')
      rus_3.classList.add('rus')
      key_3.appendChild(rus_3)

        let normal_rus_3 = document.createElement('span')
        normal_rus_3.classList.add('normal')
        rus_3.appendChild(normal_rus_3)
        normal_rus_3.textContent = '3'

        let shift_down_rus_3 = document.createElement('span')
        shift_down_rus_3.classList.add('shift_down')
        rus_3.appendChild(shift_down_rus_3)
        shift_down_rus_3.textContent = '№'

        let caps_lock_down_up_rus_3 = document.createElement('span')
        caps_lock_down_up_rus_3.classList.add('caps_lock_down_up')
        rus_3.appendChild(caps_lock_down_up_rus_3)
        caps_lock_down_up_rus_3.textContent = '3'

        let caps_lock_down_up_shift_down_rus_3 = document.createElement('span')
        caps_lock_down_up_shift_down_rus_3.classList.add('caps_lock_down_up_shift_down')
        rus_3.appendChild(caps_lock_down_up_shift_down_rus_3)
        caps_lock_down_up_shift_down_rus_3.textContent = '№'

      let eng_3 = document.createElement('span')
      eng_3.classList.add('eng')
      key_3.appendChild(eng_3)

        let normal_eng_3 = document.createElement('span')
        normal_eng_3.classList.add('normal')
        eng_3.appendChild(normal_eng_3)
        normal_eng_3.textContent = '3'

        let shift_down_eng_3 = document.createElement('span')
        shift_down_eng_3.classList.add('shift_down')
        eng_3.appendChild(shift_down_eng_3)
        shift_down_eng_3.textContent = '#'

        let caps_lock_down_up_eng_3 = document.createElement('span')
        caps_lock_down_up_eng_3.classList.add('caps_lock_down_up')
        eng_3.appendChild(caps_lock_down_up_eng_3)
        caps_lock_down_up_eng_3.textContent = '3'

        let caps_lock_down_up_shift_down_eng_3 = document.createElement('span')
        caps_lock_down_up_shift_down_eng_3.classList.add('caps_lock_down_up_shift_down')
        eng_3.appendChild(caps_lock_down_up_shift_down_eng_3)
        caps_lock_down_up_shift_down_eng_3.textContent = '#'

    let key_4 = document.createElement('div')
    key_4.classList.add('item')
    key_4.classList.add('key_4')
    container_keyboard.appendChild(key_4)

      let rus_4 = document.createElement('span')
      rus_4.classList.add('rus')
      key_4.appendChild(rus_4)

        let normal_rus_4 = document.createElement('span')
        normal_rus_4.classList.add('normal')
        rus_4.appendChild(normal_rus_4)
        normal_rus_4.textContent = '4'

        let shift_down_rus_4 = document.createElement('span')
        shift_down_rus_4.classList.add('shift_down')
        rus_4.appendChild(shift_down_rus_4)
        shift_down_rus_4.textContent = ';'

        let caps_lock_down_up_rus_4 = document.createElement('span')
        caps_lock_down_up_rus_4.classList.add('caps_lock_down_up')
        rus_4.appendChild(caps_lock_down_up_rus_4)
        caps_lock_down_up_rus_4.textContent = '4'

        let caps_lock_down_up_shift_down_rus_4 = document.createElement('span')
        caps_lock_down_up_shift_down_rus_4.classList.add('caps_lock_down_up_shift_down')
        rus_4.appendChild(caps_lock_down_up_shift_down_rus_4)
        caps_lock_down_up_shift_down_rus_4.textContent = ';'

      let eng_4 = document.createElement('span')
      eng_4.classList.add('eng')
      key_4.appendChild(eng_4)

        let normal_eng_4 = document.createElement('span')
        normal_eng_4.classList.add('normal')
        eng_4.appendChild(normal_eng_4)
        normal_eng_4.textContent = '4'

        let shift_down_eng_4 = document.createElement('span')
        shift_down_eng_4.classList.add('shift_down')
        eng_4.appendChild(shift_down_eng_4)
        shift_down_eng_4.textContent = '$'

        let caps_lock_down_up_eng_4 = document.createElement('span')
        caps_lock_down_up_eng_4.classList.add('caps_lock_down_up')
        eng_4.appendChild(caps_lock_down_up_eng_4)
        caps_lock_down_up_eng_4.textContent = '4'

        let caps_lock_down_up_shift_down_eng_4 = document.createElement('span')
        caps_lock_down_up_shift_down_eng_4.classList.add('caps_lock_down_up_shift_down')
        eng_4.appendChild(caps_lock_down_up_shift_down_eng_4)
        caps_lock_down_up_shift_down_eng_4.textContent = '$'





