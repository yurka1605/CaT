const popover = document.querySelector('.popover');
const drops = document.querySelectorAll('.drop');

window.onload = function() {
    drops.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
};

/** ======================== User actions ========================== **/
document.querySelector('.header__menu-btn').addEventListener('click', function () {
    document.querySelector('.main').classList.toggle('active');
});
document.querySelectorAll('.slider__control').forEach(item => {
    item.addEventListener('click', function () {
        const length = this.parentElement.previousElementSibling.children.length;
        const currentActive = Array.from(this.parentElement.previousElementSibling.children)
            .filter(el => el.classList.contains('active'))[0];
        let numCurrent = parseInt(currentActive.dataset.num, 10);
        currentActive.classList.remove('active');
        const isRight = this.classList.contains('right');
        if (isRight) {
            numCurrent = numCurrent === length ? 1 : numCurrent + 1;
        } else {
            numCurrent = numCurrent === 1 ? length : numCurrent - 1;
        }
        changeSlide(numCurrent);
    });
});

document.querySelectorAll('.slide-min').forEach(item => {
    item.addEventListener('click', function () {
        const num = this.dataset.num;
        document.querySelector('.slide.active').classList.remove('active');
        changeSlide(parseInt(num, 10));
    })
});

/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/
function changeSlide(num) {
    const width = document.querySelector('.slide').offsetWidth;
    const slider = document.querySelector('.sliders');
    const style = `transform: translateX(-${ (num - 1) * width }px)`;
    slider.style.cssText = style;
    slider.children[num - 1].classList.add('active');
}

/** ======================== END:Functions ========================== **/