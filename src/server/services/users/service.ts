// Initializes the `users` service on path `/users`
import createService from 'feathers-nedb'
import NeDB from 'nedb'
import path from 'path'

const createModel = (app) => {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'users.db'),
    autoload: true
  });

  Model.ensureIndex({ fieldName: 'email', unique: true });

  return Model;
};

import hooks from './hooks'

export default (app) => {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'users',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/users', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users')

  service.hooks(hooks)
}