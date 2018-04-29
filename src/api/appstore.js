import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const client = algoliasearch('M459FLKD3F', '593c7f08ca056557d302c2b5850ca548');
const helper = algoliasearchHelper(client, 'appstore', {
  facets: ['category', 'rating', 'price']
});

/**
 * Retrieve the state from the current query string
 */
try {
  const { search = '?' } = window.location;

  if (search) {
    helper.setState(
      algoliasearchHelper.url.getStateFromQueryString(search.slice(1))
    );
  }
} catch (err) {
  console.error(err);
}

// Helpers
const removeFacetWithoutSearch = (name, value) => {
  switch (name) {
    case 'rating':
      return helper.removeNumericRefinement(name, '<=', value[0]);
    default:
      return helper.removeFacetRefinement(name, value);
  }
};

const addFacetWithoutSearch = (name, value) => {
  switch (name) {
    case 'rating':
      return helper.addNumericRefinement(name, '<=', value);
    default:
      return helper.addFacetRefinement(name, value);
  }
};

// API
export const addOrUpdateFacet = (name, value) => {
  if (helper.hasRefinements(name)) {
    const [refinement] = helper.getRefinements(name);

    removeFacetWithoutSearch(name, refinement.value)
  }

  addFacetWithoutSearch(name, value).search();
};

export const removeFacet = (name, value) => {
  removeFacetWithoutSearch(name, value).search();
};

export const getRefinements = (name) => {
  return helper.getRefinements(name);
};

export const setQuery = (term) => helper.setQuery(term).search();

export const clearRefinements = () => helper.clearRefinements().search();

export const setIndex = (name) => helper.setIndex(name).search();

export const setPage = (index) => helper.setPage(index).search();

export default (updateContent) => {
  // Subscribe to "result" event to update application store
  helper.on('result', updateContent);

  // Update current query string whenever a change is done to the state
  helper.on('change', (state) => {
    const queryString = algoliasearchHelper.url.getQueryStringFromState(state);

    window.history.replaceState(null, null, `?${queryString}`);
  });

  // Perform the initial search to have content
  helper.search();
}