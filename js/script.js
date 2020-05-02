const popover = document.querySelector('.popover');
const drops = document.querySelectorAll('.drop');
const cityesOutTemplate = teplateConstructor(cityesOut, 'city');
const countryTemplate = teplateConstructor(country, 'country');
const roadTimeTemplate = teplateConstructor(roadTime, 'road-time');
const stateAmountTemplate = teplateConstructor(stateAmount, 'road-count');
const cityPullTemplate = teplateConstructor(pullCity, 'pull-city');
const nightMin = teplateConstructor(night, 'night-min');
const nightMax = teplateConstructor(night, 'night-max');
const types = teplateConstructor(typeTravel, 'types-travel');

window.onload = function() {
    document.querySelectorAll('.sort-item').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('active'); 
        });
    });
    drops.forEach(item => {
        if (!item.classList.contains('thour__drop')) {
            item.addEventListener('click', toggleOptions.bind(item));
        }
    });
    document.querySelectorAll('.control input').forEach(item => {
        item.addEventListener('input', oninputSelect.bind(item));
    });

    document.querySelectorAll('.form-counter').forEach(item => {
        const min = item.classList.contains('child') ? 0 : 1;
        let counter, value;
        item.firstElementChild.addEventListener('click', function () {
            counter = this.nextElementSibling;
            value = parseInt(counter.innerHTML, 10);
            if (value !== min) {
                counter.innerHTML = value - 1;
            }
        });
        item.lastElementChild.addEventListener('click', function () {
            counter = this.previousElementSibling;
            value = parseInt(counter.innerHTML, 10);
            if (value !== 6) {
                counter.innerHTML = value + 1;
            }
        });
    });

    document.querySelectorAll('.item__toogle-thoours-btn').forEach(el => {
        el.addEventListener('click', function () {
            const thours = this.parentElement.parentElement.parentElement.nextElementSibling;
            thours.classList.toggle('active');
            this.lastElementChild.classList.toggle('active');
        })
    });
    // const daterange = document.querySelector('.daterange input');
    // daterange.addEventListener('input', function (e) {
    //     console.log(e);
    //     const regexp = new RegExp('([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))');
    //     if (regexp.test(this.value)) {

    //     }
    // });
};

/** ======================== User actions ========================== **/
document.querySelector('.header__menu-btn').addEventListener('click', function () {
    document.querySelector('.main').classList.toggle('active');
});

/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/
const toggleOptions = function () {
    const currentActive = this.classList.contains('active');
    const drop = this.dataset.drop;
    drops.forEach(el => el.classList.remove('active'));
    popover.className.split(/\s+/).forEach(name => {
        if (name !== 'popover') {
            popover.classList.remove(name);
        }
    });
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
    const top = This.parentElement.offsetTop;
    const popoverStyles = `top: ${ top }px; left: ${ rect.left - 1 }px; width: ${ rect.width + 2 }px;`;
    popover.style.cssText = popoverStyles;
    popover.classList.add('active');
    let template;
    switch (className) {
        case 'city':
            template = cityesOutTemplate;
            break;
        case 'country':
            template = countryTemplate;
            break;
        case 'road-time':
            template = roadTimeTemplate;
            break;
        case 'road-count':
            template = stateAmountTemplate;
            break;
        case 'pull-city':
            template = cityPullTemplate;
            break;
        case 'night-min':
            template = nightMin;
            break;
        case 'night-max':
            template = nightMax;
            break;
        case 'types-travel':
            template = types;
            break;
        default:
            break;
    }
    addlist(template, className);
}

function closePopover(This) {
    This.classList.remove('active');
}

function addlist(template, className) {
    const list = document.createElement('ul');
    list.classList.add('popover__list', `popover-list__${ className }`);
    list.innerHTML = template;
    popover.innerHTML = '';
    popover.appendChild(list);

    const items = document.querySelectorAll(`.popover__item-${ className }`);
    let control;
    if (className === 'road-time' || className === 'road-count' || className === 'night-min' || className === 'night-max') {
        control = document.querySelector(`div.${ className }`);
    } else {
        control = document.querySelector(`input.${ className }`);
    }
    items.forEach(el => {
        el.addEventListener('click', function () {
            if (className === 'road-time' || className === 'road-count'
                || className === 'night-min' || className === 'night-max') {
                control.innerHTML = this.innerHTML;
            } else {
                control.value = this.innerHTML;
            }
            control.parentElement.children[1].classList.remove('active');
            popover.classList.remove('active', className);
            popover.innerHTML = '';
        });
    });
}

function teplateConstructor (items, className) {
    let template = '';
    if (items.length) {
        items.forEach(item => {
            template += `<li class="popover__item popover__item-${ className }">${ item }</li>`;
        });
    } else {
        template = 'ничего не найдено';
    }

    return template;
}

const oninputSelect = function () {
    const dropControl = this.parentElement.children[1];
    dropControl.classList.add('active');
    drops.forEach(el => el.classList.remove('active'));
    popover.className.split(/\s+/).forEach(name => {
        if (name !== 'popover') {
            popover.classList.remove(name);
        }
    });

    const className = dropControl.dataset.drop;
    const rect = this.parentElement.getBoundingClientRect();
    const top = this.parentElement.offsetTop;
    const popoverStyles = `top: ${ top }px; left: ${ rect.left - 1 }px; width: ${ rect.width + 2 }px;`;
    popover.style.cssText = popoverStyles;
    popover.classList.add('active', className);

    let arr;
    switch (className) {
        case 'city':
            arr = cityesOut;
            break;
        case 'country':
            arr = country;
            break;
        case 'pull-city':
            arr = pullCity;
            break;
        case 'types-travel':
            arr = typeTravel;
            break;
        default:
            break;
    }
    const regexp = new RegExp(this.value, 'i');
    arr = arr.filter(item => regexp.test(item));
    const template = teplateConstructor(arr, className);
    addlist(template, className);
}

/** ======================== END:Functions ========================== **/