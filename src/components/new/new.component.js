import template from './new.html';
import controller from './new.controller';

let newComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default newComponent;
