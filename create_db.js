const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "./etablissement_insee.db";

function connectToDatabase() {
    if (fs.existsSync(filepath)) {
        return new sqlite3.Database(filepath);
    } else {
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
                return console.error(error.message);
            }
            createTable(db);
            console.log("Connected to the database successfully");
        });
        return db;
    }
}

function createTable(db) {
    db.exec(`
  CREATE TABLE migration
  (
    siret       VARCHAR(10),
    adresse VARCHAR(100),
    lattitude   VARCHAR(50),
    longitude        VARCHAR(50),
    telephone              VARCHAR(10),
    email              VARCHAR(50),
    
  )
`);
}

module.exports = connectToDatabase();
