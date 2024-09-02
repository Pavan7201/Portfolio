document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const header = document.querySelector('header');

    function handleScroll() {
        if (window.scrollY > 750) { // Scroll position to apply gray background
            // body.classList.add('background-gray');
            body.classList.remove('background-dark');
            header.classList.remove('background-dark');
        } else if (window.scrollY > 400) { // Scroll position to apply dark background
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
