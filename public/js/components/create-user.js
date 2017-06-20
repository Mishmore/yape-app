'use strict';

const CreateUser = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4>Crea tu usuario Yape</h4>');
  const p = $('<p>Ingresa un nombre, email y clave de usuario</p>');

  parent.append(title);
  parent.append(p);

  return parent;
}
