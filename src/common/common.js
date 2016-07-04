import angular from 'angular';
import Navbar from 'navbar';
import Hero from 'hero';
import User from 'user';

export default angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name
]);
