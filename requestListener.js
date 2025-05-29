const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const requestListener = (requst, response) => {
  const { method, url } = requst;

  switch (method) {
    case 'GET': {
      const pageName = url === '/' ? 'index.html' : url;

      // html
      if (/^.*\.html$/.test(pageName)) {
        const pagePath = path.join(__dirname, '/pages/', pageName);

        if (fs.existsSync(pagePath, { encoding: 'utf-8' })) {
          readFile(pagePath)
            .then(data => {
              // - файл есть 200
              response.statusCode = 200;
              response.setHeader('Content-Type', 'text/html');
              response.end(data);
            })
            .catch(err => {
              // - файл есть, но ошибки при чтении 500
              response.statusCode = 500;
              response.end('Sever Error');
            });
        } else {
          // - файла нет 404
          response.statusCode = 404;
          response.end('Page not found');
        }
      } else {
        // не html 403
        response.statusCode = 403;
        response.end('You have no access');
      }
      break;
    }
    default: {
      response.statusCode = 400;
      response.end('Bad Request');
    }
  }
};

module.exports = requestListener;