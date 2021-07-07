const $ = require('jquery');
require('slick-carousel');
const breakpoints = require('./settings');

$(function() {
    $('.team__slider').slick({
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: breakpoints.mobile,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
});