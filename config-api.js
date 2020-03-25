const apiConfig = {
  mongoPost: '/api/mongo/health-db',
  mongoPut: '/api/mongo/health-db/:id',
  mongoDelete: '/api/mongo/health-db/:id',
  mongoGetAll: '/api/mongo/health-db',
  mongoGet: '/api/mongo/health-db/:id',
};

const environment = {
  mongodb: true,
};

export {
  apiConfig,
  environment,
};
