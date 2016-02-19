import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formsComponent from './forms.component';
require('script!tv4/tv4.js');
require('script!objectpath/lib/ObjectPath');
require('script!angular-schema-form/dist/schema-form');
require('script!angular-schema-form/dist/bootstrap-decorator');

let formsModule = angular.module('forms', [
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
