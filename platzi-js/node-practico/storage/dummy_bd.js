const db = {
    'user': [
        { id: '1', name: 'Rafael' },
    ],
};

async function list(table) { return db[table]; }

async function get(table, id) {
    let dataCollection = await list(table);
    return dataCollection.filter(item => item.id === id)[0] || null;

}

async function insert(table, data) {
    db[collection].push(data);
}

async function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    insert,
    remove
};
