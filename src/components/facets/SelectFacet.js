import React from 'react';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Chip from 'material-ui/Chip';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

const SelectFacet = ({ name, values, onChange }) => {
  const currentValue = values.find(({ isRefined }) => isRefined === true);

  return currentValue ? (
    <FormControl>
      <Chip
        label={currentValue.name}
        onDelete={() => onChange(name, currentValue.name)}
      />
    </FormControl>
  ) : (
    <FormControl style={{ minWidth: "100%" }}>
      <InputLabel htmlFor={`facet-${name}`}>{name}</InputLabel>
      <Select
        value={currentValue ? currentValue.name : ''}
        onChange={(evt) => onChange(name, evt.target.value)}
        inputProps={{
          name,
          id: `facet-${name}`,
        }}
      >
        {values.map(({ name: value }) => (
          <MenuItem key={`facet-${name}-${value}`} value={value}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFacet;