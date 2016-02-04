import template from './contact.address.jade';
import controller from './contact.address.controller';

let contactAddressComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default contactAddressComponent;
