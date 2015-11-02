import assert from 'assert';
import createComponent from './utils/create-component';

import GeneratorPriorityTable from
  '../app/scripts/components/generator-priority-table.react';

describe('Generator Priority Table', () => {
  let component;

  beforeEach(() => {
    component = createComponent(GeneratorPriorityTable);
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
