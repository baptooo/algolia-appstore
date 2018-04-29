import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

import { setQuery, addOrUpdateFacet, removeFacet, clearRefinements } from './api/appstore';
import Search from './components/Search';
import Facets from './components/Facets';
import Results from './components/Results';
import Controls from './components/Controls';

const styles = theme => ({
  main: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: 24
  },
  title: {
    margin: '25px 0 10px',
    color: theme.palette.grey[600],
  },
  link: {
    color: theme.palette.primary.light,
  }
});

class App extends Component {
  state = {
    drawerOpened: false
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpened: !this.state.drawerOpened })
  };

  render() {
    const { content, classes } = this.props;

    const facets = content.facets.map(({name}) => ({
      name,
      values: content.getFacetValues(name, {
        sortBy: ['name:asc']
      })
    }));
    const refinements = content.getRefinements();

    const facetsContent = (
      <Facets
        addOrUpdateFacet={addOrUpdateFacet}
        removeFacet={removeFacet}
        facets={facets}
        refinements={refinements}
      />
    );

    return (
      <main className={classes.main}>
        <Grid container spacing={24}>
          <Grid item sm={4}>
            <Typography className={classes.title} variant="headline" component="h1">
              <span>Appstore search</span>&nbsp;<a
                className={classes.link}
                href={`https://github.com/baptooo/algolia-appstore/releases/tag/v${process.env.REACT_APP_VERSION}`}
                target="_blank"
              >v{process.env.REACT_APP_VERSION}</a>
            </Typography>
            <img src="https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg" width="120" alt=""/>
          </Grid>
          <Grid item sm={8} xs={12}>
            <Grid container alignItems="baseline">
              <Grid item xs={2} className="bp-small">
                <IconButton onClick={this.handleDrawerToggle}>
                  <Icon>menu</Icon>
                </IconButton>
              </Grid>
              <Grid item sm={12} xs={10}>
                <Search onChange={setQuery} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} className="bp-large">
            {facetsContent}
          </Grid>
          <Grid item xs={12} sm={8}>
            <Controls clear={clearRefinements} content={content}/>
            {content.hits.length ? <Results content={content.hits}/> : null}
          </Grid>
        </Grid>

        {process.env.NODE_ENV !== 'test' ? (
          <Drawer
            open={this.state.drawerOpened}
            anchor="left"
            variant="temporary"
            onClose={this.handleDrawerToggle}
            ModalProps={{
              keepMounted: true
            }}
          >{facetsContent}</Drawer>
        ) : null}
      </main>
    );
  }
}



export default withStyles(styles)(App);
