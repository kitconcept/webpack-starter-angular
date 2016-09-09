import angular from 'angular';
import uiRouter from 'angular-ui-router';
import wikipediaComponent from './wikipedia.component';
import wikipediaService from './wikipedia.service';

let wikipediaModule = angular.module('wikipedia', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('wikipedia', {
      url: '/wikipedia',
      template: '<wikipedia></wikipedia>'
    });
})

.component('wikipedia', wikipediaComponent)
.service('wikipediaService', wikipediaService);

export default wikipediaModule;
