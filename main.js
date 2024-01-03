'use strict';

// make navbar trasparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
const languagesMenu = document.querySelector('.languages');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null ){
    return;
  }
  navbarMenu.classList.remove('open');
  languagesMenu.classList.remove('open');
  scrollIntoView(link);
});

// handle scrolling when tab & enter key pressed on the navbar menu
navbarMenu.addEventListener('keydown', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null ){
    return;
  }
  navbarMenu.classList.remove('open');
  languagesMenu.classList.remove('open');
  scrollIntoView(link);
});


// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
  languagesMenu.classList.toggle('open');
});

// handle click on " contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact')
});

// make home slowly fade to trasparent as the window scrolls down

 /*   1 - 0 / 800    = 1
      1 - 400 / 800 = 0.5
      1 - 800 / 800 = 0
      1 - 1600/ 800 = -1
  */

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// show "arrow up" button when scrolling up
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // remove selection from the precious item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anime-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if(filter === '*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anime-out');
  },300);
});


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

function target(){
  const target = e.target;
  const link = target.dataset.link;
  if (link == null ){
    return;
  }
  navbarMenu.classList.remove('open');
  languagesMenu.classList.remove('open');
}