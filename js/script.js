$( document ).ready(function() {

});

$(window).on('scroll', function() {
    // $(window).scrollTop() > $('.main').offset().top ? 
    //     $('.fixed-form').addClass('show') : $('.fixed-form').removeClass('show');
});

/** ======================== User actions ========================== **/
// scrool top
$('.footer .banner__further span,.footer .further__arrow').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({ 
        scrollTop: 0,
    }, 300, 'swing');
})
// open menu
// $('.header__menu_open').on('click', function() {
//     $('.header__top').addClass('orange');
//     $('.header__menu').addClass('active');
//     if ($(window).width() < 1200) {
//         $('.header-container').addClass('fullfield');
//     } 
// });
// close menu
// $('.close-btn').on('click', function() {
//     $('.header__top').removeClass('orange');
//     $('.header__menu').removeClass('active');
//     if ($(window).width() < 1200) {
//         $('.header-container').removeClass('fullfield');
//     } 
// });

// click research control
$('.arrows__item').on('click', function() {
    changeSlide('research', this);
});
$('.research .point').on('click', function() {
    const num = $(this).data('num');
    changeSlide('research', false, num);
});

// click skills control
$('.arrows__item').on('click', function() {
    changeSlide('skills', this);
});


// card show full
$('.show-all').on('click', function() {
    $(this).parent().parent().toggleClass('full');
    $(this).toggleClass('hide');
});

// plus click
$('.question').on('click', function() {
    $(this).toggleClass('full');
    $(this).children('.question__title').children('.question__plus').toggleClass('active');
});
// point click 
$('.rait .point, .rait__card').on('click', function() {
    changeCart($(this).data('num'));
});
// mobile swipe card 
$('.rait__cards').swipe({
    swipeLeft: leftSwipe,
    swipeRight: rightSwipe,
    threshold: 10
});
/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/
// main change slide
function changeSlide(selector, current = false, currentNum = NaN) {
    var firtsSlide = $(`.${ selector }__slider_item:first-child`);
    var num = $(`.${ selector }__slider_item.active`).data('num');
    var lastNum = selector !== 'skills' ? $(`.${ selector }__slider_item.last`).data('num') : 4;
    $(`.${ selector }__slider_item`).each((i,el) => {
        $(el).removeClass('active');
        if (selector !== 'skills') {
            $(`.${ selector } .point:nth-child(${ i + 1 })`).removeClass('active');
        }
    });
    if (current != false) {
        if ($(current).hasClass('left')) {
            num = num === 1 ? lastNum : num - 1;
        } else {
            num = num === lastNum ? 1 : num + 1;
        }
    } else {
        num = currentNum;
    }
    var marginLeft = selector !== 'skills' ? 40 : 30;
    var left = firtsSlide.width() * (num - 1) + marginLeft * (num - 1);
    $(`.${ selector }__slider_item:nth-child(${ num })`).addClass('active');
    $(`.${ selector } .point:nth-child(${ num })`).addClass('active');
    $( firtsSlide ).animate({ marginLeft: `${ - left }px`}, 200);
    if (selector === 'skills') {
        num === 4 ? $('.arrows__item.right').addClass('hide') : $('.arrows__item.right').removeClass('hide');
        num === 1 ? $('.arrows__item.left').addClass('hide') : $('.arrows__item.left').removeClass('hide');
    }
    if (selector === 'research') {
        $(`.research .img`).each((i,el) => {
            $(el).removeClass('active');
        });
        $(`.research .img:nth-child(${ num })`).addClass('active');
    }
}
// card swipe
function leftSwipe() {
    var num = $('.rait__card.active').data('num');
    changeCart(num === 1 ? 3 : num - 1); 
}
function rightSwipe() {
    var num = $('.rait__card.active').data('num');
    changeCart(num === 3 ? 1 : num + 1);
}
function changeCart(num) {
    $(`.rait .point`).each((i,el) => {
        $(el).removeClass('active');
        $(`.rait__card:nth-child(${ i + 1 })`).removeClass('active');
        $(`.rait__card:nth-child(${ i + 1 })`).removeClass('pre-active');
        $(`.rait__card:nth-child(${ i + 1 })`).removeClass('last-active');
    });
    $(`.rait .point:nth-child(${ num })`).addClass('active');
    $(`.rait__card:nth-child(${ num })`).addClass('active');
    switch (num) {
        case 2:
            $(`.rait__card:nth-child(${ num + 1 })`).addClass('pre-active');
            $(`.rait__card:nth-child(${ num - 1 })`).addClass('last-active');
            break;
        case 3:
            $(`.rait__card:nth-child(${ num - 2 })`).addClass('pre-active');
            $(`.rait__card:nth-child(${ num - 1 })`).addClass('last-active');
            break;
        default:
            $(`.rait__card:nth-child(${ num + 1 })`).addClass('pre-active');
            $(`.rait__card:nth-child(${ num + 2 })`).addClass('last-active');
            break;
    }
}
/** ======================== END:Functions ========================== **/