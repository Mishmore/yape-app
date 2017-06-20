'use strict';

const RegisterNum = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4 class="text-center">Para comenzar validaremos tu número</h4>');
  const p = $('<p class="text-center">Recibirás un SMS con un código de validación</p>');
  const form = $('<form onsubmit="return false"></form>');
  const inputNum = $('<input type="number">');
  const checkbox = $('<input type="checkbox" id="agree"> Acepto los <a href="#">Términos y condiciones</a>');
  const btnContinuar = $('<button type="submit">CONTINUAR</button>');
  btnContinuar.prop('disabled', true);

  const validateNum = () => {
    if( (/^\d{9}$/.test(inputNum.val())) && (($('#agree').prop('checked')) == true) ) {
      btnContinuar.prop('disabled', false);
    } else {
      btnContinuar.prop('disabled', true);
    }
  }

  inputNum.on('keyup', (e) => {
    validateNum();
  });

  checkbox.on('click', (e) => {
    validateNum();
  });

  btnContinuar.on('click', (e) => {
    const phone = inputNum.val();
    $.post( 'api/registerNumber', { phone: phone, terms: true },
      function(response){
        if (response.data == null) {
          alert('Este usuario ya existe');
        } else {
          userData.phone = response.data.phone;
          userData.code = response.data.code;
          state.selectedScreen = 'enterCode';
          update();
        }
      }, 'json' )
  })

  parent.append(title);
  parent.append(p);
  parent.append(form);
  form.append(inputNum);
  form.append(checkbox);
  form.append(btnContinuar);

  return parent;
}
