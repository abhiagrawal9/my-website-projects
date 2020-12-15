// const banner = document.getElementById('banner');

const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sidenav');
const menu = document.getElementById('menu');
sideNav.style.right = '-250px';

menuBtn.addEventListener('click', () => {
  if (sideNav.style.right == '-250px') {
    sideNav.style.right = 0;
    menu.src = './images/close.png';
  } else {
    menu.src = './images/menu.png';
    sideNav.style.right = '-250px';
  }
});

// banner.addEventListener('click', () => {
//   sideNav.style.right = '-250px';
// });
