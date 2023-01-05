$(document).ready(function() {
    
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     dots: true,
    //     autoPlay: true,
    //     autoplayTimeout: 1000,
    //     navText:[
    //         '<i class="fa-solid fa-less-than"></i>',
    //         '<i class="fa-solid fa-greater-than"></i>'
    //     ],
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //         }
    //     }
    // })


    
    $("#owl-demo").owlCarousel({
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        items : 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        loop: true,
        navText:[
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ]
    });

    $("#owl-demo2").owlCarousel({
        nav: false,
        dots: false,
        margin: 50,
        items : 1,
        autoplay:true,
        autoplayTimeout:7000,
        autoplayHoverPause:false,
        loop: true,
       
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5,
            }
        }
    });

    $("#owl-demo3").owlCarousel({
        
        dots: false,
        items : 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        loop: true,
        navText:[
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        responsiveClass:true,
        responsive:{
            0:{
                nav:false
            },
            992:{     
                nav:true
            }
        }
    });

})


let scrollpos = window.scrollY;
	const header = document.querySelector(".navbar");
	const header_height = header.offsetHeight;

	window.addEventListener('scroll', function () {
		scrollpos = window.scrollY;
		if (scrollpos >= header_height + 800) {
			console.log(header_height);
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	})



    