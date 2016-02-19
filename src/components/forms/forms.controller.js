class FormController {
  constructor() {
    this.name = 'Form Component Syntax';
    this.model = {};
    this.schema = {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          enum: ['dr','jr','sir','mrs','mr','NaN','dj']
        },
        name: { type: 'string', minLength: 2, title: 'Name', description: 'Name or alias' }
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
  }
}

export default FormController;
