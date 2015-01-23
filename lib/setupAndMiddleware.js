var redisAdapter = require('./redisConnector'),
    redisConnectionEnforcer = require('./enforceConnection'),
    express = require('express');

module.exports = function(app, options){
    options = options || {};
    if (!options.redis){
        throw new Error('No redis configuration options passed to matador');
    }
    //Connect to redis
    redisAdapter.connect(options.redis);
    //Enforce that redis is connected to, will make render an error page if not connected
    app.use(redisConnectionEnforcer);

    //Publicly accessible routes
    app.use('/css/', express.static(__dirname + '/../public/css'));
    app.use('/fonts/', express.static(__dirname + '/../public/fonts'));
    app.use('/img/', express.static(__dirname + '/../public/img'));
    app.use('/js/', express.static(__dirname + '/../public/js'));

    //Setup routes
    require('../controllers/index')(app);
    require('../controllers/active')(app);
    require('../controllers/complete')(app);
    require('../controllers/failed')(app);
    require('../controllers/jobs')(app);
    require('../controllers/pending')(app);

    //404
    app.get('*', function(req, res){
        res.render(config.errorPages["404"]);
    });
};