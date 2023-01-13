$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        autoHeight: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        loop: true,
        navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ]
    });

    $("#owl-demo2").owlCarousel({
        nav: false,
        dots: false,
        margin: 50,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        loop: true,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });
})


// STICKY HEADER :-
let scrollpos = window.scrollY;
const header = document.querySelector(".navbar");
const header_height = header.offsetHeight;

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos >= header_height + 500) {
        console.log(header_height);
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
})

// SCROLL TO TOP 
$(window).scroll(function (e) {
    if ($(this).scrollTop() > 0) {
        $(".to-top").css("display", "block");
    } else {
        $(".to-top").css("display", "none");
    }
});

// Patients owl-Carousel :-
$(document).ready(function () {

    if ($('.client-owl-carousel').length && $('.thumb-owl-carousel').length) {

        var $sync3 = $(".client-owl-carousel"),
            $sync4 = $(".thumb-owl-carousel"),
            flag = false,
            duration = 500;


        $sync3.owlCarousel({
                dots: false,
                nav: true,
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                loop: true,
                navText: [
                    '<i class="fa-solid fa-chevron-left"></i>',
                    '<i class="fa-solid fa-chevron-right"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        nav: false
                    },
                    992: {
                        nav: true
                    }
                }
            })

            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = false;
                    $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });


        $sync4.owlCarousel({
                dots: false,
                nav: false,
                items: 3,
                margin: 20,
                center: true,
                autoWidth: false,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                loop: true,
                navText: [
                    '<i class="fa-solid fa-chevron-left"></i>',
                    '<i class="fa-solid fa-chevron-right"></i>'
                ]
            })

            .on('click', '.owl-item', function () {
                $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })

            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    }
})