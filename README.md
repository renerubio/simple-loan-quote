# React APP simple form to calculate a loan quote

## Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Technologies used](#technologies-used)


## Project structure

```
build/
src/
|- index.js _______________________________ # Application entry
|- index.scss ______________________________ # Application styles
|- skeleton.scss ___________________________ # Application framework styles
|- App.js _________________________________ # Application init
|- helper.js _______________________________ # Utilities functions
|- textos.js _______________________________ # Constant of strings
|  |- components/
|    |- Formulario.js _____________________ # UI application
|    |- Header.js _________________________ # Text preface application
|    |- Mensaje.js ________________________ # UI about notifications
|    |- Resultado.js ______________________ # UI about calc result
|    |- Spinner.js ________________________ # UI loading
|    |- Spinner.scss _______________________ # UI loading styles

```

## Installation

1- Clone repo `git clone git@github.com:renerubio/simple-loan-quote.git`

2- `npm install` to install npm packages


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Technologies used

- [Create React App](https://github.com/facebook/create-react-app)
- [React Hooks](https://github.com/facebook/react)
- [Jest](https://github.com/facebook/jest) [ Unit test]
- [Eslint](https://github.com/eslint/eslint/) with airbnb config

## Author
```js
{
	license: "MIT",
	name: "René Rubio",
	role: "Frontend developer",
	alias: "renerubio",	
	linkedin: "www.linkedin.com/in/rene-rubio"
}
```