<p align="center">
  <a href="https://jestjs.io/pt-BR/docs/getting-started" target="blank"><img src="https://raw.githubusercontent.com/facebook/jest/main/website/static/img/jest-readme-headline.png" width="320" alt="jest Logo" /></a>
</p>

## Description

How to create tests with NestJS and Jest

### F.I.R.S.T

Use the FIRST concept to develop your unit tests: 
- Fast: The test must be quick;
- Independent: One test cannot impact the other, it cannot depend on an agent that changes as a database;
- Repeatable: It must be deterministic, that is, always return the same result;
- Self Validation: it must not allow for interpretation, it makes simple validations, it must be objective, passed or not;
- Timely: It sends the time, it must be developed at the right time. Before the application goes into production, or before developing the feature. 

## Prerequisites to run

Have installed the following
- Docker https://docs.docker.com/get-docker/
- VSCode https://code.visualstudio.com/download

For WSL2 to use https://docs.docker.com/engine/install/ubuntu/ other distros in same page.

## How to runnings tests

```bash
$ npm run test:cov
```
Before open folder *coverage/index.html* to watch coverage results

## Installation

If you to change some code in project, use the param *--buid* to the rebuild container with your changes
```bash
$ docker-compose up --build
```

## Running the app without docker (need postgres installed)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
Open project on http://localhost:3000/graphql
