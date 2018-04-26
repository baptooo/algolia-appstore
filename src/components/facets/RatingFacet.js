import React from 'react';
import PropTypes from "prop-types";
import Rating from 'react-rating';
import Icon from 'material-ui/Icon';

const RatingFacet = ({ name, values, addOrUpdateFacet }) => {
  let initialValue = parseFloat(values[values.length - 1].name);

  return (
    <Rating
      initialRating={initialValue}
      emptySymbol={<Icon color="disabled">star</Icon>}
      fullSymbol={<Icon color="primary">star</Icon>}
      fractions={2}
      onChange={(rate) => addOrUpdateFacet(name, rate)}
    />
  )
};

RatingFacet.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  addOrUpdateFacet: PropTypes.func.isRequired
};

export default RatingFacet;