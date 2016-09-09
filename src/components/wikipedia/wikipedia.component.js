import template from './wikipedia.html';
import controller from './wikipedia.controller';

let wikipediaComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default wikipediaComponent;
