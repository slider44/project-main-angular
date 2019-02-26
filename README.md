# ProjectMain

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#STEPS

ng new project-main --routing --style scss

ng i ng-bootstrap

npm install bootstrap font-awesome 

npm install --save @ng-bootstrap/ng-bootstrap

npm install --save @angular/material @angular/cdk @angular/animations

npm install --save angular-in-memory-web-api -- This module simulates a backend web application

ng generate module ui --module app.module -- create separate ui module that can be inported to main app.module


#STEPS TO PUBLISH


git remote add origin https://github.com/slider44/slider44.github.io.git

ng build --prod

npx angular-cli-ghpages --dir=dist/project-new --branch=master

#STEPS TO PUSH CODE (LOCAL)

git init .

git remote add origin https://github.com/slider44/slider44.github.io.git

(if has existing remote) git remote remove origin

git checkout -b local (create new branch)

git add .

git commit -m "Message"

git push origin local