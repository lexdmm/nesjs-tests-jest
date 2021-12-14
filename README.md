<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

Dockerization of a NestJS typescript project

## About Docker
- You don't need to have testing or development facilities right on your PC
- Avoid headaches when you want to run a different version, issues compatibilities
- Testing a new technology without installing it on your machine

### Dockerfile 
Serves to upload our api, I upload only an image with a container

### Docker-compose
It is always side by side with the doker and helps to manage several images and containers, it helps to keep it more organized with only what we need to make it work

### Docker Hub
It's like the github of the doker images. We were able to download and upload our images there. There are already many images that can be seen in the docker hub, each one has documentation on how to use

## Prerequisites to run

Have installed the following
- Docker https://docs.docker.com/get-docker/
- VSCode https://code.visualstudio.com/download

For WSL2 to use https://docs.docker.com/engine/install/ubuntu/ other distros in same page.

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
