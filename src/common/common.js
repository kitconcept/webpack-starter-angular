import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from 'hero';
import User from './user/user';

export default angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name
]);
