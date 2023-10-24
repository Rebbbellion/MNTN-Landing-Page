import '../scss/style.scss';
import {
   menuInertToggle,
   menuMediaQuery,
   navigationMove,
} from './initialLoad/a11y';

const initialLoad = import.meta.glob('./initialLoad/*.js', { eager: true });

const dynamicLoad = import.meta.glob('./dynamicLoad/*.js');

//Listeners and Callbacks
document.addEventListener('click', clickCallback);

menuMediaQuery.addEventListener('change', () => {
   menuInertToggle();
   navigationMove();
   if (document.documentElement.classList.contains('menu-open')) {
      dynamicLoad['./dynamicLoad/burger.js']().then((menuModule) => {
         menuModule.menuToggle();
      });
   }
});

function clickCallback(e) {
   if (e.target.closest('.burger')) {
      dynamicLoad['./dynamicLoad/burger.js']().then((menuModule) => {
         menuModule.menuToggle();
      });
   }
}
