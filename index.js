const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kidi|3538808",
    database: "week5.db"
});

connection.connect((err) => {
    if(err) {
        console.log("error ", err.stack);
    } else {
        console.log("Connected successfully.");
    }
})


// Get all movies
const query1  = "SELECT * FROM movies";

connection.query(query1, (err, result) => {
    if(err) throw err;
    console.log("All Movies: ", result);

})

// Get all movies release at year 2000
const query2 = 'SELECT * FROM movies WHERE year > 2000';
connection.query(query2, (err, result) => {
    if(err) throw err;
    console.log("All Movies release at year 2000: ", result);
})

// Get movies by Christopher Nolan
const directName = 'Christopher Nolan';
const query3 = 'SELECT * FROM movies WHERE Director = ?';
connection.query(query3, ['Christopher Nolan'], (err, result) => {
    if(err) throw err;
    console.log("Movies by Christopher Nolan:", result);

});
connection.end()
