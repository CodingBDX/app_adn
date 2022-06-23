const exec = require('child_process').exec;
var fs = require('fs');
import { insert_into_db } from './insert_into_db.js';
import { create_db } from './create_db.js';

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const myCurl = "curl -O https://files.data.gouv.fr/insee-sirene/StockEtablissement_utf8.zip  && curl -O https://files.data.gouv.fr/insee-sirene-geo/GeolocalisationEtablissement_Sirene_pour_etudes_statistiques_utf8.zip"
const myUnzip = " unzip GeolocalisationEtablissement_Sirene_pour_etudes_statistiques_utf8.zip && unzip StockEtablissement_utf8.zip"
//const myCut = "cut -d , -f 1,2 -- machine-readable-business-employment-data-mar-2022-quarter.csv > out.csv"
//const myCutBis = "cut -d , -f 1 -- annual-enterprise-survey-2020-financial-year-provisional-size-bands-csv.csv > out_bis.csv"
//const result = "join -t ,  -a2 -a1   -2 1 -1 2   out.csv out2.csv > result.csv "


//var data = fs.readFileSync('StockEtablissement_utf8.csv')
//  .toString() // convert Buffer to string
//.split('\n') // split string to lines
//.map(e => e.trim()) // remove white spaces for each line
//    .map(e => e.split(',').map(e => e.trim())); // split each line to array


const aexec = async (cmde) => {

    return new Promise((resolve, reject) => {

        let child = exec(cmde);

        child.stdout.on('data', (data) => console.log('stdout: ' + data));

        child.stderr.on('data', (data) => console.log('stdout: ' + data));

        child.on('close', (code) => resolve(code));

    });

};

try {
    if (!StockEtablissement_utf8.csv) {
        if (!etablissement_insee.db) {
            aexec(create_db);
        } else { console.log("table existe deja"); }
        aexec(myCurl);
        aexec(myUnzip);
        aexec(insert_into_db);


        // JSON.stringify(data, '', 2);
    } else {
        console.log("existe deja");
    }
} catch (error) {
    console.log(error);
}
