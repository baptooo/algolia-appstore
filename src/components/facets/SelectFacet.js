import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';

const SelectFacet = ({ name, values, addOrUpdateFacet }) => {
  const currentValue = values.find(({ isRefined }) => isRefined === true);

  return currentValue ? (
    <Typography variant="caption">({currentValue.count} results)</Typography>
  ) : (
    <FormControl style={{ minWidth: "100%" }}>
      <Select
        value={currentValue ? currentValue.name : ''}
        displayEmpty
        onChange={(evt) => addOrUpdateFacet(name, evt.target.value)}
        inputProps={{
          name,
          id: `facet-${name}`,
        }}
      >
        <MenuItem value="">Choose a {name}</MenuItem>
        {values.map(({ name: value }) => (
          <MenuItem key={`facet-${name}-${value}`} value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectFacet.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  addOrUpdateFacet: PropTypes.func.isRequired
};

export default SelectFacet;