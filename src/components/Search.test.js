import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

const noop = () => {};

describe('(Component) Search', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Search onChange={noop}/>).toJSON();

    expect(tree).toMatchSnapshot();
  })
});