const config = require('./config');
const app = require('./app')(config);

app.listen(config.server.port, () => {
  console.log('Production app listening on port [%s]!', config.server.port);
});
