const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.header__top-row')




gsap.registerPlugin(ScrollTrigger)

let tl =gsap.timeline({
    scrollTrigger: {
        trigger: '.header__title',
        toggleActions: 'play none none none'
    }
})
tl.from('.header__title', {
    opacity:0,
    x:20,
    duration: 1
}).from ('.header__title-icon',{
    opacity:0,
    y:20,
    duration: 2
})

gsap.from('.header__footer', {
    scrollTrigger: {
        trigger: '.header__footer',
        start: 'bottom bottom',
        end: '+=300px',
        markers: false,
        toggleActions: 'play none none none'
    },
    opacity:0,
    y:20,
    duration: 3
})
gsap.from('.benefits__item', {
    scrollTrigger: {
        trigger: '.benefits__item',
        start: '40px 80%',
        end: '+=300px',
        markers: false,
        toggleActions: 'play none none none'
    },
    opacity:0,
    x:60,
    scale: (1.2),
    duration: 3
})
gsap.from('.title-1', {
    scrollTrigger: {
        trigger: '.title-1',
        start: '10px 80%',
        end: '+=300px',
        markers: false,
        toggleActions: 'play none none none'
    },
    opacity:0,
    y:20,
    duration: 2
})

gsap.from('.appartments__cards', {
    scrollTrigger: {
        trigger: '.appartments__cards',
        start: '10px 80%',
        end: '+=300px',
        markers: false,
        toggleActions: 'play none none none'
    },
    opacity:0,
    x:60,
    duration: 3
})
let tlCta =gsap.timeline({
    scrollTrigger: {
        trigger: '.cta',
        start: '10px 80%',
        end: '+=300px',
        markers: false,
        toggleActions: 'play none none none'
    }
})
tlCta.from('.cta__title', {
    opacity:0,
    y:20,
    duration: 1
})
tlCta.from ('.cta__text',{
    opacity:0,
    x:40,
    duration: 1
})
tlCta.from ('.cta__form',{
    opacity:0,
    x:40,
    duration: 1
})
gsap.from('.video', {
    scrollTrigger: {
        trigger: '.video',
        start: '10px 80%',
        end: '+=300px',
        markers: false,
        toggleActions: 'play none none none'
    },
    opacity:0,
    y:60,
    duration: 2
})

gsap.from('.section-map__title', {
    scrollTrigger: {
        trigger: '.section-map__title',
        start: '10px 80%',
        end: '+=300px',
        markers: false,
        toggleActions: 'play none none none'
    },
    opacity:0,
    y:20,
    duration: 1
})
gsap.from('.section-map__map', {
    scrollTrigger: {
        trigger: '.section-map__map',
        start: '10px 80%',
        end: '+=300px',
        markers: false,
        toggleActions: 'play none none none'
    },
    opacity:0,
    y:20,
    duration: 1
})
let tlFeedback =gsap.timeline({
    scrollTrigger: {
        trigger: '.feedback',
        start: '10px 80%',
        end: '+=300px',
        toggleActions: 'play none none none'
    }
})
tlFeedback.from('.feedback__title', {
    opacity:0,
    y:20,
    duration: 1
})
tlFeedback.from ('.feedback__form',{
    opacity:0,
    x:40,
    duration: 1
})



navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active')
    nav.classList.toggle('header__top-row--mobile')
    document.body.classList.toggle('.no-scroll')
}

/*phone mask*/

maskPhone('[data-tel-input]')


//удаление '+' если ничего больше не вводится, чтобы показать placeholder

const phoneInputs =document.querySelectorAll('[data-tel-input]')
phoneInputs.forEach((input) => {
    input.addEventListener('input', ()=> {
        if(input.value === '+') input.value = ''
    })
    input.addEventListener('blur', ()=>{
        if(input.value === '+') input.value = ''
    })
})

/*map*/

ymaps.ready(init);
function init(){
    // Создание карты.
    var map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543,30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark(
        [59.943543,30.338928],
        {
            balloonContent:
            `
            <div class='balloon'>
                <div class='balloon__address'>Наб. реки Фонтанки 10-15</div>
                <div class='balloon__contacts'>
                    <a href='tel:+78121234567'>+8 (812) 123-45-67</a>
                </div>
            </div>
            `
        },
        {
        iconLayout: 'default#image',
        iconImageHref: './img/map/map-pin.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    });

    map.controls.remove('geolocationControl') //удаление геолокации
    map.controls.remove('searchControl')  //удаление поиска
    map.controls.remove('trafficControl')  //удаление контроля трафика
    map.controls.remove('typeSelector')  //удаление типа

    // map.controls.remove('fullscreenControl')  //удаление кнопки перехода в полный экран
    // map.controls.remove('zoomControl')  //удаление контроля зуммирования

    map.controls.remove('rulerControl')  //удаление контроля правил
    map.behaviors.disable(['scrollZoom'])  //отключение скролла карты (опционально)


    map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open()
}

