import FormsModule from './forms';
import FormsController from './forms.controller';
import FormsComponent from './forms.component';
import FormsTemplate from './forms.html';

describe('Forms', () => {
  let makeController;

  beforeEach(window.module(FormsModule.name));  // eslint-disable-line
  beforeEach(inject(() => {
    makeController = () => {
      return new FormsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name/from/schema/model property', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
      expect(controller).to.have.property('form');
      expect(controller).to.have.property('schema');
      expect(controller).to.have.property('model');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has schema/form/model in template', () => {
      expect(FormsTemplate).to.match(/\s?vm\.schema\s?/g);
      expect(FormsTemplate).to.match(/\s?vm\.form\s?/g);
      expect(FormsTemplate).to.match(/\s?vm\.model\s?/g);
    });
  });

});
