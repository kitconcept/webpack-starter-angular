import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formsComponent from './forms.component';
// order important: tv4 -> objectpath -> shemaForm -> shemaForm-bootstrap
import 'tv4';
import 'objectpath';
import schemaForm from 'angular-schema-form';
import 'script-loader!angular-schema-form-bootstrap';

let formsModule = angular.module('forms', [
  schemaForm.name,
  uiRouter
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
