export function initialize(instance) {
  const lookup = instance.lookup || instance.container.lookup;
  const liquidTargetContainer = lookup('component:liquid-target-container');

  liquidTargetContainer.appendTo(instance.rootElement);
}

export default {
  name: 'liquid-target-container',
  initialize: initialize
};
