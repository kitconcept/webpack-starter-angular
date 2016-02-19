class FormController {
  constructor($scope) {
    this.name = 'Form Component Syntax';
    this.model = {};
    this.schema = {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          enum: ['dr','jr','sir','mrs','mr','NaN','dj']
        },
        name: { type: 'string', minLength: 2, title: 'Name', description: 'Name or alias' },
        email:  {
          'title': 'Email',
          'type': 'string',
          'pattern': '^\\S+@\\S+$',
          'description': 'Invalid email address'
        },
        comment: {
          'title': 'Comment',
          'type': 'string',
          'maxLength': 20,
          'validationMessage': 'Maximum length is 20 characters'
        }
      },
      'required': [
        'name'
      ]
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

export default FormController;
