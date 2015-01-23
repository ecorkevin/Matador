var env = process.env.NODE_ENV || 'development',
  config = require('./config')[env],
  app = require('./app')(config);

app.listen(config.port, function() {
  console.log("Matador listening on port", config.port, "in", process.env.NODE_ENV, "mode");
});