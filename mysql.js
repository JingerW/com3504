var mysql = require('mysql');
var connection = mysql.createConnection(
    {
      host     : 'stusql.dcs.shef.ac.uk',
      port     : '3306',
      user     : 'team069',
      password : 'f1cbdf4f',
      database : 'team069'
    }
);

exports.query = function(callback){
   connection.query('SELECT * FROM test', function(err, rows, fields){
    if(err){
      throw err;
    } else{
      var content = '';
      for(var i=0; i<rows.length; i++){
        content += rows[i].surname+' '+ rows[i].forename+ '\n';
      }
    }
    callback(content);
  });
}


exports.insert = function(surname, forename){
  var query_string = 'INSERT INTO test(surname, forename) VALUE(\'' + surname + '\', \'' + forename + '\');';
  var query = connection.query(query_string);
  query.on('error', function(err) {
      throw err;
  });
}
exports.open = function(){
  connection.connect();
}
exports.close = function(){
  connection.end();
}
