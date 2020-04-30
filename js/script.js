
// import Inputmask from 'inputmask';

window.onload = function() {
    document.querySelectorAll('.sort-item').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active'); 
        });
    });
    document.querySelectorAll('.drop').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        })
    });
    const daterange = document.querySelector('.daterange input');

    // var im = new Inputmask("31.12.2099 - 31.12.2099");
    // im.mask(daterange);
};

/** ======================== User actions ========================== **/
document.querySelector('.header__menu-btn').addEventListener('click', function () {
    document.querySelector('.main').classList.toggle('active');
});

/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/



/** ======================== END:Functions ========================== **/