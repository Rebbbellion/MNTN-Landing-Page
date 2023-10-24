import { bodyLockToggle } from './bodyLock';
import { menuInertToggle } from '../initialLoad/a11y';

function menuToggle() {
   bodyLockToggle();
   document.documentElement.classList.toggle('menu-open');
   menuInertToggle();
}

export { menuToggle };
