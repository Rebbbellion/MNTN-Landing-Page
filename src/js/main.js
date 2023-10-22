import '../scss/style.scss';

const initialLoad = import.meta.glob('./initialLoad/*.js', { eager: true });

const dynamicLoad = import.meta.glob('./dynamicLoad/*.js');
//Listeners and Callbacks
document.addEventListener('click', clickCallback);

function clickCallback(e) {
   if (e.target.closest('.burger')) {
		dynamicLoad['./dynamicLoad/burger.js']().then(menuModule=>{
			menuModule.menuToggle()
		})
	}
}

