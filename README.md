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

The last step is install the version of the content that you want to see in your portal. It can also be done using content from MASTER, branch, tag, or a specific commit.

### Installing content from MASTER

`yarn add ssh:git@github.com:wmews-hw/documentation`

### Installiing content from branches

`yarn add ssh:git@github.com:wmews-hw/documentation#branch-test`

### Installing content from tag

`yarn add ssh:git@github.com:wmews-hw/documentation#v1.0.1`


> **NOTE:** Before installing a content make sure you have removed the previous in case there is a `documentation` already installed: 
> `yarn remove documentation`

## Build and Deploy

To build and deploy you can simply call:

`yarn start`

It will automatically open your browser.
