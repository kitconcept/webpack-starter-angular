import template from './forms.html';
import controller from './forms.controller';

let formsComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default formsComponent;
