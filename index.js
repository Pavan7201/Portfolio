function logo() {
    window.location.reload();
}

const mainElement = document.querySelector('main');
const headerElement = document.querySelector('header');
const scrollApply = 600;
const scrollRemove = 1600;
const scrollApplyAgain = 2500;
const scrollRemoveAgain = 8400;

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    mainElement.classList.remove('main-background-change', 'main-background-revert');
    if (scrollPosition >= scrollRemoveAgain) {
        mainElement.classList.add('main-background-revert');
    } else if (scrollPosition >= scrollApplyAgain) {
        mainElement.classList.add('main-background-change');
    } else if (scrollPosition >= scrollRemove) {
        mainElement.classList.add('main-background-revert');
    } else if (scrollPosition >= scrollApply) {
        mainElement.classList.add('main-background-change');
    }

    headerElement.classList.remove('header-background-change', 'header-background-revert');
    if (scrollPosition >= scrollRemoveAgain) {
        headerElement.classList.add('header-background-revert');
    } else if (scrollPosition >= scrollApplyAgain) {
        headerElement.classList.add('header-background-change');
    } else if (scrollPosition >= scrollRemove) {
        headerElement.classList.add('header-background-revert');
    } else if (scrollPosition >= scrollApply) {
        headerElement.classList.add('header-background-change');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.header-right a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
function GoToContact() {
    const contentElement = document.getElementById('contact');
    contentElement.scrollIntoView({behavior: 'smooth'});
}
function scrollToContent() {
    const contentElement = document.getElementById('body');
    contentElement.scrollIntoView({ behavior: 'smooth' });
}

