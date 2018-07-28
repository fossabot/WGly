import Primus from 'primus'
import feathers from '@feathersjs/feathers'
import primus from '@feathersjs/primus-client'
import auth from '@feathersjs/authentication-client'

const socket = new Primus('http://localhost:3030')

const feathersClient = feathers()
  .configure(primus(socket))
  .configure(auth({ storage: window.localStorage }))
export default feathersClient