'use strict';

const EnterCode = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4>Ahora ingresa tu código</h4>');
  const p = $('<p>Enviamos un SMS con el código de validación al número <strong>'+ userData.phone +'</strong> </p>');
  const inputCode = $('<input type="number">');
  const subtext = $('<p>Reintentar en </p>');

  parent.append(title);
  parent.append(p);
  parent.append(inputCode);
  parent.append(subtext);

  inputCode.on('keyup', (e) => {
    if (inputCode.val() == userData.code) {
      state.selectedScreen = 'createUser';
      update();
    }
  });
/*
  const resend = setInterval(function() {
    alert("Hello");
  }, 3000);
*/
  return parent;
}
