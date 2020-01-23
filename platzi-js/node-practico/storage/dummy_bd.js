const db = {
    'user':[
        {id: 1 , name: 'Rafael'},
    ],
};

function list(table) { return db[table]; }

function get(table, id) {
    let dataCollection = list(table);
    return dataCollection.filter(item => item.id === id)[0] || null;

}

function insert(table, data) {
    db[collection].push(data);
}

function remove(table, id) {
    return true
}

module.exports = {
    list,
    get,
    insert,
    remove
};
