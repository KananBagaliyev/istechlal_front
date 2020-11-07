$(document).ready(function(){
    $('.about_img_slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        singleItem: true,
        nav: false,
        dots: true,
        animateOut: 'fadeOut',
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 2,
            },
            992:{
                items: 1,
            }
        }
    });
    
    
    $('.project_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 2,
            },
            1000:{
                items: 4,
            }
        }
    });
    

    console.log(window.scrollY )
    window.addEventListener("scroll",function(){
        var header = document.querySelector("header")
        header.classList.toggle("sticky",window.scrollY>0)
      })
    

    $(".menu_btn").click(function(){
        $(this).toggleClass('animate');
        $(".mobile_navigation_bar").stop(true,true).slideToggle();
    })

    
    
    
})