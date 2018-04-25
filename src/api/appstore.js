import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const client = algoliasearch('M459FLKD3F', '593c7f08ca056557d302c2b5850ca548');
const helper = algoliasearchHelper(client, 'appstore', {
  facets: ['category', 'rating', 'price']
});

export const setQuery = (term) => helper.setQuery(term).search();

export const addOrUpdateFacet = (name, value) => {
  if (helper.hasRefinements(name)) {
    const [refinement] = helper.getRefinements(name);

    if (refinement.value !== value.toString()) {
      helper.removeFacetRefinement(name, refinement.value);
    }
  }

  helper.addFacetRefinement(name, value).search();
};

export const removeFacet = (name, value) => {
  helper.removeFacetRefinement(name, value).search();
};

export const getRefinements = (name) => {
  return helper.getRefinements(name);
};

export default (updateContent) => {
  // Subscribe to "result" event to update application store
  helper.on('result', updateContent);

  // Perform the initial search to have content
  helper.search();
}