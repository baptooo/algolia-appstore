import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

import SelectFacet from './facets/SelectFacet';
import RatingFacet from './facets/RatingFacet';

const Facet = (props) => {
  switch(props.name) {
    case 'rating':
      return <RatingFacet {...props} />;
    case 'category':
    default:
      return <SelectFacet {...props} />;
  }
};

const styles = theme => ({
  facet: {
    margin: '50px 0'
  },
  title: {
    textTransform: 'capitalize',
    color: theme.secondary,
    margin: '10px 0',
  },
  chip: {
    marginLeft: 8
  }
});

const Facets = ({ facets, refinements, addOrUpdateFacet, removeFacet, classes }) => (
  <Fragment>
    {facets.map(({ name, values }) => {
      const hasRefinement = refinements.find(refinement => refinement.attributeName === name);
      return (
        <div className={classes.facet} key={`facet-${name}`}>
          <Typography
            className={classes.title}
            variant="headline"
            component="h2"
          >
            {name}
            <span className={classes.chip}>
              {hasRefinement ? (
                <Chip
                  label={hasRefinement.name}
                  onDelete={() => removeFacet(name, hasRefinement.name)}
                >Reset</Chip>
              ) : null}
            </span>
          </Typography>
          <Facet name={name} values={values} addOrUpdateFacet={addOrUpdateFacet} removeFacet={removeFacet} />
        </div>
      );
    })}
  </Fragment>
);

Facets.propTypes = {
  facets: PropTypes.array.isRequired,
  refinements: PropTypes.array.isRequired,
  addOrUpdateFacet: PropTypes.func.isRequired,
  removeFacet: PropTypes.func.isRequired
};

export default withStyles(styles)(Facets);