class BaseFormController {
  constructor($scope) {
    this.name = 'Form Component Syntax';
    this.model = {};
    this.schema = {
      type: 'object',
      properties: {},
      'required': []
    };
    this.form = [
      '*',
      {
        type: 'submit',
        title: 'Save'
      }
    ];

    this.onSubmit = function(form) {
      // First we broadcast an event so all fields validate themselves
      $scope.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      var msg = [];
      if (form.$valid) {
        msg = [{
          'type': 'help',
          'helpvalue': '<div class=\'alert alert-success\'>Form submitted successfully</div>'
        }];
        this.form = msg.concat(this.form);
      } else {
        msg = [{
          'type': 'help',
          'helpvalue': '<div class=\'alert alert-danger\'>Form is invalid</div>'
        }];
        this.form = msg.concat(this.form);

      }
    };
  }
}

export default BaseFormController;
