import React from 'react';
import renderer from 'react-test-renderer';
import RatingFacet from './RatingFacet';

const noop = () => {};
const facets = new Array(5).fill({}).map((facet, idx) => ({
  name: idx,
}));

describe('(Component) RatingFacet', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<RatingFacet name="rating" values={facets} addOrUpdateFacet={noop}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});