window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    var sectionNavBurger = document.getElementById('section-nav-burger');
    var sectionNavMenu = document.getElementById('section-nav-menu');

    if (sectionNavBurger && sectionNavMenu) {
        sectionNavBurger.addEventListener('click', function() {
            var isActive = sectionNavBurger.classList.toggle('is-active');
            sectionNavMenu.classList.toggle('is-active', isActive);
            sectionNavBurger.setAttribute('aria-expanded', String(isActive));
        });

        sectionNavMenu.querySelectorAll('a.navbar-item').forEach(function(link) {
            link.addEventListener('click', function() {
                sectionNavBurger.classList.remove('is-active');
                sectionNavMenu.classList.remove('is-active');
                sectionNavBurger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})
