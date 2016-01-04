import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactAddressComponent from './contact.address.component';

let contactAddressModule = angular.module('contactAddress', [
  uiRouter,
])

.config(($stateProvider) => {
  $stateProvider
    .state('contact.address', {
      url: '/address',
      template: '<address></address>'
    });
})

.directive('address', contactAddressComponent);

export default contactAddressModule;
