'use strict';

const EnterCode = (update) => {
  const parent = $('<div class="container code"></div>');
  const row = $('<div class="row margin-top"></div>');
  const col = $('<div class="col s12"></div>');
  const img = $('<img src="img/icons/message.png" alt="phone" class="big-icon margin-auto">');
  const title = $('<h6 class="center-align font-500">Ahora ingresa tu código</h6>');
  const p = $('<p class="center-align">Enviamos un SMS con el código de validación al número <strong>'+ userData.phone +'</strong> </p>');
  const form = $('<form onsubmit="return false" class="form relative margin-top"></form>');
  const icon = $('<img src="img/icons/lock.png" class="field-icon">');
  const inputCode = $('<input type="number" class="center-align" placeholder="- - - - -" >');
  const timeDiv = $('<div class="margin-auto timer-div"></div>');
  const subtext = $('<small>Reintentar en </small>');
  const clock = $('<img src="img/icons/clock.png" alt="clock" class="inline-block clock">');
  let sec = 21;
  const timer = $('<small id="time">'+ sec +'</small>');
  const statusInfo = $('<small class="center-align bottom-info blue-text"> Código: '+ userData.code +'<small>');


  const intervalTimer = setInterval(function() {
    countdown();
  }, 1000);

  function countdown() {
    $("#time").text(sec);
    sec--;
    if (sec < 0) {
      $.post( 'api/resendCode', {
        phone: userData.phone,
       },
        function(response){
          if (response.data == null) {
            console.log('Hubo un error en el registro');
          } else {
            userData.code = response.data;
            statusInfo.text('Código: '+ userData.code);
          }
        }, 'json' )
      sec = 21;
    }
  }

  inputCode.on('keyup', (e) => {
    limitCharacters(inputCode, 6);
    if (inputCode.val() == userData.code) {
      clearInterval(intervalTimer);
      state.selectedScreen = 'CreateUser';
      update();
    }

  });

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
  col.append(statusInfo);

  return parent;
}
