'use strict';

const Welcome = (update) => {
  const parent = $('<div class=""></div>');
  const div1 = $('<div class=""></div>');
  const title = $('<h3 class="text-center">Paga a tus amigos</h3>');
  const p = $('<p class="text-center">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

  const btn = $('<button class="btn btn-block yellow white-text">REGISTRAME</button>');

  parent.append(div1);
  div1.append(title);
  div1.append(p);

  parent.append(btn);

  btn.on('click', (e) => {
    state.selectedScreen = 'regNumber';
    update();
  })
  return parent;
}
