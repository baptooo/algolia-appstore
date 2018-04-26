import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

const Controls = ({ content, clear }) => (
  <section>
    <Typography variant="headline">
      {content.nbHits} results
    </Typography>
    {content.nbHits === 0 ? (
      <Button onClick={() => clear()}>
        Clear <Icon>clear_all</Icon>
      </Button>
    ) : null}
  </section>
);

Controls.propTypes = {
  content: PropTypes.object.isRequired
};

export default Controls;