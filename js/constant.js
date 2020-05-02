const cityesOut = [{"id":1,"title":"Москва","important":1},{"id":2,"title":"Санкт-Петербург","important":1},{"id":10,"title":"Волгоград"},{"id":37,"title":"Владивосток"},{"id":42,"title":"Воронеж"},{"id":49,"title":"Екатеринбург"},{"id":60,"title":"Казань"},{"id":61,"title":"Калининград"},{"id":72,"title":"Краснодар"},{"id":73,"title":"Красноярск"},{"id":95,"title":"Нижний Новгород"},{"id":99,"title":"Новосибирск"},{"id":104,"title":"Омск"},{"id":110,"title":"Пермь"},{"id":119,"title":"Ростов-на-Дону"},{"id":123,"title":"Самара"},{"id":151,"title":"Уфа"},{"id":153,"title":"Хабаровск"},{"id":158,"title":"Челябинск"},{"id":185,"title":"Севастополь"},{"id":627,"title":"Симферополь"}].map(el => el['title']);
const country = [{
    "id": 19,
    "title": "Австралия"
    }, {
    "id": 20,
    "title": "Австрия"
    }, {
    "id": 5,
    "title": "Азербайджан"
    }, {
    "id": 21,
    "title": "Албания"
    }, {
    "id": 22,
    "title": "Алжир"
    }, {
    "id": 23,
    "title": "Американское Самоа"
    }, {
    "id": 24,
    "title": "Ангилья"
    }, {
    "id": 25,
    "title": "Ангола"
    }, {
    "id": 26,
    "title": "Андорра"
    }, {
    "id": 27,
    "title": "Антигуа и Барбуда"
    }, {
    "id": 28,
    "title": "Аргентина"
    }, {
    "id": 6,
    "title": "Армения"
    }, {
    "id": 29,
    "title": "Аруба"
    }, {
    "id": 30,
    "title": "Афганистан"
    }, {
    "id": 31,
    "title": "Багамы"
    }, {
    "id": 32,
    "title": "Бангладеш"
    }, {
    "id": 33,
    "title": "Барбадос"
    }, {
    "id": 34,
    "title": "Бахрейн"
    }, {
    "id": 3,
    "title": "Беларусь"
    }, {
    "id": 35,
    "title": "Белиз"
    }, {
    "id": 36,
    "title": "Бельгия"
    }, {
    "id": 37,
    "title": "Бенин"
    }, {
    "id": 38,
    "title": "Бермуды"
    }, {
    "id": 39,
    "title": "Болгария"
    }, {
    "id": 40,
    "title": "Боливия"
    }, {
    "id": 235,
    "title": "Бонайре, Синт-Эстатиус и Саба"
    }, {
    "id": 41,
    "title": "Босния и Герцеговина"
    }, {
    "id": 42,
    "title": "Ботсвана"
    }, {
    "id": 43,
    "title": "Бразилия"
    }, {
    "id": 44,
    "title": "Бруней"
    }, {
    "id": 45,
    "title": "Буркина-Фасо"
    }, {
    "id": 46,
    "title": "Бурунди"
    }, {
    "id": 47,
    "title": "Бутан"
    }, {
    "id": 48,
    "title": "Вануату"
    }, {
    "id": 233,
    "title": "Ватикан"
    }, {
    "id": 49,
    "title": "Великобритания"
    }, {
    "id": 50,
    "title": "Венгрия"
    }, {
    "id": 51,
    "title": "Венесуэла"
    }, {
    "id": 52,
    "title": "Виргинские острова, Великобритания"
    }, {
    "id": 53,
    "title": "Виргинские острова, США"
    }, {
    "id": 54,
    "title": "Восточный Тимор"
    }, {
    "id": 55,
    "title": "Вьетнам"
    }, {
    "id": 56,
    "title": "Габон"
    }, {
    "id": 57,
    "title": "Гаити"
    }, {
    "id": 58,
    "title": "Гайана"
    }, {
    "id": 59,
    "title": "Гамбия"
    }, {
    "id": 60,
    "title": "Гана"
    }, {
    "id": 61,
    "title": "Гваделупа"
    }, {
    "id": 62,
    "title": "Гватемала"
    }, {
    "id": 63,
    "title": "Гвинея"
    }, {
    "id": 64,
    "title": "Гвинея-Бисау"
    }, {
    "id": 65,
    "title": "Германия"
    }, {
    "id": 236,
    "title": "Гернси"
    }, {
    "id": 66,
    "title": "Гибралтар"
    }, {
    "id": 67,
    "title": "Гондурас"
    }, {
    "id": 69,
    "title": "Гренада"
    }, {
    "id": 70,
    "title": "Гренландия"
    }, {
    "id": 71,
    "title": "Греция"
    }, {
    "id": 7,
    "title": "Грузия"
    }, {
    "id": 72,
    "title": "Гуам"
    }, {
    "id": 73,
    "title": "Дания"
    }, {
    "id": 237,
    "title": "Джерси"
    }, {
    "id": 231,
    "title": "Джибути"
    }, {
    "id": 74,
    "title": "Доминика"
    }, {
    "id": 75,
    "title": "Доминиканская Республика"
    }, {
    "id": 76,
    "title": "Египет"
    }, {
    "id": 77,
    "title": "Замбия"
    }, {
    "id": 78,
    "title": "Западная Сахара"
    }, {
    "id": 79,
    "title": "Зимбабве"
    }, {
    "id": 8,
    "title": "Израиль"
    }, {
    "id": 80,
    "title": "Индия"
    }, {
    "id": 81,
    "title": "Индонезия"
    }, {
    "id": 82,
    "title": "Иордания"
    }, {
    "id": 83,
    "title": "Ирак"
    }, {
    "id": 84,
    "title": "Иран"
    }, {
    "id": 85,
    "title": "Ирландия"
    }, {
    "id": 86,
    "title": "Исландия"
    }, {
    "id": 87,
    "title": "Испания"
    }, {
    "id": 88,
    "title": "Италия"
    }, {
    "id": 89,
    "title": "Йемен"
    }, {
    "id": 90,
    "title": "Кабо-Верде"
    }, {
    "id": 4,
    "title": "Казахстан"
    }, {
    "id": 91,
    "title": "Камбоджа"
    }, {
    "id": 92,
    "title": "Камерун"
    }, {
    "id": 10,
    "title": "Канада"
    }, {
    "id": 93,
    "title": "Катар"
    }, {
    "id": 94,
    "title": "Кения"
    }, {
    "id": 95,
    "title": "Кипр"
    }, {
    "id": 96,
    "title": "Кирибати"
    }, {
    "id": 97,
    "title": "Китай"
    }, {
    "id": 98,
    "title": "Колумбия"
    }, {
    "id": 99,
    "title": "Коморы"
    }, {
    "id": 100,
    "title": "Конго"
    }, {
    "id": 101,
    "title": "Конго, демократическая республика"
    }, {
    "id": 102,
    "title": "Коста-Рика"
    }, {
    "id": 103,
    "title": "Кот-д'Ивуар"
    }, {
    "id": 104,
    "title": "Куба"
    }, {
    "id": 105,
    "title": "Кувейт"
    }, {
    "id": 11,
    "title": "Кыргызстан"
    }, {
    "id": 138,
    "title": "Кюрасао"
}].map(el => el.title);
const pullCity = country;
const roadTime = writeInArr(24);
const stateAmount = writeInArr(5);
const night = writeInArr(30);
const typeTravel = ['Поезд', 'Самолет', 'Машина', 'Автобус'];
const pushList = [
    {
        icon: "https://islands.s3.yandex.net/_/R18YwqXK.svg",
        name: "Район",
        createdAt: "7 минут назад",
        message: "Загляните в ленту районных новостей — там есть кое-что интересное ⚡️"
    },
    {
        icon: "https://islands.s3.yandex.net/_/2ecZ7HZm.svg",
        name: "Дзен",
        createdAt: "2 часа назад",
        message: "Бесконечная лента публикаций, собранных специально для вас."
    },
    {
        icon: "https://islands.s3.yandex.net/_/2VJbvjyz.svg",
        createdAt: "21.01.2020",
        name: "Эксперты",
        message: "Посещайте новые места, смотрите фильмы, играйте в игры и пишите отзывы."
    },
];
const ctxMenu = ['<a href="#" class="profile-btn">Личный кабинет</a>', '<button class="leave-account">Выход</button>'];

function writeInArr(max) {
    let i = 0; 
    const arr = [];
    
    do {
        i++;
        arr.push(i);
    } while (i < max);
    
    return arr;
}



// const apiKey = 'dc916d4fdc916d4fdc916d4f12dce0f84addc91dc916d4f823d7a77dc5ecb38d9c2fb1f';
// get to VK Api
// getApi(`https://api.vk.com/method/database.getCities?country_id=1&need_all=0&access_token=${ apiKey }&v=5.103`);
// function getApi(url) {
//     // const request = new Request( url, {
//     //     method: 'GET',
//     //     mode: 'cors',
//     //     cache: 'default',
//     // });

//     fetch(url)
//         .then( response => {
//             console.log(response);
//             if (response.status === 200) return response.json();
//             else if (response.status === 401) throw response.status;
//             else throw new Error('Response status not 200.');
//         })
//         .catch( error => {
//             console.log(error);
//         });
// }
