'use strict';

const EnterCode = (update) => {
  const parent = $('<div class="container register"></div>');
  const row = $('<div class="row margin-top"></div>');
  const col = $('<div class="col s12"></div>');
  const img = $('<img src="img/icons/message.png" alt="phone" class="big-icon margin-auto">');
  const title = $('<h6 class="center-align font-500">Ahora ingresa tu código</h6>');
  const p = $('<p class="center-align">Enviamos un SMS con el código de validación al número <strong>'+ userData.phone +'</strong> </p>');
  const form = $('<form onsubmit="return false" class="form relative margin-top"></form>');
  const icon = $('<img src="img/icons/lock.png">');
  const inputCode = $('<input type="number" class="center-align" placeholder="- - - - -" >');
  const timeDiv = $('<div class="margin-auto timer-div"></div>');
  const subtext = $('<small>Reintentar en </small>');
  const clock = $('<img src="img/icons/clock.png" alt="clock" class="inline-block clock">');
  const timer = $('<small>21</small>');

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
