import assert from 'assert'
import Generator from '../app/scripts/components/generator.react'
import createComponent from './utils/create-component'

describe('Generator', () => {
  let component,
    content = {
      title: 'title',
      subline: 'subline'
    };
  beforeEach(() => {
    component = createComponent(Generator, content);
  });
  it('has the right class name', () => {
    let className = component.props.className;
    assert.equal(className, 'generator');
  })
  it('has the right title', () => {
    let title = component.props.children[0];
    assert.equal(title.props.children, content.title);
  });
  it('has the right subline', () => {
    let subline = component.props.children[1];
    assert.equal(subline.props.children, content.subline);
  });
});
