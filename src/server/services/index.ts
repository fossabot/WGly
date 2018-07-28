import { Application } from "feathersjs__feathers";

import testService from './test/test.service'
import userService from './users/service'

// eslint-disable-next-line no-unused-vars
export default function(app: Application) {
    app.configure(testService);
    app.configure(userService)
}
