import React from 'react';
import SafelySetInnerHTML from 'safely-set-inner-html';
import { withStyles } from 'material-ui/styles';

const instance = new SafelySetInnerHTML({
  ALLOWED_TAGS: ['em'],
  ALLOWED_ATTRIBUTES: ['className']
});

const styles = theme => ({
  emphasis: {
    borderWidth: '0 0 2px 0',
    borderColor: '#00AEFF',
    borderStyle: 'solid',
    padding: '2px 4px'
  }
});

const Emphasis = ({ value, classes }) => (
  <span>{instance.transform(value.replace(/<em/g, `<em className=${classes.emphasis}`))}</span>
);

export default withStyles(styles)(Emphasis);