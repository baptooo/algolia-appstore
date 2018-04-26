import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

const addAPI = obj => ({
  ...obj,
  getRefinements: () => ([]),
  getFacetValues: () => ([])
});

const mockNoResults = addAPI({
  hits: [],
  facets: [],
  nbHits: 0,
});

const mockResults = addAPI({
  hits: new Array(5).fill({}).map((result, idx) => ({
    name: `app-${idx}`,
    objectID: idx,
    _highlightResult: {
      name: { value: `app-${idx}` },
      category: { value: `app-${idx}` }
    }
  })),
  facets: new Array(5).fill({}).map((facet, idx) => ({ name: `facet-${idx}` })),
  nbHits: 4,
});

describe('(Component) App', () => {
  it('should render correctly with no result', () => {
    const tree = renderer.create(<App content={mockNoResults}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with results', () => {
    const tree = renderer.create(<App content={mockResults}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
