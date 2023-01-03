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

})


let scrollpos = window.scrollY;
	const header = document.querySelector(".navbar");
	const header_height = header.offsetHeight;

	window.addEventListener('scroll', function () {
		scrollpos = window.scrollY;
		if (scrollpos >= header_height + 100) {
			console.log(header_height);
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	})



    