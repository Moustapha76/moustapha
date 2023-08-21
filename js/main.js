window.addEventListener('scroll', function(e) {
    var navbar = document.querySelector('nav')
    if (this.scrollY > 0) { navbar.classList.add('fixed') } else { navbar.classList.remove('fixed') }
})