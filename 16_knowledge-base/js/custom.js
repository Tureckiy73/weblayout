const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnable: false,
  searchChoices: false,
  shouldSort: false,
  itemSelectText: '',
  position: 'bottom',
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872185073737896,2.354223999999991],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

    // Создание геообъекта с типом точка (метка).
    // var myGeoObject = new ymaps.GeoObject({
    //     geometry: {
    //         type: "Point", // тип геометрии - точка
    //         coordinates: [48.872185073737896,2.354223999999991] // координаты точки
    //     }
    // });

    var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Subtract.svg',
      // iconImageSize: '[28, 40]',
      iconImageOffset: '[-3, -42]',
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    // myMap.geoObjects.add(myGeoObject);
}


var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.form', {
  // colorWrong: 'yellow',
  rules: {
    // colorWrong: 'yellow',
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      // colorWrong: 'yellow',
    },
    mail: {
      required: true,
      email: true
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
    },
  },
  messages: {
    // colorWrong: 'yellow',
    name: {
      // colorWrong: 'yellow',
      minLength: 'Поле должно содержать не менее :value символов',
      maxLength: 'Поле может содержать не более :value символов',
      required: 'Как вас зовут?',
    },
    mail: {
      required: 'Укажите ваш e-mail',
      email: 'Почта должна содержать домен и знак @'
    },
    tel: 'Укажите ваш телефон',
  },
});
