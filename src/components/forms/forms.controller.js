import BaseFormController from './base.js';

class FormController extends BaseFormController {
  constructor($scope) {
    super($scope);
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
  }
}

export default FormController;
