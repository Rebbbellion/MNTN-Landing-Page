//Burger
const menuMediaQuery = matchMedia('(max-width:61.9988em)');
const menuButton = document.querySelector('.burger');
const navigationBody = document.querySelector('.navigation__body');
const mainElem = document.querySelector('main');
const footerElem = document.querySelector('footer');

function menuInertToggle() {
   if (menuMediaQuery.matches) {
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
   } else {
      navigationBody.inert = false;
      mainElem.inert = false;
      footerElem.inert = false;
      menuButton.setAttribute('aria-pressed', false);
   }
}
function navigationMove() {
   if (menuMediaQuery.matches) {
      navigationBody.parentElement.append(navigationBody);
   } else {
      navigationBody.parentElement.prepend(navigationBody);
   }
}

menuMediaQuery.addEventListener('change', () => {
   navigationMove();
   menuInertToggle();
});

export { menuInertToggle, menuMediaQuery };
