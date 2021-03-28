//WAYPOINT
let waypoint = new Waypoint({
    element: document.getElementById('point'),
    handler: function(direction) {
  
      let header = document.querySelector('header');
  
      if (direction === 'down') {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }
});
// BURGER
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');

const burgerMenu = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('transform');
}

burger.addEventListener('click', burgerMenu);

const clickClose = document.querySelectorAll('.header--js');

for(let i = 0; i < clickClose.length; i++) {
  clickClose[i].addEventListener('click', () =>{
    menu.classList.remove('active');
    burger.classList.remove('active');
  })
}