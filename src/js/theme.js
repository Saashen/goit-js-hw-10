import refs from './references';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const theme = 'theme';
const localTheme = localStorage.getItem(theme);

if (localTheme === Theme.DARK) {
  refs.body.classList.add(localTheme);
  refs.switchTheme.checked = localTheme;
}

function changeTheme(event) {
  const { target } = event;
  if (target.checked) {
    refs.body.classList = [Theme.DARK];
    localStorage.setItem(theme, Theme.DARK);
  } else {
    refs.body.classList = [Theme.LIGHT];
    localStorage.setItem(theme, Theme.LIGHT);
  }
}

refs.switchTheme.addEventListener('change', changeTheme);
