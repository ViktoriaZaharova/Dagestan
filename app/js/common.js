$('.reviews-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1360,
            settings: {
                centerMode: true
            }
        }
    ]
});