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