import template from './contact.form.jade';
import controller from './contact.form.controller';

let contactFormComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default contactFormComponent;
