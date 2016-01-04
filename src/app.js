import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Common from './common/common';
import Components from './components/components';
import Styles from './styles.scss';

angular.module('myApp', [
  uiRouter,
  Common.name,
  Components.name
])
.directive('app', AppComponent);
