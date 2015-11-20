import assert from 'assert';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import GeneratorPriorityTable from
  '../app/scripts/components/generator-priority-table.react';

describe('Generator Priority Table', () => {
  let component, renderer,
    props = {
      dispatch: () => {},
      funds: [
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 }
      ],
      attributePoints: [{}, {}, {}, {}, {}],
      skillPoints: [{}, {}, {}, {}, {}],
      metaTypes: [{ metaTypes: [] }, { metaTypes: [] }, { metaTypes: [] },
        { metaTypes: [] }, { metaTypes: [] }],
      magicOrResonance: [{ archeTypes: [] }, { archeTypes: [] },
        { archeTypes: [] }, { archeTypes: [] }, { archeTypes: [] }]
    };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<GeneratorPriorityTable {...props}/>);
    component = renderer.getRenderOutput();
  });

  it('has the right className', () => {
    let className = component.props.className;
    assert.equal(className, 'generator__priorities-table');
  });

  it('is a table element', () => {
    let type = component.type;
    assert.equal(type, 'table');
  });

  it('has the right header', () => {
    let header = component.props.children[0].props.className;

    assert.equal(header, 'generator__priorities-header');
  });
});
