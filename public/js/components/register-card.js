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
  const scanDiv = $('<div class="turquoise-div"></div>');
  const scan = $('<img src="img/icons/scan.png" width="25px">');
  const scantxt = $('<p class="center-align light-turquoise inline-block">Escanear tarjeta</p>');
  const venceDiv = $('<div class="vence-div"></div>');
  const fieldDiv = $('<div class="vence-field"></div>');
  const vence = $('<span class="grey-soft-text">Fecha de vencimiento</span>');
  const inputMonth = $('<input type="number" min="1" max="12" placeholder="Mes" class="small-input center-align">');
  const slash = $('<span>/</span>');
  const inputYear = $('<input type="number" min="17" max="24" placeholder="Año" class="small-input center-align">');
  const btnContinuar = $('<button type="submit" class="btn margin-auto yellow margin-top">CONTINUAR</button>');
  const ask = $('<img src="img/icons/question.png" class="top-right-icon">');
  btnContinuar.prop('disabled', true);

  const validateFields = () => {
    if( inputMonth.val() <= 12 && inputMonth.val() >=1 && inputMonth.val().length ==2 && inputYear.val() >=17 && inputYear.val() <= 24 && inputCard.val().length == 16) {
      btnContinuar.prop('disabled', false);
      btnContinuar.focus();
    } else {
      btnContinuar.prop('disabled', true);
    }
  }

  inputCard.on('keyup', (e) => {
    validateFields();
    limitCharacters(inputCard, 16);
    if (inputCard.val().length == 16) {
      inputMonth.focus();
    }
  });

  inputMonth.on('keyup', (e) => {
    validateFields();
    limitCharacters(inputMonth, 2);
    if (inputMonth.val().length == 2) {
      inputYear.focus();
    }
  });

  inputYear.on('keyup', (e) => {
    limitCharacters(inputYear, 2);
    validateFields();
  });

  btnContinuar.on('click', (e) => {
    userData.cardNum = inputCard.val();
    userData.cardMonth = inputMonth.val();
    userData.cardYear = inputYear.val();
    state.selectedScreen = "SendCard";
    update();
  })

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
  form.append(venceDiv);
  venceDiv.append(vence);
  venceDiv.append(fieldDiv);
  fieldDiv.append(inputMonth);
  fieldDiv.append(slash);
  fieldDiv.append(inputYear);
  form.append(btnContinuar);
  parent.append(ask);

  return parent;
}
