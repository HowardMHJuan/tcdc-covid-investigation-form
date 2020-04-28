import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import config from './config';
import routes from './api/routes';
import { environment } from '../config-api';

require('dotenv').config();

const app = express();
/**
 * Switch between webpack Development & Production mode.
 *
 * To use Development mode, you'll have to run 'npm run dev' script in terminal. We use
 * webpackDevMiddleware and webpackHotMiddleware to run the project, and it only excute
 * 'App.js', which currently contains form, PageB, PageC, PageIO. If you are not developing
 * backend routing feature, it is prefered to develop in Development mode. If you want
 * to add more frontend pages to test in Development mode, you should modify 'App.js' and
 * add more pages inside it.
 *
 * To use Production mode, you'll have to run 'npm run build' first, and then run 'npm start'
 * in terminal. It'll build all the frontend bundle file into a folder called 'public',
 * and build the server into a folder called 'private'. 'npm start' will execute the
 * compiled server in 'private' folder, which routes to all the frontend pages in 'public'
 * folder. If you've only modified a specific frontend pages after building, ex: 'form.js',
 * you can run 'npm run build:form' to rebuild it independently instead of rebuilding all
 * pages. Detailed scripts can be found at 'package.json'. */
if (process.env.NODE_ENV === 'dev') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const webpackDevConfig = require('../webpackConfig/webpack.dev.config.js');
  const compiler = webpack(webpackDevConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: { colors: true },
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
} else {
  app.use(express.static('public'));
  app.get('/', (req, res) => {
    /* We use redirect because sendFile is not working here (why?) */
    res.redirect('/form');
    // res.sendFile(path.join(__dirname, 'public/form/index.html'));
  });
  app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/form/index.html'));
  });
  app.get('/submitted', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/submitted/index.html'));
  });
  app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/search/index.html'));
  });
}

if (environment.mongodb) {
  const mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  // const dbName = 'health-db';
  console.log(process.env.MONGODB_URI);
  // mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);
  mongoose.connect(process.env.MONGODB_URI, {
    auth: {
      user: process.env.MONGODB_USER,
      password: process.env.MONGODB_KEY,
    },
  });
}

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
  next();
});

/**
 * Setting up API's function routing used by frontend. */
routes(app, environment);

app.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
  console.log(process.env.NODE_ENV);
});

