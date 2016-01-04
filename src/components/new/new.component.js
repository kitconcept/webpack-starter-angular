import template from './new.html';
import controller from './new.controller';

let newComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default newComponent;
