import _ from 'lodash';

// add field to existing json schema
let addField = function(schema, field) {
  return _.merge(schema, {'properties': field});
};

export default addField;
