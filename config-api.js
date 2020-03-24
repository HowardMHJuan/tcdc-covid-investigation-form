const apiConfig = {
  mongoPost: '/api/mongo/users',
  mongoPut: '/api/mongo/users/:id',
  mongoDelete: '/api/mongo/users/:id',
  mongoGetAll: '/api/mongo/users',
  mongoGet: '/api/mongo/users/:id',
};

const environment = {
  mongodb: true,
};

export {
  apiConfig,
  environment,
};
