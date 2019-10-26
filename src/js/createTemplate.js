import menuItems from '../menu.json';
import dishItemTemplate from '../templates/dish-item.hbs';
import refs from './references'

buildMenuFeed(menuItems);

function buildMenuFeed(menuItems) {
  const markup = menuItems.map(menuItem => dishItemTemplate(menuItem)).join('');
  refs.menu.insertAdjacentHTML('afterbegin', markup);
}