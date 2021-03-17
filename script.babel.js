window.addEventListener('load', start);

const nav = document.getElementById('nav');
const menuButton = document.getElementById('menu-button');
const menuText = document.getElementById('menu-text');

function start() {
  menuTypeSelector();
  window.addEventListener('resize', menuTypeSelector);
  menuButton.addEventListener('click', openMenu);
}
const menuTypeSelector = () => {
  const mobileWindow = window.matchMedia('(max-width: 1175px)').matches;
  if (mobileWindow) {
    menuButton.style.display = 'flex';
    nav.style.display = 'none';
    if (window.matchMedia('(min-width: 600px)').matches) {
      nav.style.width = '25%';
    }
    if (nav.className !== 'mobile') {
      nav.className = 'mobile';
    }
    nav.style.width = '100%';
  } else {
    menuButton.style.display = 'none';
    nav.className = 'desktop';
    nav.style.display = 'flex';
    nav.style.width = '70%';
  }
};

const openMenu = () => {
  if (window.matchMedia('(min-width: 600px)').matches) {
    nav.style.width = '25%';
  } else {
    nav.style.width = '100%';
    menuButton.style.zIndex = '2';
    menuButton.style.display = 'flex';
    menuText.style.color = '#fff';
  }
  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
};
