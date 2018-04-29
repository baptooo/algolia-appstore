const algoliasearchHelper = jest.genMockFromModule('algoliasearch-helper');

const SingleTon = {
  hasRefinements: jest.fn(() => false),
  getRefinements: jest.fn((name) => [`refinement-mock-${name}`]),
  clearRefinements: jest.fn(() => SingleTon),

  addNumericRefinement: jest.fn(() => SingleTon),
  removeNumericRefinement: jest.fn(() => SingleTon),

  addFacetRefinement: jest.fn(() => SingleTon),
  removeFacetRefinement: jest.fn(() => SingleTon),

  on: jest.fn(() => SingleTon),
  search: jest.fn(() => SingleTon),
  setQuery: jest.fn(() => SingleTon),
  setIndex: jest.fn(() => SingleTon),
  setPage: jest.fn(() => SingleTon),
}

module.exports = () => SingleTon;