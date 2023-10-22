import { bodyLockToggle } from './bodyLock';
import { menuInertToggle, menuMediaQuery } from '../initialLoad/a11y';

function menuToggle() {
   bodyLockToggle();
   document.documentElement.classList.toggle('menu-open');
   menuInertToggle();
}

menuMediaQuery.onchange = () => {
   if (document.documentElement.classList.contains('menu-open')) {
      menuToggle();
   }
};

export { menuToggle };
