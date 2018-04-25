import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Rating from 'react-rating';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

import algoliaLogo from '../assets/algolia-mark-blue.svg';
import Emphasis from './Emphasis';
import { isFree } from '../api/utils';

const styles = theme => ({
  item: {
    marginBottom: 20
  },
  avatar: {
    backgroundColor: theme.palette.grey[400],
  },
  price: {
    flex: '1 0 auto',
    textAlign: 'right'
  },
  chip: {
    backgroundColor: theme.palette.primary.light,
    color: 'white'
  },
  install: {
    flex: 1,
    textAlign: 'right'
  },
  icon: {
    fontSize: 16
  }
});

const isDev = process.env.NODE_ENV === 'development';

const Results = ({ content, classes }) => (
  <List>
    {content.map((entry) => (
      <div className={classes.item} key={`result-${entry.objectID}`}>
        <ListItem>
          <Avatar className={classes.avatar} src={isDev ? algoliaLogo : entry.image} imgProps={{
            onError: (evt) => evt.target.setAttribute('src', algoliaLogo)
          }}/>
          <ListItemText primary={(
            <Emphasis value={entry._highlightResult.name.value} />
          )} secondary={(
            <Fragment>
              <Emphasis value={entry._highlightResult.category.value} />
            </Fragment>
          )} />
          <div className={classes.price}>
            <Chip
              className={isFree(entry.price) ? classes.chip : ''}
              label={isFree(entry.price) ? 'FREE' : entry.price}
            />
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <Rating
            initialRating={entry.rating}
            emptySymbol={<Icon color="disabled">star</Icon>}
            fullSymbol={<Icon color="primary">star</Icon>}
            fractions={2}
            readonly
          />
          <Typography variant="caption">({entry.ratingCount} votes)</Typography>
          <div className={classes.install}>
            <Button href={entry.link} color="default" size="small">
              Install
              <Icon className={classes.icon}>file_download</Icon>
            </Button>
          </div>
        </ListItem>
      </div>
    ))}
  </List>
);

Results.propTypes = {
  content: PropTypes.array.isRequired
};

export default withStyles(styles)(Results);