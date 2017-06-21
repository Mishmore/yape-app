'use strict';

const SendCard = (update) => {
  const parent = $('<div class="container code"></div>');
  const row = $('<div class="row margin-top"></div>');
  const col = $('<div class="col s12"></div>');
  const img = $('<img src="img/icons/message.png" alt="phone" class="big-icon margin-auto">');
  const title = $('<h6 class="center-align font-500">Ahora ingresa tu código</h6>');
  const p = $('<p class="center-align">Enviamos un SMS con el código de validación al número <strong>'+ userData.phone +'</strong> </p>');
  const form = $('<form onsubmit="return false" class="form relative margin-top"></form>');
  const icon = $('<img src="img/icons/lock.png" class="field-icon">');
  const inputPass = $('<input type="number" class="center-align" placeholder="- - - - -" >');
  const btnContinuar = $('<button type="submit" class="btn margin-auto yellow margin-top">CONTINUAR</button>');
  btnContinuar.prop('disabled', true);

  const validateFields = () => {
    if( inputMonth.val() <= 12 && inputMonth.val() >=1 && inputYear.val() >=17 && inputYear.val() <= 24 && inputCard.val().length == 16) {
      btnContinuar.prop('disabled', false);
    } else {
      btnContinuar.prop('disabled', true);
    }
  }

  parent.append(row);
  row.append(col);
  col.append(img);
  col.append(title);
  col.append(p);
  col.append(form);
  form.append(icon);
  form.append(inputCode);
  col.append(timeDiv);
  timeDiv.append(subtext);
  timeDiv.append(clock);
  timeDiv.append(timer);

  return parent;
}
