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

document.querySelector('body').addEventListener('click', function (e) {
    const target = e.target;
    const arr_bool = [];
    arr_bool.push(target == popover || popover.contains(target));
    drops.forEach(drop => {
        arr_bool.push(target == drop.parentElement);
        arr_bool.push(target == drop);
        arr_bool.push(target == drop.previousElementSibling);
        arr_bool.push(target == drop.children[0]);
    });
    const isClose = arr_bool.filter(el => el).length === 0;
    if (isClose) {
        popover.className.split(' ').forEach(name => {
            if (name !== 'popover') {
                popover.classList.remove(name);
            }
        });
        drops.forEach(drop => drop.classList.remove('active'))
    }
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