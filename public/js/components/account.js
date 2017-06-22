'use strict';

const Account = (update) => {
  const parent = $('<div class="container-fluid code"></div>');
  const row = $('<div class="row light-purple"></div>');
  const col = $('<div class="col s12"></div>');
  const happy = $('<img src="img/icons/happy-face.png" alt="face" class="big-icon margin-auto">');
  const engine = $('<img src="img/icons/engine.png" class="top-right-icon">');
  const title = $('<h6 class="center-align font-500 white-text">Hola</h6>');
  const subDiv = $('<div class="turquoise-div"></div>');
  const subtitle = $('<p class="center-align light-turquoise inline-block">Mostrar saldo</p>');
  const eye = $('<img src="img/icons/eye.png" width="25px">');
  const row2 = $('<div class="row dark-purple"></div>');
  const col2 = $('<div class="col s12 ultimos-mov"></div>');
  const ultMov = $('<p class="center-align font-500 white-text inline-block">ÚLTIMOS MOVIMIENTOS</p>');
  const arrow = $('<img src="img/icons/right-arrow-circular-button.png" width="25px">');
  const img = $('<img src="img/icons/icon.png" class="col s5">');
  const divTxt = $('<div class="col s7"></div>');
  const row2Title = $('<p class="white-text">¿Aún no realizas tu primer pago?</p>');
  const row2SubTitle = $('<p class="white-text margin-0">Es rápido y sencillo</p>');
  const col12 = $('<div class="col s12 call-to-action margin-top"></div>');
  const enviar = $('<div class="col s5"></div>');
  const imgEnviar =  $('<img src="img/icons/send.png" class="responsive-img margin-auto">');
  const enviarTxt = $('<p class="white-text uppercase font-size-smaller center-align">Enviar pago</p>');
  const recibir = $('<div class="col s5"></div>');
  const imgRecibir =  $('<img src="img/icons/code-qr.png" class="responsive-img margin-auto">');
  const recibirTxt = $('<p class="white-text uppercase font-size-smaller center-align">Recibir pago</p>');

  parent.append(row);
  row.append(col);
  col.append(happy);
  col.append(engine);
  col.append(title);
  col.append(subDiv)
  subDiv.append(eye);
  subDiv.append(subtitle);
  parent.append(row2);
  row2.append(col2);
  col2.append(ultMov);
  col2.append(arrow);
  row2.append(img);
  row2.append(divTxt);
  divTxt.append(row2Title);
  divTxt.append(row2SubTitle);
  row2.append(col12);
  col12.append(enviar)
  enviar.append(imgEnviar);
  enviar.append(enviarTxt);
  col12.append(recibir);
  recibir.append(imgRecibir);
  recibir.append(recibirTxt);

  return parent;
}
