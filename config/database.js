// database module
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdev',
    database: 'cilla'
});
var config = {
    host: 'cilla.c6dlmjbjj6mi.ap-southeast-1.rds.amazonaws.com',
    user: 'admin',
    port:'3306',
    password: 'admin1234',
    database: 'cilla'
};

// init database
var pool = mysql.createPool(config);


//Fetch data
function RunQuery(sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            ShowErrors(err);
        }
        conn.query(sql, function (err, rows, fields) {
            if (err) {
                ShowErrors(err);
            }
            conn.release();
            callback(rows);
        });
    });
}

//Throw errors
function ShowErrors(err) {
    throw err;
}

connection.connect(err => {  // test out connetion and console.log error if there is one
    if (err) throw err;
    console.log('Connected To AWS DB');
}); 
module.exports = connection;
module.exports = {
    RunQuery: RunQuery
};
