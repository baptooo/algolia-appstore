# Algolia appstore APP

[![Build Status](https://travis-ci.org/baptooo/algolia-appstore.svg?branch=master)](https://travis-ci.org/baptooo/algolia-appstore)

- [Presentation](#presentation)
- [Getting started](#getting-started)
- [Demo](#demo)
- [Commands](#commands)
- [Deploy](#deploy)

# Presentation

This project is done for the [algolia assignment](https://gist.github.com/vvo/08850adfc3736869f04bcf5586418add#-pointers) for **JavaScript Open Source Software Engineer**

# Getting started

1. Clone the repo

```sh
$ git clone git@github.com:baptooo/algolia-appstore.git
```

2. Install the dependencies

```sh
$ yarn | npm install
```

# Demo

You can view the frontend project here on surge : [brc-algolia-appstore.surge.sh](https://brc-algolia-appstore.surge.sh/)

# Commands

**Run the backend project** with `yarn api`

**Run the frontend project** with `yarn start`

**Run tests** with `yarn test`

# Deploy

The project is deployed by travis whenever a tag is created.
To create a tag, you just need to use `yarn version` and:

- choose for a new version as `yarn version` is in interactive mode
- a changelog will be generated
- a commit and a tag of the new version will be created

You can then push the result to deploy