// modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// local
const config = require('./config');
const { create, read, del } = require('./appstore');

const app = express();

// Using bodyParser to handle JSON from requests
app.use(bodyParser.json());
// Disable cors
app.use(cors());

/**
 * Simple wrapper to share configuration for each action
 * @param action
 * @returns {function(*=, *)}
 */
const apiWrapper = (action) => async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  try {
    const result = await action(req);

    res.end(JSON.stringify(result));
  } catch (err) {
    res.end(JSON.stringify(err));
  }
};

// Search for a term
app.get(`${config.baseUrl}${config.endpoints.apps}`, apiWrapper(req => read(req.query.term)));

// Create a new entry
app.post(`${config.baseUrl}${config.endpoints.apps}`, apiWrapper(
  req => create(req.body).then(({ objectID }) => ({ objectID }))
));

// Delete an existing entry
app.delete(`${config.baseUrl}${config.endpoints.apps}/:id`, apiWrapper(req => del(req.params.id)));

/**
 * Launch express server on the port specified in the "config.json" file
 */
app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`API started at http://localhost:${config.port}`);
  }
});