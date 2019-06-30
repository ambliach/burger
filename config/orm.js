var connection = require("./connection.js");


// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     var value = ob[key];
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       arr.push(key + "=" + value);
//     }
//   }

//   return arr.toString();
// }

var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  
  // create: function(table, cols, vals, cb) {
  //   var queryString = "INSERT INTO " + table;

  //   queryString += " (";
  //   queryString += cols.toString();
  //   queryString += ") ";
  //   queryString += "VALUES (";
  //   queryString += printQuestionMarks(vals.length);
  //   queryString += ") ";

  //   console.log(queryString);

  //   connection.query(queryString, vals, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },
  updateOne: function(id, cb) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";

    connection.query(queryString, [id], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  insertOne: function(burger, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)"
    connection.query(queryString, [burger], function(err, result){
      if (err) {throw(err)}
      cb(result)
    
    });
  }
}

module.exports = orm;