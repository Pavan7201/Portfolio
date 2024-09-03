document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const header = document.querySelector('header');

    function handleScroll() {
        if (window.scrollY > 750) {
            body.classList.add('background-gray');
            body.classList.remove('background-dark');
            header.classList.remove('background-dark');
        } else if (window.scrollY > 400) {
            body.classList.add('background-dark');
            body.classList.remove('background-gray');
            header.classList.add('background-dark');
        } else {
            body.classList.remove('background-dark');
            body.classList.remove('background-gray');
            header.classList.remove('background-dark');
        }
    }

    window.addEventListener('scroll', handleScroll);
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

function logo() {
    window.location.reload();
}

function GoToContact() {
    const contentElement = document.getElementById('contact');
    contentElement.scrollIntoView({behavior: 'smooth'});
}

function scrollToContent() {
    const contentElement = document.getElementById('body');
    contentElement.scrollIntoView({ behavior: 'smooth' });
}
