import Koa from 'koa';
import config from 'config';

import json from 'koa-json';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from 'koa-cors';

import mongodb from './component/mongoose';
import bootstrap from './component/bootstrap';
import categoryModel from './model/category';

// error handler

const main = async () => {
  try {
    const app = new Koa();
    onerror(app);

    app.use(cors());

    // mongodb
    await mongodb.init();

    // middlewares
    app.use(bodyparser({
      enableTypes: ['json', 'form', 'text'],
    }));
    app.use(json({ pretty: false, param: 'pretty' }));
    app.use(logger());

    // routes
    bootstrap.routes(app);

    // error-handling ??
    app.on('error', (err, ctx) => {
      console.error('server error', err, ctx);
    });

    await categoryModel.init();

    app.listen(config.server.port, () => {
      console.log(`Server start on port: ${config.server.port} at ${new Date()}`);
    });

  } catch (e) {
    console.error(e);
  }
};

main();
