module.exports = {
  development: {
    "port": 1337,
    "redis": {
      "host": "localhost",
      "port": 6379
    },
    "errorPages": {
      "404": "errors/404",
      "not-connected": "errors/not-connected"
    },
    "development": true
  },

  production: {
    "port": 1337,
    "redis": {
      "host": "localhost",
      "port": 6379
    },
    "errorPages": {
      "404": "errors/404",
      "not-connected": "errors/not-connected"
    },
    "production": true
  }
};