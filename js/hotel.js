
window.onload = function() {
    dropReg.addEventListener('click', function () {
        const currentActive = this.classList.contains('active');
        this.classList.remove('active');
        dropPush.classList.remove('active');
        popover.className.split(/\s+/).forEach(name => {
            if (name !== 'popover') {
                popover.classList.remove(name);
            }
        });
        popover.style.cssText = '';
    
        if (currentActive) {
            closePopover(this);
        } else {
            showPopover(this, 'user');
        }
    });
};

/** ======================== User actions ========================== **/
document.querySelector('.header__menu-btn').addEventListener('click', function () {
    document.querySelector('.main').classList.toggle('active');
});
document.querySelector('.header__btn').addEventListener('click', function () {
    document.querySelector('body').classList.add('popup-active');
    popup.classList.add('task-popup');
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
document.querySelector('.popup__close-btn').addEventListener('click', closePopup);
document.querySelector('.bg-popup').addEventListener('click', closePopup);
dropPush.addEventListener('click', function () {
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

drops.forEach(node => {
    const drop = node.dataset.drop;
    if (drop !== 'push', drop !== 'user') {
        node.addEventListener('click', function () {
            this.classList.toggle('active');
            toggleTableList(this.dataset.drop);
        });
    };
});
/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/

function closePopup () {
    document.querySelector('body').classList.remove('popup-active');
    popup.classList.remove('task-popup'); 
}

function changeSlide(num) {
    const width = document.querySelector('.slide').offsetWidth;
    const slider = document.querySelector('.sliders');
    const style = `transform: translateX(-${ (num - 1) * width }px)`;
    slider.style.cssText = style;
    slider.children[num - 1].classList.add('active');
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

function showPopover(This, className) {
    This.classList.add('active');
    popover.classList.add(className);
    const rect = This.parentElement.getBoundingClientRect();
    const top = This.parentElement.offsetTop;
    const popoverStyles = `top: ${ top }px; left: ${ rect.left - 1 }px; width: ${ rect.width + 2 }px;`;
    popover.style.cssText = popoverStyles;
    popover.classList.add('active');

    addlist(this.teplateConstructor(ctxMenu, className), className);
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

function toggleTableList(option) {
    document.querySelectorAll(`.${ option }__item`).forEach(node => {
        node.classList.toggle('hide');
    });
}

/** ======================== END:Functions ========================== **/