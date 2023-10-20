import { bodyLockToggle } from './bodyLock';
import { menuInertToggle } from '../initialLoad/a11y';

const menuMediaQuery = matchMedia('(max-width:48em)');

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
