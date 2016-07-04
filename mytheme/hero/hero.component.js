import template from './hero.jade';
import controller from './hero.controller';

let heroComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default heroComponent;
