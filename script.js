const features = document.getElementById('features');
const arrowFeature = document.getElementById('arrow-features');
const menuFeature = document.getElementById('menu-features');

features.addEventListener('click', function () {
    menuFeature.classList.toggle('active');
    arrowFeature.classList.toggle('rotate');
})

const company = document.getElementById('company');
const arrowCompany = document.getElementById('arrow-company');
const menuCompany = document.getElementById('menu-company');
company.addEventListener('click', function () {
    menuCompany.classList.toggle('active');
    arrowCompany.classList.toggle('rotate');
})
