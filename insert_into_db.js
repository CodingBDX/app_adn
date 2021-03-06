var fs = require('fs');
const { parse } = require("csv-parse");
const db = require("./etablissement_insee.db");



fs.createReadStream("./StockEtablissement_utf8.csv")
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
        db.serialize(function () {
            db.run(
                `INSERT INTO migration VALUES (?, ?, ? , ?, ?, ?)`,
                [row[0], row[1], row[2], row[3], row[4], row[5]],
                function (error) {
                    if (error) {
                        return console.log(error.message);
                    }
                    console.log(`Inserted a row with the id: ${this.lastID}`);
                }
            );
        });
    });
