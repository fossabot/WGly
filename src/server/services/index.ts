import { Application } from "feathersjs__feathers";

import testService from './test/test.service'

// eslint-disable-next-line no-unused-vars
export default function(app: Application) {
    app.configure(testService);
}
