const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log('error connecting to database ' + err);
  }
});

// const getAllPhrases = function (cb) {
//   //get all Phrases in the mysql phrases table
//   connection.query('SELECT * FROM phrases;', (err, dbRes) => {
//     if (err) {
//       console.log('mysql getAllPhrases error ' + err);
//       cb(err, null);
//     } else {
//       //console.log('mysql getAllPhrases result 0 ' + JSON.stringify(dbRes[0]) + ', ' + typeof dbRes);
//       cb(null, dbRes);
//     }
//   });
// }

// const updatePhrase = function (index, newStatus, cb) {
//   console.log('UPDATE phrases SET status="' + newStatus + '" WHERE id=' + index + ';');
//   connection.query('UPDATE phrases SET status="' + newStatus + '" WHERE id=' + index + ';', (err) => {
//     if (err) {
//       console.log('mysql updatePhrase error ' + err);
//       cb(err, null);
//     } else {
//       getAllPhrases((err, results) => {
//         if (err) {
//           console.log('mysql updatePhrase getAllPhrases error ' + err);
//           cb(err, null);
//         } else {
//           console.log('updated');
//           cb(null, results);
//         }
//       })
//     }
//   })
// }

module.exports = {
  //TODO
  // getAllPhrases: getAllPhrases,
  // updatePhrase: updatePhrase
};