var mysql = require('mysql');

var conn = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'login_sys'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Database Connected..');
});

module.exports = conn;