# Webpack Template

A template to use Webpack@4.41.2 to build ES6 code into ES5.
__This template includes [Bootstrap 4.3.1](https://getbootstrap.com/docs/4.3/layout/overview/) and [jQuery 3.4.1](https://api.jquery.com/)__

## Reccomendations

* Use [VS Code](https://code.visualstudio.com/) to edit the project
* Use the integrated terminal inside of VS Code to run commands (accessed by clicking the Terminal tab and then New Terminal)
    * If you open the project folder in VS Code (the top level folder with the package.json file), the integrated terminal will start in the project folder so you don't need to `cd`

## Installation

1. Install [NodeJS](https://nodejs.org/en/) if you do not already have it (LTS version recommended)
1. Clone or download the repo
1. Open a terminal and `cd` to this folder
    * For MacOS, open Terminal
    * For Windows, open Powershell or Command Prompt
    * Alternatively, use the integrated terminal in VS Code
1. Run the command `npm install`

## Usage

1. Build the project
    * Run the command `npm run build` to compile the project one time
    * Run the command `npm run watch` to automatically recompile the project every time you save
1. Open `./index.html` in your web browser

## Included Libraries
### Bootstrap
You can use css classes from [Bootstrap 4.3.1](https://getbootstrap.com/docs/4.3/layout/overview/) anywhere in the project

### jQuery
You can use functions from [jQuery 3.4.1](https://api.jquery.com/) anywhere in the JavaScript code

### ESLint
ESLint is a library that helps to maintain a standard code formatting and is used in many corporate settings.
I have provided an example lint file that enforces certain whitespace and syntax rules on the code.
* To see how your code compares to the lint rules, run the command `npm run lint -s`
* To automatically fix some types of lint errors, run `npm run lint -s -- --fix`
* There is also an [ESLint VS Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) that will show lint errors in the code editor

## License
[MIT](https://choosealicense.com/licenses/mit/)