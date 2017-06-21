'use strict';

const Success = (update) => {
  const parent = $('<div class="container-fluid success yellow"></div>');
  const row = $('<div class="row"></div>');
  const col = $('<div class="col s12"></div>');
  const img = $('<img src="img/icons/check.png" alt="check" class="big-icon margin-auto">');
  const title = $('<h6 class="center-align font-500 dark-purple-text">¡Bien!</h6>');
  const subtitle = $('<h6 class="center-align font-500 dark-purple-text">Ahora puedes usar Yape</h6>');

  parent.append(row);
  row.append(col);
  col.append(img);
  col.append(title);
  col.append(subtitle);

  state.selectedScreen = 'RegisterCard';

  const nextScreen = setTimeout(function() {
    update();
  }, 3000);

  return parent;
}
