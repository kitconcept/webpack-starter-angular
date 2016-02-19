import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formsComponent from './forms.component';

// order is important!
import 'tv4';
import 'objectpath';
import schemaForm from 'angular-schema-form';
import 'script!angular-schema-form-bootstrap';

let formsModule = angular.module('forms', [
  uiRouter,
  schemaForm.name
])

.config(($stateProvider) => {
  $stateProvider
    .state('forms', {
      url: '/forms',
      template: '<forms></forms>'
    });
})

.component('forms', formsComponent);

export default formsModule;
