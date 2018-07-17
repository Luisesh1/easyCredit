const { Client } = require('pg');

module.exports = {
    users: () => {
        const client = new Client();
        client.connect()
            .then(() => {
                return client.query('SELECT * FROM users;');
            })
            .then((results) => {
                return results;
            })
            .catch((err) => {
                return { error: 'error' }
            });
    }
}