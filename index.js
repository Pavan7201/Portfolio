function logo() {
    window.location.reload();
}

// left animation on scroll
function handleScrollAnimation() {
    const targets = document.querySelectorAll('.hidden');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove the 'hidden' class to make the element visible
                
                // Apply the appropriate animation class based on the element's class
                if (entry.target.classList.contains('left-animated')) {
                    entry.target.classList.add('animate-left');
                } else if (entry.target.classList.contains('bottom-animated')) {
                    entry.target.classList.add('animate-bottom');
                }  else if (entry.target.classList.contains('right-animated')) {
                    entry.target.classList.add('animate-right');
                }  else if (entry.target.classList.contains('top-animated')) {
                    entry.target.classList.add('animate-top');
                }
                entry.target.classList.remove('hidden');
                // Stop observing this element once the animation is triggered
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5
    });

    targets.forEach(target => {
        observer.observe(target);
    });
}

document.addEventListener('DOMContentLoaded', handleScrollAnimation);


const mainElement = document.querySelector('main');
const headerElement = document.querySelector('header');
const scrollApply = 600;
const scrollRemove = 1800;
const scrollApplyAgain = 2550;
const scrollRemoveAgain = 8600;

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

document.getElementById('myForm').addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    if (!nameInput.value.trim()) {
        nameError.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        nameError.style.display = 'none'; 
    }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name');
    var properName = document.getElementById('properName');
    var nameValue = nameInput.value.trim();

    
    if (nameValue.length < 4) {
        properName.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        nameError.style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    var nameError = document.getElementById('mailError');
    if (this.value.trim()) {
        nameError.style.display = 'none';
    } else {
        nameError.style.display = 'block';
    }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('email');
    var mailError = document.getElementById('mailError');
    var emailValue = emailInput.value.trim();

    if (!emailValue.includes('@gmail.com')) {
        mailError.style.display = 'block'; 
        event.preventDefault(); 
    } else {
        mailError.style.display = 'none'; 
    }
});
