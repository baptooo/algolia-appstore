import React from 'react';
import renderer from 'react-test-renderer';
import SelectFacet from "./SelectFacet";

const noop = () => {};
const categories = new Array(5).fill({}).map((facet, idx) => ({
  name: `category-${idx}`,
}));

describe('(Component) SelectFacet', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<SelectFacet name="category" values={categories} addOrUpdateFacet={noop}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});