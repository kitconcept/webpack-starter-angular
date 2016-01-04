class ContactFormController {
  constructor($scope) {
    this.name = 'Contact Us'
    this.model = {};
    this.schema = {
      type: "object",
      properties: {
        name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
        title: {
          type: "string",
          enum: ['dr','jr','sir','mrs','mr','NaN','dj']
        }
      },
      "required": [
        "name",
      ]
    };
    this.form = [
      "*",
      {
        type: "submit",
        title: "Save"
      }
    ];

    this.onSubmit = function(form) {
      // First we broadcast an event so all fields validate themselves
      $scope.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      if (form.$valid) {
        console.log('form is valid')
      } else {
        console.log('form is invalid')
      }
    }
  }
}

export default ContactFormController;
