const features = document.getElementById('features');
const arrowFeature = document.getElementById('arrow-features');
const menuFeature = document.getElementById('menu-features');
const company = document.getElementById('company');
const arrowCompany = document.getElementById('arrow-company');
const menuCompany = document.getElementById('menu-company');
const menuClose = document.getElementById('menu-close');
const menuMobile = document.getElementById('menu-mobile');
const navMobile = document.getElementById('nav-mobile');
features.addEventListener('click', function () {
    menuFeature.classList.toggle('active');
    arrowFeature.classList.toggle('rotate');
})


company.addEventListener('click', function () {
    menuCompany.classList.toggle('active');
    arrowCompany.classList.toggle('rotate');
})

menuClose.addEventListener('click', function () {
    navMobile.classList.remove('active');
})

menuMobile.addEventListener('click', function () {
    navMobile.classList.add('active');
})