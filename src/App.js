import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import { setQuery, addOrUpdateFacet, removeFacet, clearRefinements } from './api/appstore';
import Search from './components/Search';
import Facets from './components/Facets';
import Results from './components/Results';
import Controls from './components/Controls';

const styles = theme => ({
  main: {
    maxWidth: 1000,
    margin: '0 auto'
  },
  title: {
    margin: '25px 0 10px',
    color: theme.palette.grey[600],
  }
});

class App extends Component {
  render() {
    const { content, classes } = this.props;

    const facets = content.facets.map(({name}) => ({
      name,
      values: content.getFacetValues(name, {
        sortBy: ['name:asc']
      })
    }));
    const refinements = content.getRefinements();

    return (
      <main className={classes.main}>
        <Grid container spacing={24}>
          <Grid item sm={4}>
            <Typography className={classes.title} variant="headline" component="h1">
              Appstore search
            </Typography>
            <img src="https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg" width="120" alt=""/>
          </Grid>
          <Grid item sm={8}>
            <Search onChange={setQuery} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Facets
              addOrUpdateFacet={addOrUpdateFacet}
              removeFacet={removeFacet}
              facets={facets}
              refinements={refinements}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Controls clear={clearRefinements} content={content}/>
            {content.hits.length ? <Results content={content.hits}/> : null}
          </Grid>
        </Grid>
      </main>
    );
  }
}



export default withStyles(styles)(App);
