import React  from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: '25px 0',
    width: '100%',
  },
  menu: {
    width: 200,
  },
});

const Search = ({ onChange, classes, query }) => (
  <div style={{ textAlign: 'center' }}>
    <TextField
      value={query}
      className={classes.textField}
      name="term"
      label="Search for an app by name"
      onChange={(evt) => onChange(evt.target.value)}
      inputProps={{
        autoComplete: 'off'
      }}
    />
  </div>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Search);