'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  root.append(wrapper);

  switch (state.selectedScreen) {
    case null:
        wrapper.append(Welcome(_ => render(root)));
        break;
    case 'RegisterNum':
        wrapper.append(RegisterNum(_ => render(root)));
        break;
    case 'EnterCode':
        wrapper.append(EnterCode(_ => render(root)));
        break;
    case 'CreateUser':
        wrapper.append(CreateUser(_ => render(root)));
        break;
    case 'Success':
        wrapper.append(Success(_ => render(root)));
        break;
    case 'RegisterCard':
        wrapper.append(RegisterCard(_ => render(root)));
        break;
  }

}

const state = {
  selectedScreen : null
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
  const root = $('#root');
  render(root);
})
