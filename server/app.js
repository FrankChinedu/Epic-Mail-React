/* eslint-disable import/no-dynamic-require */
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import Webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import YAML from 'yamljs';
import path from 'path';
import webpackConfig from '../webpack.config';
import Route from './routes/index';

const app = express();
if (process.env.NODE_ENV !== 'test') {
  const swaggerDocument = YAML.load(`${__dirname}/../swagger.yaml`);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

if (process.env.NODE_ENV === 'development') {
  /* istanbul ignore next */
  const compiler = Webpack(webpackConfig);

  /* istanbul ignore next */
  app.use(
    WebpackDevMiddleware(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
  /* istanbul ignore next */
  app.use(WebpackHotMiddleware(compiler));
}

app.use(
  cors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const apiURL = '/api/v1';
global.apiURL = apiURL;

Route(app);

app.use(express.static(path.resolve(__dirname, 'public')));

/* istanbul ignore next */
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public/index.html')));

if (!module.parent) {
  /* istanbul ignore next */
  app.listen(process.env.PORT, () => {
    /* istanbul ignore next */
    console.log(`server start at port ${process.env.PORT} `);
  });
}

module.exports = app;
