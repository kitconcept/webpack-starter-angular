import template from './github.html';
import controller from './github.controller';

let githubComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default githubComponent;
