$(document).ready(function() {

    let openBTN = $('header .header-top .search-box .open-search');
    let closeBTN = $('header .header-top .search-box .search-input div');
    let searchBox = $('header .header-top .search-box');

    $(openBTN).click(function() {

        $(searchBox).addClass('active');
    });

    $(closeBTN).click(function() {

        $(searchBox).removeClass('active');
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
});