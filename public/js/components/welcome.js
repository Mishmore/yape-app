'use strict';

const Welcome = (update) => {
  const parent = $('<div class=""></div>');
  const carousel = $('<div class="carousel carousel-slider center" data-indicators="true">');
  const item1 = $('<div class="carousel-item red" href="#one!">');
  const title1 = $('<h3 class="text-center">Paga a tus amigos</h3>');
  const p1 = $('<p class="text-center">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

  const item2 = $('<div class="carousel-item red" href="#one!">');
  const title2 = $('<h3 class="text-center">Paga a tus amigos</h3>');
  const p2 = $('<p class="text-center">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

  const item3 = $('<div class="carousel-item red" href="#one!">');
  const title3 = $('<h3 class="text-center">Paga a tus amigos</h3>');
  const p3 = $('<p class="text-center">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

  const btn = $('<button class="btn btn-block yellow white-text">REGISTRAME</button>');

  parent.append(carousel);
  carousel.append(item1);
  item1.append(title1);
  item1.append(p1);
  carousel.append(item2);
  item2.append(title2);
  item2.append(p2);
  carousel.append(item3);
  item3.append(title3);
  item3.append(p3);

  parent.append(btn);

  btn.on('click', (e) => {
    state.selectedScreen = 'regNumber';
    update();
  })
  return parent;
}
