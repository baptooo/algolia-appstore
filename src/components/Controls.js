import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  navButton: {
    minWidth: 30
  }
});

const NAV_LENGTH = 7;

const Controls = ({ content, clear, setIndex, setPage, classes }) => {
  const isRatingAsc = content.index === 'appstore';
  const activeStep = content.page;
  const numPages = content.nbPages;
  const navLength = Math.min(numPages, NAV_LENGTH);
  const showNavigation = navLength && numPages > 1;
  const pages = new Array(navLength)
    .fill(0).map((zero, idx) => Math.min(numPages - navLength - 1, activeStep) + idx + 1);

  return (
    <section>
      <Typography variant="headline">
        {content.nbHits} results
        <Button onClick={() => {
          setIndex(isRatingAsc ? 'appstore_orderByRating' : 'appstore');
        }}>
          {isRatingAsc ? (
            <Fragment>
              Rating (DESC)
              <Icon>arrow_drop_down</Icon>
            </Fragment>
          ) : (
            <Fragment>
              Rating (ASC)
              <Icon>arrow_drop_up</Icon>
            </Fragment>
          )}
        </Button>
      </Typography>
      {showNavigation ? (
        <div className={classes.navigation}>
          <Typography variant="caption">Page {activeStep + 1} / {numPages}</Typography>
          <Button className={classes.navButton} size="small" onClick={() => setPage(0)} disabled={activeStep === 0}>
            <Icon>fast_rewind</Icon>
          </Button>
          <Button className={classes.navButton} size="small" onClick={() => setPage(activeStep - 1)} disabled={activeStep === 0}>
            <Icon>navigate_before</Icon>
          </Button>
          {pages.map(page => (
            <Button
              disabled={activeStep === page}
              className={classes.navButton}
              size="small"
              key={`controls-page-${page}`}
              onClick={() => setPage(page)}
            >{page + 1}</Button>
          ))}
          <Button className={classes.navButton} size="small" onClick={() => setPage(activeStep + 1)} disabled={activeStep === numPages - 1}>
            <Icon>navigate_next</Icon>
          </Button>
          <Button className={classes.navButton} size="small" onClick={() => setPage(numPages - 1)} disabled={activeStep === numPages - 1}>
            <Icon>fast_forward</Icon>
          </Button>
        </div>
      ) : null}
      {content.nbHits === 0 ? (
        <Button onClick={() => clear()}>
          Clear <Icon>clear_all</Icon>
        </Button>
      ) : null}
    </section>
  );
}

Controls.propTypes = {
  content: PropTypes.object.isRequired,
  clear: PropTypes.func,
  setIndex: PropTypes.func,
  setPage: PropTypes.func
};

export default withStyles(styles)(Controls);