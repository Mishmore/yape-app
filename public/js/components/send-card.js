'use strict';

const SendCard = (update) => {
  const parent = $('<div class="container code"></div>');
  const row = $('<div class="row margin-top"></div>');
  const col = $('<div class="col s12"></div>');
  const img = $('<img src="img/icons/bcp-logo.png" alt="phone" class="big-icon margin-auto">');
  const title = $('<h6 class="center-align font-500">Ingresa la clave de tu tarjeta</h6>');
  const p = $('<p class="center-align">tarjeta <strong>'+ userData.phone +'</strong> </p>');
  const form = $('<form onsubmit="return false" class="form relative margin-top"></form>');
  const icon = $('<img src="img/icons/lock.png" class="field-icon">');
  const inputPass = $('<input type="password" class="center-align" placeholder="- - - - -" maxLength="4" >');
  const btnRegistrar = $('<button type="submit" class="btn margin-auto yellow margin-top">REGISTRAR</button>');
  const ask = $('<img src="img/icons/question.png" class="top-right-icon">');
  btnRegistrar.prop('disabled', true);

  const validateFields = () => {
    if( inputPass.val() <= 12 ) {
      btnRegistrar.prop('disabled', false);
    } else {
      btnRegistrar.prop('disabled', true);
    }
  }

  btnRegistrar.on('click', (e) => {
    $.post( 'api/registerCard', {
      phone : userData.phone,
      cardNumber : state.cardNum,
      cardMonth : state.cardMonth,
      cardYear : state.cardYear,
      cardPassword : inputPass.val()
     },
      function(response){
        if (response.data == null) {
          console.log('Hubo un error en el registro');
        } else {
          userData.cardPassword = response.data.cardPassword;
          state.selectedScreen = 'Account';
          update();
        }
      }, 'json' )
    });


  parent.append(row);
  row.append(col);
  col.append(img);
  col.append(title);
  col.append(p);
  col.append(form);
  form.append(icon);
  form.append(inputPass);
  form.append(btnRegistrar);
  parent.append(ask);


  return parent;
}
