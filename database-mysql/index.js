const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log('error connecting to database ' + err);
  }
});

// user(
//   id INT NOT NULL AUTO_INCREMENT,
//   name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   default_address_zip INT(5),
//   PRIMARY KEY(id)
// );


const insertIntoTable = function (tableName, data, cb) {
  var dataKeys = '';
  var dataValues = '';
  for (var prop in data) {
    if (dataKeys !== '') {
      dataKeys += ', ';
      dataValues += ', "';
    }
    if (dataValues === '') {
      dataValues += '"';
    }
    dataKeys += prop;
    dataValues += data[prop] + '"';
  }
  var queryString = 'INSERT INTO ' + tableName + ' (' + dataKeys + ') VALUES (' + dataValues + '); ';
  console.log('db queryString = ' + queryString);
  connection.query(queryString, (err, dbRes) => {
    if (err) {
      console.log('mysql insertIntoTable error ' + err);
      cb(err, null);
    } else {
      cb(null, dbRes);
    }
  });
};

module.exports = {
  insertIntoTable: insertIntoTable
};