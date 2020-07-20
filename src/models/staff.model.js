// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class staff extends Model {
  static get tableName() {
    return 'staff';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['phone_number', 'first_name', 'last_name', 'role'],

      properties: {
        email: 'string',
        phone_number: 'string',
        first_name: 'string',
        last_name: 'string',
        role: { type: 'string', pattern: '^(administrator|supervisor|farm-worker)$' },
        active: 'boolean',
        national_id: 'string',
      },
    };
  }

  $beforeInsert() {
    this.created_at = this.updated_at = new Date();
  }

  $beforeUpdate() {
    this.updated_at = new Date();
  }
}

// eslint-disable-next-line
module.exports = function (app) {
  return staff;
};
