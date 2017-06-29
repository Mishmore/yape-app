'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  root.append(wrapper);

  switch (state.selectedScreen) {
    case 'Welcome':
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
    case 'SendCard':
        wrapper.append(SendCard(_ => render(root)));
        break;
    case 'Account':
        wrapper.append(Account(_ => render(root)));
        break;
  }

}

const state = {
  selectedScreen : 'RegisterNum'
}

const userData = {
  phone: null,
  code: null,
  name: null,
  email: null,
  password: null,
  cardNum: null,
  cardMonth: null,
  cardYear: null,
  cardPassword: null
}

$(_ => {
  const root = $('#root');
  render(root);
})
