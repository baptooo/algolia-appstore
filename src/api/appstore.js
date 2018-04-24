import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const client = algoliasearch('M459FLKD3F', '593c7f08ca056557d302c2b5850ca548');
const helper = algoliasearchHelper(client, 'appstore', {
  facets: ['category', 'rating', 'price']
});

export const setQuery = (term) => helper.setQuery(term).search();

export const toggleFacet = (name, value) => helper.toggleFacetRefinement(name, value).search();

export default (updateContent) => {
  // Subscribe to "result" event to update application store
  helper.on('result', updateContent);

  // Perform the initial search to have content
  helper.search();
}