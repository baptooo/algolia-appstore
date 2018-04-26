import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import Rating from 'react-rating';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';

class RatingFacet extends React.Component {
  state = {
    count: 0
  };

  updateResults(rate) {
    const facet = this.props.values.find(facet => +facet.name === rate);

    this.setState({ count: facet ? facet.count : undefined });
  }

  render() {
    const { name, values, addOrUpdateFacet } = this.props;
    const currentFacet = values[values.length - 1];
    const initialValue = parseFloat(currentFacet.name);
    const count = this.state.count || currentFacet.count;

    return (
      <Fragment>
        <Rating
          initialRating={initialValue}
          emptySymbol={<Icon color="disabled">star</Icon>}
          fullSymbol={<Icon color="primary">star</Icon>}
          fractions={2}
          onHover={(rate) => this.updateResults(rate)}
          onChange={(rate) => addOrUpdateFacet(name, rate)}
        />
        <Typography variant="caption">({count} results)</Typography>
      </Fragment>
    );
  }
}

RatingFacet.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  addOrUpdateFacet: PropTypes.func.isRequired
};

export default RatingFacet;