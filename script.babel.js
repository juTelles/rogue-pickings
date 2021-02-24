const topMenu = () => {
  const navMobile = document.getElementById("mobile");
  const menuButton = document.getElementById("menu-button");
  const mobileWindow = window.matchMedia("(max-width: 1175px)").matches
  const navMobileDisplay = navMobile.style.display
  const menuText = document.getElementById("menu-text");


  if (mobileWindow && (navMobileDisplay === 'none' || navMobileDisplay === '')) {
    navMobile.style.display = "flex";
    menuButton.style.backgroundColor = "#77a466"
    menuText.style.backgroundColor = "#77a466"
    menuText.style.color = "#fff"
  } else {
    navMobile.style.display ="none";
    menuButton.style.backgroundColor = "#fff"
    menuText.style.backgroundColor = "#fff"
    menuText.style.color = "#77a466"
  }
};
