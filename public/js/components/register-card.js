'use strict';

const RegisterCard = (update) => {
  const parent = $('<div class="container regcard"></div>');
  const row = $('<div class="row margin-top"></div>');
  const col = $('<div class="col s12"></div>');
  const img = $('<img src="img/icons/message.png" alt="phone" class="big-icon margin-auto">');
  const title = $('<h6 class="center-align font-500">Registra tu tarjeta débito BCP</h6>');
  const p = $('<p class="center-align">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p>');
  const form = $('<form onsubmit="return false" class="form relative margin-top"></form>');
  const icon = $('<img src="img/icons/card.png" class="field-icon">');
  const inputCard = $('<input type="number" class="center-align">');
  const scanDiv = $('<div></div>');
  const scan = $('<img src="img/icons/scan.png">');
  const scantxt = $('<p class="center-align light-turquoise">Escanear tarjeta</p>');
  const vence = $('<span class="grey-soft-text">Fecha de vencimiento</span>');
  const inputMonth = $('<input type="number" min="1" max="12">');
  const inputYear = $('<input type="number" min="17" max="24">');
  const btnContinuar = $('<button type="submit" class="btn margin-auto yellow margin-top">CONTINUAR</button>');
  btnContinuar.prop('disabled', true);

  const validateFields = () => {
    if( inputMonth.val() <= 12 && inputMonth.val() >=1 && inputYear.val() >=17 && inputYear.val() <= 24 && inputCard.val().length == 16) {
      btnContinuar.prop('disabled', false);
    } else {
      btnContinuar.prop('disabled', true);
    }
  }

  inputCard.on('keyup', (e) => {
    validateFields();
  });

  inputMonth.on('keyup', (e) => {
    validateFields();
  });

  inputYear.on('keyup', (e) => {
    validateFields();
  });

  parent.append(row);
  row.append(col);
  col.append(img);
  col.append(title);
  col.append(p);
  col.append(form);
  form.append(icon);
  form.append(inputCard);
  form.append(scanDiv);
  scanDiv.append(scan);
  scanDiv.append(scantxt);
  form.append(vence);
  form.append(inputMonth);
  form.append(inputYear);
  form.append(btnContinuar);

  return parent;
}
