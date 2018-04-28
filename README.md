# Firestore CRUD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Note

To run this app, you have to copy your firestore project credential details in src/environments/firebase.config.ts file.
 
 You can find credential details by clicking on "Add Firebase to your web app" on your firebase.

 It will display something like below

 <script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "jdfakjgsdfsfgsdjgsdjgs",
    authDomain: "jlkgsdjf.firebaseapp.com",
    databaseURL: "fjsdlkfadjfa3.firebaseio.com",
    projectId: "jglksjdfsdfgds",
    storageBucket: "ewrgjlkgjfkl.appspot.com",
    messagingSenderId: "465345634"
  };
  firebase.initializeApp(config);
</script>

Copy the 'config' object and place it in 'firebase' object of firebase.config.ts file.
