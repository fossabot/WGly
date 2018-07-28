// Initializes the `messages` service on path `/messages`
import createService from './test.class'
import { Application } from 'feathersjs__feathers'

import memory from 'feathers-memory'

export default (app: Application) => {
  // Initialize our service with any options it requires
  //app.use('/test', createService({}))

  app.use('/messages', memory({
    paginate: {
      default: 2,
      max: 4
    }
  }));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('messages')
}