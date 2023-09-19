# Create React Web App (CLI) [![NPM](https://img.shields.io/npm/v/react-usehooks-ts.svg)](https://www.npmjs.com/package/create-react-web-app)

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png)

## Introduction

**Create React Web App** is a command-line tool that simplifies the process of setting up a new React web application. With just a few commands, you can quickly initialize a new React project and start building your web application.

## Features

- Easy project initialization.
- Opinionated project structure for rapid development.
- Preconfigured webpack and Babel settings.
- Integration with popular tools like ESLint and Prettier.
- Ready-to-use development server with hot reloading.

## Installation

To use **Create React Web App**, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can install this CLI tool globally using npm:

```bash
npx create-react-web-app myapp
```
# CLI Development Guide
>Are you curious about how this CLI works behind the scenes?  Would you like to develop your own custom React CLI effortlessly using NX, a powerful open-source build system? This guide will walk you through the process of creating, testing, and publishing your CLI library. 

## Let's dive in!🔥

## Table of Contents
- [Local Development](#local-development)

## Create nx work space for developing CLI
```sh
npx create-nx-plugin@latest create-react-web-app-cli --create-package-name=create-react-web-app
```
```sh
npm install
```
Add Run Scripts to package.json
```sh
  "scripts": {
    "start-local-npm-registry": "npx nx local-registry",
    "local-publish": "npx nx run-many -t publish"
  },
```
## Local Deployment
> Before publishing your CLI, it's essential to test it locally. here we are going to use  [Verdaccio](https://verdaccio.org/)

1. Start a local repository:
   ```sh
   npm run start-loacl-npm-registry
   ```
2. Publish Your Package to Local Registry:
   ```sh
   npm run local-publish -- --ver 1.0.1 --tag latest
   ```
   This Command  will also  link your Package <npm link pacage-name> in your Local Machine
## Test Your Package
```sh
npm create-web-app test
```
## Now time to push on prod 🥳 ([NPM Registry](https://www.npmjs.com/))
>You must have NPM Account! if Not Go to the NPM site and create One!

Check the base Project Package.json name … it will be the name of your package
> check the package name availability on the NPM
#### Now do the entry [ in package.json ] of 
> files ( which file to ship on registry)
```sh
"files": [
    "dist/**/*"
  ],
```
> entry points
```sh
"bin": {
    "create-web-apps": "dist/packages/create-web-apps/bin/index.js"
  }
```
### If Everything Done then Publish to NPM
> ⚠️ check npm config it should point to NPM Registry
```sh
npm config get registry
npm config set registry https://registry.npmjs.org/
```
```sh
npm login
```
> will redirect to Browser for Login Guide
> ⚠️ And Now Remove private:true from your Package.json if any

```sh
npm publish --access=public
```
> Cheers! 🍻 Its All Done ✅   !  Happy  Coding  😊

## Command you may need!
```sh
npm cache clean --force
```