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
        autoplayTimeout: 7000,
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

    $("#owl-demo3").owlCarousel({

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
    });

    $("#owl-demo4").owlCarousel({
        dots: false,
        items: 3,
        margin: 20,
        center: true,
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
                nav: false
            }
        }
    })

    // .on('click', '.owl-item', function () {
    //     $('#owl-demo3').trigger('to.owl.carousel', [$(this).index(), duration, true]);
    // })

})

// $(document).on('click', 'second-slider.owl-item', function() {
//     owlIndex = $(this).index();
//     count = document.querySelectorAll(".owl-item.active").length;
//     $('.first-slider').trigger('to.owl.carousel', owlIndex - count + 1);
//   });


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



// SCROLL TO TOP :-
// const toTop = document.querySelector('.to-top');

// window.addEventListener('sccroll', () => {
//     if (window.pageYOffset > 100) {
//         toTop.classList.add('active');
//     } else {
//         toTop.classList.remove('active');
//     }
// })    

$(window).scroll(function (e) {
    if ($(this).scrollTop() > 0) {
        $(".to-top").css("display", "block");
    } else {
        $(".to-top").css("display", "none");
    }
});

