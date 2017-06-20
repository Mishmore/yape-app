'use strict';

const EnterCode = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4>Ahora ingresa tu código</h4>');
  const p = $('<p>Enviamos un SMS con el código de validación al</p>');

  parent.append(title);
  parent.append(p);

  return parent;
}
