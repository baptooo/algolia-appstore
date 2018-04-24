import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import SelectFacet from './facets/SelectFacet';

const Facet = ({ name, values, onChange }) => {
  switch(name) {
    case 'category':
    default:
      return <SelectFacet name={name} values={values} onChange={onChange} />;
  }
};

const styles = theme => ({
  facet: {
    margin: '25px 0'
  }
});

const Facets = ({ facets, toggleFacet, classes }) => (
  <Fragment>
    {facets.map(({ name, values }) => (
      <div className={classes.facet}>
        <Facet key={`facet-${name}`} name={name} values={values} onChange={toggleFacet}/>
      </div>
    ))}
  </Fragment>
);

Facets.propTypes = {
  facets: PropTypes.array.isRequired,
  toggleFacet: PropTypes.func.isRequired
};

export default withStyles(styles)(Facets);