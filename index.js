const path = require('path');
const Kukumoon = require('@kukumoon/kukumoon-core');

const moon = new Kukumoon.Application({
  root: path.resolve(__dirname),
  env: process.env.NODE_ENV,
});

moon
  .assemble(__dirname)
  .listen(process.env.PORT || 3030);
