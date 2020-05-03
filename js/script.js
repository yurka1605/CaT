const sortVariants = {
    AZ: 'AZ',
    LIKE: 'like',
}

window.onload = function() {
    countSliderPointPosition();
    document.querySelector('input.rangeslider').addEventListener('change', countSliderPointPosition);
    document.querySelectorAll('.sort-item').forEach(item => {
        if (!item.classList.contains('country-sort')) {
            sortLists(item);
        }
        item.addEventListener('click', function () {
            this.classList.toggle('active');
            if (this.classList.contains('country-sort')) {
                return;
            }
            sortLists(this);
        });
    });
    drops.forEach(item => {
        if (!item.classList.contains('thour__drop') && !item.classList.contains('push__drop')) {
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
            this.classList.toggle('active');
            const thours = this.parentElement.parentElement.parentElement.nextElementSibling;
            thours.classList.toggle('active');
            this.lastElementChild.classList.toggle('active');
        })
    });

    document.querySelector('.header__btn').addEventListener('click', function () {
        document.querySelector('body').classList.add('popup-active');
        popup.classList.add('task-popup');
    });
    document.querySelector('.popup__close-btn').addEventListener('click', closePopup);
    document.querySelector('.bg-popup').addEventListener('click', closePopup);
    document.querySelector('.push').addEventListener('click', function () {
        drops.forEach(el => {
            if (el !==  this.children[1]) {
                el.classList.remove('active');
            }
        });
        this.children[1].classList.toggle('active');
        const isOpen = popover.classList.contains('push');
        popover.className.split(' ').forEach(name => {
            if (name !== 'popover') {
                popover.classList.remove(name);
            }
        });
        if (isOpen) {
            return;
        }

        getPush(this.children[1]);
    });
    document.querySelectorAll('input[type="checkbox"]').forEach(node => {
        node.addEventListener('click', function () {
            const name = this.getAttribute('name');
            if (this.value === 'all') {
                const selectors = document.querySelectorAll(`input[name=${ name }]`);
                selectors.forEach(node => {
                    if (node.value !== 'all') {
                        node.checked = false;
                    }
                });
            } else if (this.checked) {
                deleteCheckedAll(name);
            } else {
                checkAllChecked(name);
            }  
        });
    });
};

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
        drops.forEach(drop => {
            if (!drop.classList.contains('thour__drop')) {
                drop.classList.remove('active');
            }
        });
    }
});

/** ======================== User actions ========================== **/
document.querySelector('.header__menu-btn').addEventListener('click', function () {
    document.querySelector('.main').classList.toggle('active');
});

/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/
function closePopup () {
    document.querySelector('body').classList.remove('popup-active');
    popup.classList.remove('task-popup'); 
}

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
    const popoverStyles = `top: ${ top }px; left: ${ rect.left }px; width: ${ rect.width }px;`;
    popover.style.cssText = popoverStyles;
    popover.classList.add('active');
    let arr;
    switch (className) {
        case 'city':
            arr = cityesOut;
            break;
        case 'country':
            arr = country;
            break;
        case 'road-time':
            arr = roadTime;
            break;
        case 'road-count':
            arr = stateAmount;
            break;
        case 'pull-city':
            arr = pullCity;
            break;
        case 'night-min':
            arr = night;
            break;
        case 'night-max':
            arr = night;
            break;
        case 'types-travel':
            arr = typeTravel;
            break;
        case 'user':
            arr = ctxMenu;
            break;
        default:
            break;
    }
    if (className === 'country') {
        const isSortActive = document.querySelector('.country-sort').classList.contains('active');
        arr = isSortActive ? arr.sort().reverse() : arr.sort();
    }

    const template = teplateConstructor(arr, className);
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
    const popoverStyles = `top: ${ top }px; left: ${ rect.left }px; width: ${ rect.width }px;`;
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

function getPush(push) {
    const className = "push";
    const pushLink = "#";
    const rect = push.parentElement.getBoundingClientRect();
    const top = push.parentElement.offsetTop;
    const popoverStyles = `top: ${ top }px; left: ${ rect.left - 1 }px;`;
    popover.style.cssText = popoverStyles;
    popover.classList.add('active', className);

    let templateBody = '<ul class="push__list">';
    if (pushList.length) {
        pushList.forEach(el => {
            templateBody += `<li class="push__list_item noviewed">
                <div class="push__item_head">
                    <img src="${ el.icon }" alt="${ el.name }">
                    <span class="push__item_title">${ el.name }</span>
                    <time class="push__item_moment">${ el.createdAt }</time>
                </div>
                <p class="push__item_message">${ el.message }</p>
            </li>`;
        });
    } else {
        templateBody +='<div class="push__list_empty">Нет новых уведомлений</div>';
    }
    templateBody +='</ul>';
    const templateHeader = '<header class="push__header">Уведомления</header>';
    const templateFooter = `<footer class="push__footer"><a href="${ pushLink }">Показать все</a></footer>`;
    template = templateHeader + templateBody + templateFooter;
    popover.innerHTML = template;

    document.querySelectorAll('.push__list_item').forEach(node => {
        node.addEventListener('click', function () {
            node.classList.remove('noviewed');   
        });
    });
}

function checkAllChecked (name) {
    const arr = [];
    const selectors = document.querySelectorAll(`input[name=${ name }]`);
    selectors.forEach(node => {
        if (node.checked && this.value !== 'all') {
            arr.push(true);
        }
    });

    if (arr.length === 0) {
        selectors.forEach(node => {
            if (node.value === 'all') {
                node.checked = true;
            }
        });
    }
}

function deleteCheckedAll(name) {
    document.querySelectorAll(`input[name=${ name }]`).forEach(node => {
        if (node.value === 'all') {
            node.checked = false;
        }
    });
}

function sortLists(el) {
    const variant = el.dataset.sort;
    const list = el.dataset.list;
    const nodeList = document.querySelector(`.${ list }`);
    let listItems = Array.from(nodeList.children).map(el => {
        return {
            value: el.children[1].innerHTML,
            node: el
        };
    });
    nodeList.innerHTML = '';
    if (variant === sortVariants.AZ) {
        listItems.sort((a,b) => a.value.localeCompare(b.value));
        el.classList.contains('active') ? listItems.reverse() : listItems;
    }
    listItems.forEach(item => {
        nodeList.appendChild(item.node);
    });
}

function countSliderPointPosition() {
    const rangeslider = document.querySelector('input.rangeslider');
    const parent = document.querySelector('.range-slider__val');
    const el = parent.children[0];
    const val = parseInt(rangeslider.value, 10);
    el.innerHTML = val;
    if (val === 0 || val === 5) {
        el.innerHTML = '';
    }
    let leftPos = 0;
    switch (val) {
        case 1:
            leftPos = -3;
            break;
        case 2:
            leftPos = -6;
            break;
        case 3:
            leftPos = -7.5;
            break;
        case 4:
            leftPos = -14;
            break;
        default:
            el.innerHTML = '';
            break;
    }
    const left = 0.2 * rangeslider.value * parent.getBoundingClientRect().width;
    el.style.cssText = `transform: translateX(${ left }px); left: ${ leftPos }px`;
}
/** ======================== END:Functions ========================== **/