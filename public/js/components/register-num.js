'use strict';

const RegisterNum = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4>Para comenzar validaremos tu número</h4>');
  const p = $('Recibirás un SMS con un código de validación');
  const inputNum = $('<input type="number">');
  const checkbox = $('<input type="checkbox"> Acepto los <a href="#">Términos y condiciones</a>');
  const btnContinuar = $('<button>CONTINUAR</button>');

  parent.append(title);
  parent.append(p);
  parent.append(inputNum);
  parent.append(checkbox);
  parent.append(btnContinuar);

  return parent;
}
