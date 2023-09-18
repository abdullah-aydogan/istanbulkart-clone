$(document).ready(function() {

    let openBTN = $('header .header-top .search-box .open-search');
    let closeBTN = $('header .header-top .search-box .search-input div');
    let searchBox = $('header .header-top .search-box');
    let button_guncel = $('main .buttons-area .button_guncel');
    let button_gecmis = $('main .buttons-area .button_gecmis');
    let campaigns_guncel = $('main .guncel');
    let campaigns_gecmis = $('main .gecmis');

    $(openBTN).click(function() {

        $(searchBox).addClass('active');
    });

    $(closeBTN).click(function() {

        $(searchBox).removeClass('active');
    });

    $(campaigns_guncel).show();

    $(button_guncel).click(function() {

        $(campaigns_guncel).show();
        $(campaigns_gecmis).hide();

        $(button_guncel).css({"background-color" : "#383c52", "color" : "white"});
        $(button_gecmis).css({"background-color" : "white", "color" : "#acb6bd"});
    });

    $(button_gecmis).click(function() {

        $(campaigns_gecmis).show();
        $(campaigns_guncel).hide();

        $(button_gecmis).css({"background-color" : "#383c52", "color" : "white"});
        $(button_guncel).css({"background-color" : "white", "color" : "#acb6bd"});
    });

    let mobileMenuOpen = $('header .open-mobile');
    let mobileMenuClose = $('.mobile-menu .close-btn');
    let mobileMenu = $('.mobile-menu');

    $(mobileMenuOpen).click(function() {

        $(mobileMenu).addClass('active');
    });

    $(mobileMenuClose).click(function() {

        $(mobileMenu).removeClass('active');
    });

    $('.hero-section .slider-area').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });

    $('.campaigns .slider-area').owlCarousel({
        loop: false,
        margin: 30,
        dots: true,
        dotsEach: 1,
        nav: false,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 1
            },

            1000: {
                items: 4
            }
        }
    });

    function postsCarousel() {

        var checkWidth = $(window).width();
        var owlPost = $('.announcement .slider-section');

        if (checkWidth < 992) {

          if (typeof owlPost.data('owl.carousel') != 'undefined') {

            owlPost.data('owl.carousel').destroy();
          }

          owlPost.removeClass('owl-carousel');
        } 
        
        else if (checkWidth > 991) {

            $(owlPost).addClass('owl-carousel');

            $(owlPost).owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },

                    600: {
                        items: 1
                    },
                    
                    1000: {
                        items: 1
                    }
                }
            });

            $(".announcement .slider-section .owl-prev").html('<i class="fa fa-chevron-left"></i>');
            $(".announcement .slider-section .owl-next").html('<i class="fa fa-chevron-right"></i>');
        }
      }
      
      postsCarousel();
      $(window).resize(postsCarousel);
});