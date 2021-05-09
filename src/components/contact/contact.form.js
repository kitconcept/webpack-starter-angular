import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactFormComponent from './contact.form.component';
import 'angular-sanitize';
require('script-loader!tv4/tv4.js');
require('script-loader!objectpath/lib/ObjectPath');
require('script-loader!angular-schema-form/dist/schema-form');
require('script-loader!angular-schema-form/dist/bootstrap-decorator');
// XXX: regular import do not work!
// import schemaForm from 'angular-schema-form/dist/schema-form';
// import 'angular-schema-form/dist/bootstrap-decorator';

let contactFormModule = angular.module('contactForm', [
  uiRouter,
  'schemaForm'
])

.config(($stateProvider) => {
  $stateProvider
    .state('contact.form', {
      url: '/form',
      template: '<contactform></contactform>'
    });
})

.component('contactform', contactFormComponent);

export default contactFormModule;
