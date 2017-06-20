'use strict';

const RegisterNum = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4>Para comenzar validaremos tu número</h4>');
  const p = $('Recibirás un SMS con un código de validación');
  const form = $('<form onsubmit="return false"></form>');
  const inputNum = $('<input type="number">');
  const checkbox = $('<input type="checkbox"> Acepto los <a href="#">Términos y condiciones</a>');
  const btnContinuar = $('<button type="submit">CONTINUAR</button>');
  btnContinuar.prop('disabled', true);

  const validateNum = () => {
    if( (/^\d{9}$/.test(inputNum.val())) ) {
      btnContinuar.prop('disabled', false);
      console.log('ok');
    } else {
      console.log('wrong');
    }
  }

  inputNum.on('keyup', (e) => {
    validateNum();
  });

  checkbox.on('click', (e) => {
    validateNum();
  });

  parent.append(title);
  parent.append(p);
  parent.append(form);
  form.append(inputNum);
  form.append(checkbox);
  form.append(btnContinuar);

  return parent;
}
