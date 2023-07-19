$(document).ready(function() {
    $('.card-item').slick({
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: false,
        nextArrow: false,
    });
    $('.companies-slider').slick({
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        prevArrow: false,
        nextArrow: false,
    });
    $('.customer-slider').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll:1,
        prevArrow: false,
        nextArrow: false,
    });
})