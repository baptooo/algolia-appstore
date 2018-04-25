import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

import algoliaLogo from '../assets/algolia-mark-blue.svg';
import Emphasis from './Emphasis';

const styles = theme => ({
  title: {

  },
  avatar: {
    backgroundColor: theme.palette.grey[400]
  }
});

const isDev = process.env.NODE_ENV === 'development';

const Results = ({ content, classes }) => (
  <List>
    {content.map((entry) => (
      <ListItem key={`result-${entry.objectID}`}>
        <Avatar className={classes.avatar} src={isDev ? algoliaLogo : entry.image} imgProps={{
          onError: (evt) => evt.target.setAttribute('src', algoliaLogo)
        }}/>
        <ListItemText primary={(
          <Emphasis value={entry._highlightResult.name.value} />
        )} secondary={(
          <Fragment>
            <Emphasis value={entry._highlightResult.category.value} /> - {entry.rating} / 5
          </Fragment>
        )} />
      </ListItem>
    ))}
  </List>
);

Results.propTypes = {
  content: PropTypes.array.isRequired
};

export default withStyles(styles)(Results);