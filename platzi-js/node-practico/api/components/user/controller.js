const store = require('../../../storage/dummy_bd');

const TABLE = 'user';

function list(){
    return store.list(TABLE);
}

module.exports = {
    list
};
