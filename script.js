window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('white-background');
    } else {
        header.classList.remove('white-background');
    }
});