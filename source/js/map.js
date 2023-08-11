function init(ymaps) {
  const map = new ymaps.Map('map', {
    center: [59.93863, 30.32303],
    zoom: 18
  });

  const placemark = new ymaps.Placemark([59.93863, 30.32303], {
    balloonContentHeader: 'Mishka',
    balloonContentBody: 'Большая Конюшенная улица, 19/8',
    balloonContentFooter: 'Санкт-Петербург'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/map-marker.svg',
    iconImageSize: [67, 100],
    iconImageOffset: [-30, -90]
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
