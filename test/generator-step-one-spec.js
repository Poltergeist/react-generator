import assert from 'assert';
import createComponent from './utils/create-component';

import GeneratorStepOne from
  '../app/scripts/components/generator-step-one.react';

describe('Generator Step One', () => {
  let component;

  beforeEach(() => {
    component = createComponent(GeneratorStepOne);
  });

  it('has the right className', () => {
    let className = component.props.className;
    assert.equal(className, 'generator__step-one');
  });
});
