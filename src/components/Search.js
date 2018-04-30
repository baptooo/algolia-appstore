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

const debounce = (fn, delay, timeout) => (...args) => {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(fn, delay, ...args);
};

class Search extends React.Component {
  constructor(props) {
    super(props);

    // Debounce search field for general performance
    this.onChange = debounce(this.props.onChange.bind(this), 300);
  }
  render() {
    const { classes, query } = this.props;

    return (
      <div style={{ textAlign: 'center' }}>
        <TextField
          defaultValue={query}
          className={classes.textField}
          name="term"
          label="Search for an app by name"
          onChange={(evt) => this.onChange(evt.target.value)}
          inputProps={{
            autoComplete: 'off'
          }}
        />
      </div>
    )
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Search);