![Node.js CI](https://github.com/wmews-hw/documentation-framework/workflows/Node.js%20CI/badge.svg?branch=master)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# POC Documentation Portal

The intenton of this project is to simulate the proceess of releasing a new version of a documentation portal. The documentation portal is composed by two projects:
* Documentation framework (this project)
* [Documentation Content](https://github.com/wmews-hw/documentation-framework)

> A deployment needs both framework and content to be able of correclty build and deploy.

## Clone framework

First thing to do is clone what is the version of the framework that you want to use. It can be MASTER, branch, tags, or commit.

### Clonning MASTER

`git clone git@github.com:wmews-hw/documentation-framework.git`

### Clonning Branch/Tag

`git clone -b "v1.0.2" --single-branch --depth 1 git@github.com:wmews-hw/documentation-framework.git`

## Install dependencies

Once you are inside the project folder that you just clonned then you can simply run:

`yarn install`

It will run and download all dependencies defined in the project's `package.json`.

## Install content

The last step is install the version of the content that you want to see in your portal. It can also be done using content from MASTER, branch, tag, commit, or from local.

> **NOTE:** Before installing a content make sure you have removed the previous in case there is a `documentation` already installed: 
> `yarn remove documentation` and/or `yarn unlink documentation`

### Installing content from MASTER

`yarn add ssh:git@github.com:wmews-hw/documentation`

### Installiing content from branches

`yarn add ssh:git@github.com:wmews-hw/documentation#branch-test`

### Installing content from tag

`yarn add ssh:git@github.com:wmews-hw/documentation#v1.0.1`

### Installing from local

To install from local we will need clone the documentation project.

`git clone git@github.com:wmews-hw/documentation.git`

We will create a symbolic link between these two projects using `yarn link`.

First step we need to make the documentation project available inside yarn

`cd documentation`
`yarn link`

Now that it is available we need to link it inside the documentation-framework.

`cd ../documentation-framework`
`yarn link documentation`

You should be able to see inside the `documentation-framework/node_modules` that a symbolic folder of documentation project was create. It will allow us to do hot deploy changes when the framework is running a there is a content change made inside the documentation project.

## Build and Deploy

To build and deploy you can simply call:

`yarn start`

It will automatically open your browser.
