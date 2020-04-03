import menuItems from './menu.json';
import menuTemplate from './templates/menu-template.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
};

buildMenuCard(menuItems);

function buildMenuCard(menuItems) {
  const card = menuItems.map(item => menuTemplate(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', card);
}
