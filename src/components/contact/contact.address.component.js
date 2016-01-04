import template from './contact.address.jade';
import controller from './contact.address.controller';

let contactAddressComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default contactAddressComponent;
