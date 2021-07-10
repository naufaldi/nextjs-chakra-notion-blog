const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    DOMAIN: process.env.DOMAIN,
  },
  pwa: {
    dest: 'public',
  },
});
