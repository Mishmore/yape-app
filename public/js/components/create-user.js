'use strict';

const CreateUser = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4>Crea tu usuario Yape</h4>');
  const p = $('<p>Ingresa un nombre, email y clave de usuario</p>');
  const form = $('<form onsubmit="return false"></form>');
  const nombre = $('<input type="text">');
  const email = $('<input type="email">');
  const password = $('<input type="password">');
  const btnCreate = $('<button type="submit" name="button">CREAR CUENTA</button>');
  const recomendation = $('<p>Cuida esta clave como oro, ya que es tu acceso a Yape.</p>');

  parent.append(title);
  parent.append(p);

  return parent;
}
