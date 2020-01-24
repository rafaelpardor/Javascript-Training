const controller = require('./controller');
const store = require('../../../storage/dummy_bd');

module.exports = controller(store);
