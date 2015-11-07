import assert from 'assert';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import GeneratorStepOne from
  '../app/scripts/components/generator-step-one.react';

describe('Generator Step One', () => {
  let component, renderer,
    props = {
      dispatch: () => {},
      priorityTable: {
        attributePoints: [{}, {}, {}, {}, {}],
        funds: [{}, {}, {}, {}, {}],
        skillPoints: [{}, {}, {}, {}, {}],
        metaTypes: [{ metaTypes: [] }, { metaTypes: [] }, { metaTypes: [] },
          { metaTypes: [] }, { metaTypes: [] }],
        magicOrResonance: [{ archeTypes: [] }, { archeTypes: [] },
          { archeTypes: [] }, { archeTypes: [] }, { archeTypes: [] }]
      }
    };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<GeneratorStepOne {...props}/>);
    component = renderer.getRenderOutput();
  });

  it('has the right className', () => {
    let className = component.props.className;
    assert.equal(className, 'generator__step-one');
  });
});
