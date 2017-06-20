'use strict';

const RegisterNum = (update) => {
  const parent = $('<div></div>');
  const title = $('<h4>Para comenzar validaremos tu número</h4>');
  const p = $('Recibirás un SMS con un código de validación');
  const form = $('<form onsubmit="return false"></form>');
  const inputNum = $('<input type="number">');
  const checkbox = $('<input type="checkbox" id="agree"> Acepto los <a href="#">Términos y condiciones</a>');
  const btnContinuar = $('<button type="submit">CONTINUAR</button>');
  btnContinuar.prop('disabled', true);

  const validateNum = () => {
    if( (/^\d{9}$/.test(inputNum.val())) && (($('#agree').prop('checked')) == true) ) {
      btnContinuar.prop('disabled', false);
      //console.log('ok');
      //console.log($('#agree').prop('checked'));
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
    //alert('listo para enviar data');
    $.post( 'api/registerNumber', { phone: phone, terms: true },
      function(response){
        console.log(response);
        console.log(response.data.code);
      }, 'json' )
    .done(function() {
      state.selectedScreen = 'enterCode';
      update();
    });
  })

  parent.append(title);
  parent.append(p);
  parent.append(form);
  form.append(inputNum);
  form.append(checkbox);
  form.append(btnContinuar);

  return parent;
}
