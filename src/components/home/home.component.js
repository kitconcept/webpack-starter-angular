import template from './home.html';
import controller from './home.controller';

let homeComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default homeComponent;
