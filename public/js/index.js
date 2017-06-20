'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  root.append(wrapper);
  if (state.selectedScreen == null) {
    wrapper.append(Welcome(_ => render(root)));
  }
  if (state.selectedScreen == 'regNumber') {
    wrapper.append(RegisterNum(_ => render(root)));
  }
  if (state.selectedScreen == 'enterCode') {
    wrapper.append(EnterCode(_ => render(root)));
  }
  if (state.selectedScreen == 'createUser') {
    wrapper.append(CreateUser(_ => render(root)));
  }
}

const state = {
  jsonlist: null,
  selectedScreen : null,
}

const userData = {
  phone: null,
  code: null,
  username: null,
  email: null,
  password: null,
  cardNum: null,
  cardExp: null,
  cardPassword: null
}


$(_ => {
  $.get( "api", function(data) {
    state.jsonlist =  data;
  }, "json");

  const root = $('#root');
  render(root);
})
