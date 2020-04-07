
const keyboards = [
  [
    ['', 'Backquote', 'ё', 'Ё', '`', '~'],
    ['', 'Digit1', '1', '!', '1', '!'],
    ['', 'Digit2', '2', '"', '2', '@'],
    ['', 'Digit3', '3', '№', '3', '#'],
    ['', 'Digit4', '4', ';', '4', '$'],
    ['', 'Digit5', '5', '%', '5', '%'],
    ['', 'Digit6', '6', ':', '6', '^'],
    ['', 'Digit7', '7', '?', '7', '&'],
    ['', 'Digit8', '8', '*', '8', '*'],
    ['', 'Digit9', '9', '(', '9', '('],
    ['', 'Digit0', '0', ')', '0', ')'],
    ['', 'Minus', '-', '_', '-', '_'],
    ['', 'Equal', '=', '+', '=', '+'],
    ['backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['', 'KeyQ', 'й', 'Й', 'q', 'Q'],
    ['', 'KeyW', 'ц', 'Ц', 'w', 'W'],
    ['', 'KeyE', 'у', 'У', 'e', 'E'],
    ['', 'KeyR', 'к', 'К', 'r', 'R'],
    ['', 'KeyT', 'е', 'Е', 't', 'T'],
    ['', 'KeyY', 'н', 'Н', 'y', 'Y'],
    ['', 'KeyU', 'г', 'Г', 'u', 'U'],
    ['', 'KeyI', 'ш', 'Ш', 'i', 'I'],
    ['', 'KeyO', 'щ', 'Щ', 'o', 'O'],
    ['', 'KeyP', 'з', 'З', 'p', 'P'],
    ['', 'BracketLeft', 'х', 'Х', '[', '{'],
    ['', 'BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['del', 'Delete', 'Del', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['capslock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['', 'KeyA', 'ф', 'Ф', 'a', 'A'],
    ['', 'KeyS', 'ы', 'Ы', 's', 'S'],
    ['', 'KeyD', 'в', 'В', 'd', 'D'],
    ['', 'KeyF', 'а', 'А', 'f', 'F'],
    ['', 'KeyG', 'п', 'П', 'g', 'G'],
    ['', 'KeyH', 'р', 'Р', 'h', 'H'],
    ['', 'KeyJ', 'о', 'О', 'j', 'J'],
    ['', 'KeyK', 'л', 'Л', 'k', 'K'],
    ['', 'KeyL', 'д', 'Д', 'l', 'L'],
    ['', 'Semicolon', 'ж', 'Ж', ';', ':'],
    ['', 'Quote', 'э', 'Э', "'", '"'],
    ['enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['shift-left', 'ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['', 'KeyZ', 'я', 'Я', 'z', 'Z'],
    ['', 'KeyX', 'ч', 'Ч', 'x', 'X'],
    ['', 'KeyC', 'с', 'С', 'c', 'C'],
    ['', 'KeyV', 'м', 'М', 'v', 'V'],
    ['', 'KeyB', 'и', 'И', 'b', 'B'],
    ['', 'KeyN', 'т', 'Т', 'n', 'N'],
    ['', 'KeyM', 'ь', 'Ь', 'm', 'M'],
    ['', 'Comma', 'б', 'Б', '.', '<'],
    ['', 'Period', 'ю', 'Ю', ',', '>'],
    ['', 'Slash', '.', ',', '/', '?'],
    ['arrow', 'ArrowUp', '↑', '↑', '↑', '↑'],
    ['shift-right', 'ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ctrl-left', 'ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['win', 'MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['alt-left', 'AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['space', 'Space', ' ', ' ', ' ', ' '],
    ['alt-right', 'AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ctrl-right', 'ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['arrow', 'ArrowLeft', '←', '←', '←', '←'],
    ['arrow', 'ArrowDown', '↓', '↓', '↓', '↓'],
    ['arrow', 'ArrowRight', '→', '→', '→', '→'],

  ],
];
const state = {
  lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
  caseOn: false,
  capsLock: false,
  shift: false,
};
const usualKeys = [
  ['', 'Backquote', 'ё', 'Ё', '`', '~'],
  ['', 'Digit1', '1', '!', '1', '!'],
  ['', 'Digit2', '2', '"', '2', '@'],
  ['', 'Digit3', '3', '№', '3', '#'],
  ['', 'Digit4', '4', ';', '4', '$'],
  ['', 'Digit5', '5', '%', '5', '%'],
  ['', 'Digit6', '6', ':', '6', '^'],
  ['', 'Digit7', '7', '?', '7', '&'],
  ['', 'Digit8', '8', '*', '8', '*'],
  ['', 'Digit9', '9', '(', '9', '('],
  ['', 'Digit0', '0', ')', '0', ')'],
  ['', 'Minus', '-', '_', '-', '_'],
  ['', 'Equal', '=', '+', '=', '+'],
  ['', 'KeyQ', 'й', 'Й', 'q', 'Q'],
  ['', 'KeyW', 'ц', 'Ц', 'w', 'W'],
  ['', 'KeyE', 'у', 'У', 'e', 'E'],
  ['', 'KeyR', 'к', 'К', 'r', 'R'],
  ['', 'KeyT', 'е', 'Е', 't', 'T'],
  ['', 'KeyY', 'н', 'Н', 'y', 'Y'],
  ['', 'KeyU', 'г', 'Г', 'u', 'U'],
  ['', 'KeyI', 'ш', 'Ш', 'i', 'I'],
  ['', 'KeyO', 'щ', 'Щ', 'o', 'O'],
  ['', 'KeyP', 'з', 'З', 'p', 'P'],
  ['', 'BracketLeft', 'х', 'Х', '[', '{'],
  ['', 'BracketRight', 'ъ', 'Ъ', ']', '}'],
  ['', 'KeyA', 'ф', 'Ф', 'a', 'A'],
  ['', 'KeyS', 'ы', 'Ы', 's', 'S'],
  ['', 'KeyD', 'в', 'В', 'd', 'D'],
  ['', 'KeyF', 'а', 'А', 'f', 'F'],
  ['', 'KeyG', 'п', 'П', 'g', 'G'],
  ['', 'KeyH', 'р', 'Р', 'h', 'H'],
  ['', 'KeyJ', 'о', 'О', 'j', 'J'],
  ['', 'KeyK', 'л', 'Л', 'k', 'K'],
  ['', 'KeyL', 'д', 'Д', 'l', 'L'],
  ['', 'Semicolon', 'ж', 'Ж', ';', ':'],
  ['', 'Quote', 'э', 'Э', "'", '"'],
  ['', 'KeyZ', 'я', 'Я', 'z', 'Z'],
  ['', 'KeyX', 'ч', 'Ч', 'x', 'X'],
  ['', 'KeyC', 'с', 'С', 'c', 'C'],
  ['', 'KeyV', 'м', 'М', 'v', 'V'],
  ['', 'KeyB', 'и', 'И', 'b', 'B'],
  ['', 'KeyN', 'т', 'Т', 'n', 'N'],
  ['', 'KeyM', 'ь', 'Ь', 'm', 'M'],
  ['', 'Comma', 'б', 'Б', '.', '<'],
  ['', 'Period', 'ю', 'Ю', ',', '>'],
  ['', 'Slash', '.', ',', '/', '?'],
];

function init() {
  let n;
  if (state.lang === 'en' && state.caseOn === false) { n = 4; } else if (state.lang === 'ru' && state.caseOn === false) { n = 2; } else if (state.lang === 'en' && state.caseOn === true) { n = 5; } else if (state.lang === 'ru' && state.caseOn === false) { n = 3; }
  const body = document.querySelector('body');
  const container = document.createElement('div');
  const textArea = document.createElement('textarea');
  const keyboard = document.createElement('div');
  const div = document.createElement('div');
  const langInfo = document.createElement('button');
  langInfo.className = 'lang-info';
  langInfo.innerHTML = state.lang;
  div.className = 'info';
  container.className = 'container';
  keyboard.className = 'keyboard';
  body.append(container);
  container.append(textArea);
  textArea.focus();
  container.append(keyboard);
  container.append(div);
  div.append(langInfo);
  div.append('Создано на ОС Windows. Переключение языка на Ctrl + Shift');

  for (let i = 0; i < keyboards.length; i += 1) {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard-row';
    keyboard.append(keyboardRow);
    for (let k = 0; k < keyboards[i].length; k += 1) {
      const key = document.createElement('div');
      key.className = `key ${keyboards[i][k][1]}`;
      key.innerHTML = keyboards[i][k][n];
      keyboardRow.append(key);
    }
  }
}
function render() {
  let n;
  if (state.lang === 'en' && state.caseOn === false) { n = 4; } else if (state.lang === 'ru' && state.caseOn === false) { n = 2; } else if (state.lang === 'en' && state.caseOn === true) { n = 5; } else if (state.lang === 'ru' && state.caseOn === true) { n = 3; }

  usualKeys.forEach((item) => {
    document.querySelector(`.${item[1]}`).innerHTML = item[n];
  });
}
function switchCase() {
  state.caseOn = !state.caseOn;
  render();
}
function switchLang() {
  if (state.lang === 'en') {
    state.lang = 'ru';
  } else {
    state.lang = 'en';
  }
  localStorage.setItem('lang', state.lang);
  render();
}
function typeLetter(node) {
  const txt = document.querySelector('textarea');

  switch (node.innerHTML) {
    case 'Tab':
      txt.value += '\t';
      break;
    case 'Backspace':
      if (txt.selectionStart > 0) {
        const pos = txt.selectionStart;
        txt.value = txt.value.slice(0, pos - 1) + txt.value.slice(pos, txt.value.length);
        txt.setRangeText('', pos - 1, pos - 1, 'end');
      }
      break;
    case 'Del':
      if (txt.selectionStart > 0) {
        const pos = txt.selectionStart;
        txt.value = txt.value.slice(0, pos) + txt.value.slice(pos, txt.value.length);
        txt.setRangeText('', pos, pos + 1, 'end');
      }
      break;
    case 'Enter':
      txt.value += '\n';
      break;
    case 'Alt':
      break;
    case 'CapsLock':
      state.capsLock = !state.capsLock;
      switchCase();
      break;
    case 'Shift':
      if (!state.capsLock && !state.shift) switchCase(); state.shift = true;
      break;
    case 'Win':
      break;
    case 'Ctrl':
      break;

    default:
      if (txt.selectionStart >= 0) {
        const pos = txt.selectionStart;
        txt.value = txt.value.slice(0, pos) + node.innerHTML + txt.value.slice(pos, txt.value.length);
        txt.setRangeText(node.innerHTML, pos, pos + 1, 'end');
        break;
      }
  }
}
init();

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  document.querySelector(`.${e.code}`).classList.add('active');
  if (e.ctrlKey && e.shiftKey) { switchLang(); document.querySelector('.lang-info').value = state.lang; } else {
    typeLetter(document.querySelector(`.${e.code}`));
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft') { state.shift = false; state.caseOn = false; render(); }

  document.querySelector(`.${e.code}`).classList.remove('active');
  if (e.code === 'CapsLock' && state.capsLock) { document.querySelector(`.${e.code}`).classList.add('active'); }
});

window.addEventListener('blur', () => {
  document.querySelectorAll('.key').forEach((item) => { item.classList.remove('active'); });
});
document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('key')) {
    e.target.classList.add('active');
    typeLetter(e.target);
  }
});
document.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('key') && e.target.classList.contains('active')) {
    e.target.classList.remove('active');
  }
});
