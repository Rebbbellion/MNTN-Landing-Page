//Burger
const menuButton = document.querySelector('.burger');
const navigationBody = document.querySelector('.navigation__body');
const mainElem = document.querySelector('main');
const footerElem = document.querySelector('footer');

function menuInertToggle() {
   if (document.documentElement.classList.contains('menu-open')) {
      menuButton.setAttribute('aria-pressed', true);
      navigationBody.inert = false;
      mainElem.inert = true;
      footerElem.inert = true;
   } else {
      navigationBody.inert = true;
      mainElem.inert = false;
      footerElem.inert = false;
      menuButton.setAttribute('aria-pressed', false);
   }
}

export { menuInertToggle };
