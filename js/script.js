const popover = document.querySelector('.popover');
const drops = document.querySelectorAll('.drop');
const cityesOutTemplate = this.teplateConstructor(cityesOut, 'city');

window.onload = function() {
    document.querySelectorAll('.sort-item').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active'); 
        });
    });
    drops.forEach(item => {
        item.addEventListener('click', toggleOptions);
    });

    // const daterange = document.querySelector('.daterange input');

    // var im = new Inputmask("31.12.2099 - 31.12.2099");
    // im.mask(daterange);
};

/** ======================== User actions ========================== **/
document.querySelector('.header__menu-btn').addEventListener('click', function () {
    document.querySelector('.main').classList.toggle('active');
});

/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/
function toggleOptions() {
    const currentActive = this.classList.contains('active');
    const drop = this.dataset.drop;
    drops.forEach(el => el.classList.remove('active'));
    popover.classList.remove(drop);
    popover.classList.remove('active');
    popover.style.cssText = '';

    if (currentActive) {
        closePopover(this);
    } else {
        showPopover(this, drop);
    }
}

function showPopover(This, className) {
    This.classList.add('active');
    popover.classList.add(className);
    const rect = This.parentElement.getBoundingClientRect();
    const popoverStyles = `top: ${ rect.top + rect.height - 4 }px; left: ${ rect.left }px; width: ${ rect.width }px;`;
    popover.style.cssText = popoverStyles;
    popover.classList.add('active');
    let template;
    switch (className) {
        case 'city':
            template = cityesOutTemplate;
            break;
        // case 'city':
        //         template = this.teplateConstructor(cityesOut, className);
        //     break;
        default:
            break;
    }
    console.log(template);
}

function closePopover(This) {
    This.classList.remove('active');
}

function addlist() {
    
}

function teplateConstructor (items, className) {
    let template = '';
    items.forEach(item => {
        template += `<li class="popover__item-${ className }">${ item }</li>`;
    });

    return template;
}

/** ======================== END:Functions ========================== **/