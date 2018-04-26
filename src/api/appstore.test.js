import appstore, {
  setQuery,
  addOrUpdateFacet,
  clearRefinements,
  removeFacet,
  getRefinements
} from './appstore';
import algoliasearchHelper from 'algoliasearch-helper';

// Get the singleton for tests
const helper = algoliasearchHelper();

describe('(API) appstore', () => {
  it('should bind the given callback', () => {
    appstore(() => {});

    expect(helper.on).toHaveBeenCalled();
    expect(helper.search).toHaveBeenCalled();
  });

  it('should call setQuery', () => {
    setQuery('foo');

    expect(helper.setQuery).toHaveBeenCalledWith('foo');
  });

  describe('addOrUpdateFacet', () => {
    it('should call addNumericRefinement', () => {
      addOrUpdateFacet('rating', 1);

      expect(helper.addNumericRefinement).toHaveBeenCalledWith('rating', '<=', 1);
      expect(helper.search).toHaveBeenCalled();
    });

    it('should call addFacetRefinement', () => {
      addOrUpdateFacet('category', 'foobar');

      expect(helper.addFacetRefinement).toHaveBeenCalledWith('category', 'foobar');
      expect(helper.search).toHaveBeenCalled();
    });
  });

  it('should call clearRefinements and search', () => {
    clearRefinements();

    expect(helper.clearRefinements).toHaveBeenCalled();
    expect(helper.search).toHaveBeenCalled();
  });

  describe('removeFacet', () => {
    it('should call removeNumericRefinement', () => {
      removeFacet('rating', [1]);

      expect(helper.removeNumericRefinement).toHaveBeenCalledWith('rating', '<=', 1);
      expect(helper.search).toHaveBeenCalled();
    });

    it('should call removeFacetRefinement', () => {
      removeFacet('category', 'foobar');

      expect(helper.removeFacetRefinement).toHaveBeenCalledWith('category', 'foobar');
      expect(helper.search).toHaveBeenCalled();
    });
  });

  it('should call getRefinements', () => {
    const refinements = getRefinements('rating');

    expect(helper.getRefinements).toHaveBeenCalled();
    expect(refinements).toEqual(['refinement-mock-rating'])
  });
});