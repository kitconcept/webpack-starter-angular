import template from './contact.html';
import controller from './contact.controller';

let contactComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default contactComponent;
