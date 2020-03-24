import path from 'path';
import fs from 'fs';

const _parse = (initPath, callback) => {
  fs.readdirSync(initPath).forEach((name) => {
    const itemPath = path.join(initPath, name);
    const stat = fs.statSync(itemPath);

    if (stat && stat.isDirectory(itemPath)) {
      _parse(itemPath, callback);
    } else {
      callback(itemPath);
    }
  });
};

class Bootstrap {
  routes(app) {
    if (fs.existsSync(path.join(__dirname, '..', 'routes'))) {
      _parse(path.join(__dirname, '..', 'routes'), (itemPath) => {
        const router = require(itemPath).default; /* eslint "import/no-dynamic-require": 0 */

        app.use(router.routes(), router.allowedMethods());
      });
    }
  }
}

export default new Bootstrap();
