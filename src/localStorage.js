import { load, save } from './errorLS';

const refs = {
  switch: document.querySelector('.switch'),
  input: document.querySelector('.js-switch-input'),
  body: document.body,
};

// const obj = JSON.parse(localStorage.getItem('Theme'));
const obj = load('Theme');
if (obj !== undefined) {
  refs.input.checked = obj.isChecked;
  refs.body.classList.add(obj.theme);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.input.addEventListener('change', HandleChange);

function HandleChange(e) {
  if (e.target.checked === true) {
    refs.body.classList.add('dark-theme');
    const obj = {
      theme: 'dark-theme',
      isChecked: true,
    };
    save('Theme', obj);
  } else if (e.target.checked === false) {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');
    const obj = {
      theme: 'light-theme',
      isChecked: false,
    };
    save('Theme', obj);
  }
}
