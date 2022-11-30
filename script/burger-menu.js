const iconMenu = document.querySelector('.header__menu_icon');
const menu = document.querySelector('.header__nav');
const title = document.querySelector('.welcome__title_container');

if(iconMenu) {
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('header__nav_active');
    menu.classList.toggle('header__nav_active');
    title.classList.toggle('opacity');
  });
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      if(iconMenu.classList.contains('header__nav_active')) {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('header__nav_active');
        menu.classList.remove('header__nav_active');
        title.classList.remove('opacity');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });

      e.preventDefault();
    }
  }
}
