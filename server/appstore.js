const algoliaSearch = require('algoliasearch');

// TODO : env variables
const client = algoliaSearch('M459FLKD3F', 'd501ae2872cc97cabb0333e1c9fbf6f5');

const index = client.initIndex('appstore');

/**
 * Create a new entry in the Algolia index
 * @param {object} entry - The entry that we want to push in Algolia index
 * @returns {Promise}
 */
exports.create = (entry = {}) => index.addObject(entry);

/**
 * Search in Algolia index for the given term
 * @param {string} term
 */
exports.read = (term = '') => index.search(term);

/**
 * Delete an entry from the Algolia index with the given objectId
 * @param objectId
 * @returns {*}
 */
exports.del = (objectId = '') => index.deleteObject(objectId);