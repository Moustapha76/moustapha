window.addEventListener('scroll', function(e) {
    var navbar = document.querySelector('nav')
    if (this.scrollY > 0) { navbar.classList.add('fixed') } else { navbar.classList.remove('fixed') }
})

$(function() {
    var filterList = {
        init: function() {
            // MixItUp plugin
            // http://mixitup.io
            $('.item-grid').mixItUp({
                selectors: {
                    target: '.item',
                    filter: '.filter'
                },
                load: {
                    filter: 'all' // show app tab on first load
                }
            });
        }
    };
    // Run the show!
    filterList.init();
});