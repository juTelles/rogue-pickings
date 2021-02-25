window.addEventListener('load', start);

const navMobile = document.getElementById('mobile-nav');
const menuButton = document.getElementById('menu-button');

function start() {
  navMobile.addEventListener('click', navMenuFuncionality);
  menuButton.addEventListener('click', navMenuFuncionality);
}

const navMenuFuncionality = () => {
  const mobileWindow = window.matchMedia('(max-width: 1175px)').matches;
  const menuText = document.getElementById('menu-text');
  const navMobileDisplay = navMobile.style.display;

  if (
    mobileWindow &&
    (navMobileDisplay === 'none' || navMobileDisplay === '')
  ) {
    navMobile.style.display = 'flex';
    menuButton.style.backgroundColor = '#77a466';
    menuText.style.backgroundColor = '#77a466';
    menuText.style.color = '#fff';
  } else {
    navMobile.style.display = 'none';
    menuButton.style.backgroundColor = '#fff';
    menuText.style.backgroundColor = '#fff';
    menuText.style.color = '#77a466';
  }
};
