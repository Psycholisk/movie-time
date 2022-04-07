# Setup Guide

## Install and Run the App

### Clone and Install

In order to run the app locally, you need to first clone the repo from github

```
git clone https://github.com/Psycholisk/movie-time.git
```

The next step is to install the dependencies by running

```
npm run install
```

You then need to setup your local environement variables by following the next section.

### Setup Environment Variables

Before you go ahead and run the app on your machine:

1. Copy your `.env.local.example` into `.env.local` or simply run the following command

```
cp .env.local.example .env.local
```

2. Add the missing env variables' values

### Run the app

Finally, you can now run the app by running

```
npm run start
```

## Pre-commit Hook

In order to keep the code style and standards consistant, a pre-commit hook has been setup using `Husky` to run the following commands before any commit:

1. npm run prettier:check
2. npm run lint
3. npm run test:ci

If any of the above fails, the commit will fail.
Refer to the [pre-commit configuration file] (/.husky/pre-commit) to customise it.

**In order to run the tests and other commands manually, refer to the [Available Scripts](/README.md#available-scripts)**
