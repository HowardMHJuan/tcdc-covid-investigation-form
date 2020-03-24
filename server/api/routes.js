import UsersController from './controllers/mongo-controller';

import { apiConfig } from '../../config-api';

const routes = (app, environment) => {
  /* mongodb's routes */
  if (environment.mongodb) {
    app.post(apiConfig.mongoPost, UsersController.create);
    app.put(apiConfig.mongoPut, UsersController.edit);
    app.delete(apiConfig.mongoDelete, UsersController.delete);
    app.get(apiConfig.mongoGetAll, UsersController.getusers);
    app.get(apiConfig.mongoGet, UsersController.getuser);
  }
};

export default routes;
