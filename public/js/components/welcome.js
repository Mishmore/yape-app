'use strict';

const Welcome = (update) => {
  const parent = $('<div class="container welcome"></div>');
  const carousel = $('<div class="carousel carousel-slider center" data-indicators="true">');
  const img1 = $('<img src="img/icons/icon-people.png" alt="people">');
  const item1 = $('<div class="carousel-item" href="#one!">');
  const title1 = $('<h5 class="center-align font-500">Paga a tus amigos</h5>');
  const p1 = $('<p class="center-align">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

  const item2 = $('<div class="carousel-item" href="#one!">');
  const img2 = $('<img src="img/icons/happy-person.png" alt="people">');
  const title2 = $('<h5 class="center-align font-500">Sin número de cuenta</h5>');
  const p2 = $('<p class="center-align">Elige a quién pagar desde tu lista de contactos.</p>');

  const item3 = $('<div class="carousel-item" href="#one!">');
  const img3 = $('<img src="img/icons/group-people.png" alt="people">');
  const title3 = $('<h5 class="center-align font-500">Gratis y seguro</h5>');
  const p3 = $('<p class="center-align">La transferencia es inmediata y gratuita de una cuenta a otra.</p>');

  const btn = $('<button class="btn full-width yellow white-text">REGISTRAME</button>');

  parent.append(carousel);
  carousel.append(item1);
  item1.append(img1);
  item1.append(title1);
  item1.append(p1);
  carousel.append(item2);
  item2.append(img2);
  item2.append(title2);
  item2.append(p2);
  carousel.append(item3);
  item3.append(img3);
  item3.append(title3);
  item3.append(p3);

  parent.append(btn);

  btn.on('click', (e) => {
    state.selectedScreen = 'RegisterNum';
    update();
  })
  return parent;
}
