import React from 'react';
import renderer from 'react-test-renderer';
import Emphasis from './Emphasis';

describe('(Component) Emphasis', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Emphasis value={'<em>Foo</em> bar'} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});