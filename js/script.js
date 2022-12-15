function initTab() {
	const tabMenu = document.querySelectorAll('.js-tabmenu li')
	const tabContent = document.querySelectorAll('.js-tabcontent section')
	tabContent[0].classList.add('ativo');
	
	if(tabContent.length && tabMenu.length) {
	 
		function activeTab(index) {
			tabContent.forEach((item) => {
				item.classList.remove('ativo')
			});
			tabMenu.forEach((item) => {
				item.classList.remove('ativo')
			});
			tabContent[index].classList.add('ativo')
			tabMenu[index].classList.add('ativo')
		}
	
		tabMenu.forEach((item, index) => {
			item.addEventListener('click', () => { 
				activeTab(index) 
			})
		})
	}
}

initTab();


function initScroll() {
	const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

	function scrollToSection(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const section = document.querySelector(href);
		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	}
	linksInternos.forEach((link) => {
		link.addEventListener('click', scrollToSection)
	})
}

initScroll();



if (window.SimpleSlide) {

	new SimpleSlide({
		slide: "quote",
		time: 2200
	});
}

