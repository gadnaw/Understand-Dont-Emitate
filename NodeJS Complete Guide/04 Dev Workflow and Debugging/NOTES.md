# Workflow configuration (Best practice)
1. npm init
1. edit package.json to add "start": "node app.js"
1. npm install -g nodemon 
1. edit to "start": "nodemon app.js"
1. DEBUGGING: --> automatic restart in saved while debugging
    1. go to View>Explorer
    1. got to Run>Add configuration 
        - this will add ".vscode" folder in the explorer
        - edit launch.json and add "restart": true
        - add "runtimeExecutable": "nodemon"
        - add "console": "integratedTerminal"

## npm options:
- production
   - --save 
- development
    - --save-dev
- installing tools in machine (i.e. nodemon)
    - -global
    - -g
- examples:
    1. to install nodemon on development dependencies
        - npm install nodemon --save-dev
    2. to install globally
        - npm install nodemon -g
## ----------------------------------------------------------------
# Debugging

## Types of Errors
1. Syntax Error
1. Logical Errors
1. Runtime Errors

## Debugging:
1. read and analyze the error message
1. line break point and press "Run Debug" or "F5"
    - use Watch, Call Stack, and Variables
    - step through, step in and step out
    - hover mouse to variables in codes to see the values
    - DEBUG CONSOLE
        - type variables at the console
    - you can edit values in **Variables Panel**
    - you can add variables in **Watch Panel**
    


