// Initializes the `staff` service on path `/staff`
const { Staff } = require('./staff.class');
const createModel = require('../../models/staff.model');
const hooks = require('./staff.hooks');

module.exports = function initializeStaffService(app) {
  const options = {
    Model: createModel(app),
    paginate: false,
    multi: true,
  };

  // Initialize our service with any options it requires
  app.use('/staff', new Staff(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('staff');

  service.hooks(hooks);
};
