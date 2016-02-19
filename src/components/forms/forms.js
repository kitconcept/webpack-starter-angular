import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formsComponent from './forms.component';

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
