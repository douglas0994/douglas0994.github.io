function initTab() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add('ativo');
  
  if(tabContent.length && tabMenu.length) {
   
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove('ativo')
      });
      tabContent[index].classList.add('ativo')
    }
  
    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => { 
        activeTab(index) 
      })
    })
   }
  }
  initTab();



function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener('click', scrollToSection)
  })
}

initScrollSuave();


function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < windowMetade) {
          section.classList.add('ativo')
        }
      })  
    }
    window.addEventListener('scroll', animaScroll)
  }
  animaScroll();
}

initAnimacaoScroll();
