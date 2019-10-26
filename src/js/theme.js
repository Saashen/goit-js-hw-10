import refs from './references';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('Theme') === Theme.DARK) {
  refs.switchTheme.checked = true;
  if (refs.body.classList.contains('light-theme')) {
    refs.body.classList.remove('light-theme');
  }
  refs.body.classList.add('dark-theme');
} else {
  if (refs.body.classList.contains('dark-theme')) {
    refs.body.classList.remove('dark-theme');
  }
  refs.body.classList.add('light-theme');
}

refs.switchTheme.addEventListener('change', switchThemeFunction);

function switchThemeFunction() {
  event.preventDefault();
  if (refs.switchTheme.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    if (refs.body.classList.contains('light-theme')) {
      refs.body.classList.remove('light-theme');
    }
    refs.body.classList.add('dark-theme');
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
    if (refs.body.classList.contains('dark-theme')) {
      refs.body.classList.remove('dark-theme');
    }
    refs.body.classList.add('light-theme');
  }
}
