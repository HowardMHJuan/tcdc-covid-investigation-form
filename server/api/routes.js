import HealthDbController from './controllers/mongo-controller';

import { apiConfig } from '../../config-api';

const routes = (app, environment) => {
  /* mongodb's routes */
  if (environment.mongodb) {
    app.post(apiConfig.mongoPost, HealthDbController.create);
    app.put(apiConfig.mongoPut, HealthDbController.edit);
    app.delete(apiConfig.mongoDelete, HealthDbController.delete);
    app.get(apiConfig.mongoGetAll, HealthDbController.getHealthForms);
    app.get(apiConfig.mongoGet, HealthDbController.getHealthForm);
  }
};

export default routes;
