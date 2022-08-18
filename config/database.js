// database module
var mysql = require('mysql');
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

module.exports = {
    RunQuery: RunQuery
};
