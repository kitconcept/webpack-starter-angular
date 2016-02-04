import template from './github.html';
import controller from './github.controller';

let githubComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default githubComponent;
