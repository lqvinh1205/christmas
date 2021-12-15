let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menuhBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.scroll = () => {
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menuhBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let menuhBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
menuhBtn.onclick = () => {
    menuhBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
}


let slides = document.querySelectorAll('.home .slide');
let index = 0;
function next() {
    slides[index].classList.remove('slide-active');
    index = (index + 1) % slides.length;
    console.log(index);
    slides[index].classList.add('slide-active')
}
function prev() {
    slides[index].classList.remove('slide-active');
    index = (index - 1 + slides.length) % slides.length;
    console.log(index);
    slides[index].classList.add('slide-active')
}