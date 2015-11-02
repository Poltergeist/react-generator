import TestUtils from 'react-addons-test-utils';
import React from 'react';

export default createComponent;

function createComponent(component, props, ...children) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(
    React.createElement(
      component, props, children.length > 1 ? children : children[0]
    )
  );
  return shallowRenderer.getRenderOutput();
}
