'use strict';

const Welcome = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4>Paga a tus amigos</h4>');
  const p = $('<p>Paga a quien quieras desde donde quieras</p>');
  const btn = $('<button>Register</button>');

  parent.append(title);
  parent.append(p);
  parent.append(btn);

  btn.on('click', (e) => {
    state.selectedScreen = 'regNumber';
    update();
  })
  return parent;
}
