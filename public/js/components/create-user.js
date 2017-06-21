'use strict';

const CreateUser = (update) => {
  const parent = $('<div class="container create-user"></div>');
  const row = $('<div class="row margin-top"></div>');
  const col = $('<div class="col s12"></div>');
  const img = $('<img src="img/icons/message.png" alt="phone" class="big-icon margin-auto">');
  const title = $('<h6 class="center-align font-500">Crea tu usuario Yape</h6>');
  const p = $('<p class="center-align">Ingresa un nombre, email y clave de usuario</p>');
  const form = $('<form onsubmit="return false" class="form relative margin-top"></form>');
  const field1 = $('<div class="relative"></div>');
  const avatar = $('<img src="img/icons/user.png" class="field-icon">');
  const nombre = $('<input type="text" class="center-align" placeholder="Nombre">');
  const field2 = $('<div class="relative"></div>');
  const mail = $('<img src="img/icons/message-gray.png" class="field-icon">');
  const email = $('<input type="email" class="center-align" placeholder="correo@ejemplo.com">');
  const field3 = $('<div class="relative"></div>');
  const lock = $('<img src="img/icons/lock.png" class="field-icon">');
  const password = $('<input type="password" class="center-align" placeholder="Ingresa clave de 6 dígitos">');
  const recomendation = $('<small class="center-align">Cuida esta clave como oro, ya que es tu acceso a Yape.</small>');
  const btnCreate = $('<button type="submit" name="button" class="btn margin-auto yellow margin-top">CREAR CUENTA</button>');
  btnCreate.prop('disabled', true);

  const validateNum = () => {
    if( (/^\d{9}$/.test(inputNum.val())) && (($('#agree').prop('checked')) == true) ) {
      btnContinuar.prop('disabled', false);
    } else {
      btnContinuar.prop('disabled', true);
    }
  }

    nombre.on('keypress', (event) => {
      const charCode = event.keyCode;
      if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {
        return true;
      }
      else {
        return false;
      }
    });

  parent.append(row);
  row.append(col);
  col.append(img);
  col.append(title);
  col.append(p);
  col.append(form);
  form.append(field1);
  field1.append(avatar);
  field1.append(nombre);
  form.append(field2);
  field2.append(mail);
  field2.append(email);
  form.append(field3);
  field3.append(lock);
  field3.append(password);
  field3.append(recomendation);
  form.append(btnCreate);

  return parent;
}
