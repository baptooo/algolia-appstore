import React from 'react';
import SafelySetInnerHTML from 'safely-set-inner-html';
import { withStyles } from 'material-ui/styles';

const instance = new SafelySetInnerHTML({
  ALLOWED_TAGS: ['em'],
  ALLOWED_ATTRIBUTES: ['className']
});

const styles = theme => ({
  emphasis: {
    backgroundColor: '#00AEFF',
    color: 'white',
    padding: '2px 4px'
  }
});

const Emphasis = ({ value, classes }) => (
  <span>{instance.transform(value.replace('<em', `<em className=${classes.emphasis}`))}</span>
);

export default withStyles(styles)(Emphasis);