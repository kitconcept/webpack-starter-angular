import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactFormComponent from './contact.form.component';
import ngSanitize from 'angular-sanitize';
require('script!tv4/tv4.js');
require('script!objectpath/lib/ObjectPath');
require('script!angular-schema-form/dist/schema-form');
require('script!angular-schema-form/dist/bootstrap-decorator');
// XXX: regular import do not work!
// import schemaForm from 'angular-schema-form/dist/schema-form';
// import 'angular-schema-form/dist/bootstrap-decorator';

let contactFormModule = angular.module('contactForm', [
  uiRouter,
  schemaForm.name
])

.config(($stateProvider) => {
  $stateProvider
    .state('contact.form', {
      url: '/form',
      template: '<contactform></contactform>'
    });
})

.directive('contactform', contactFormComponent);

console.log('angular:');
console.log(angular);
console.log('uiRouter:');
console.log(uiRouter);
console.log('ngSanitize:');
console.log(ngSanitize);
console.log('schemaForm:');
console.log(schemaForm);

export default contactFormModule;
