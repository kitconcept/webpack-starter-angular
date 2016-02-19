import angular from 'angular';
import Home from './home/home';
import Contact from './contact/contact';
import ContactAddress from './contact/contact.address';
import ContactForm from './contact/contact.form';
import Github from './github/github';
import Forms from './forms/forms';
import New from './new/new';

export default angular.module('app.components', [
  Contact.name,
  ContactAddress.name,
  ContactForm.name,
  Home.name,
  Github.name,
  Forms.name,
  New.name
]);
