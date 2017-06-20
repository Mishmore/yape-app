'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Welcome());
  root.append(wrapper);

}

$(_ => {
  const root = $('#root');
  render(root);
})
