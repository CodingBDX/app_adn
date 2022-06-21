var Rsync = require('rsync');

// Build the command
var rsync = new Rsync()
    .shell('zsh')
    .flags('az')
    .source('https://files.data.gouv.fr/insee-sirene/StockEtablissement_utf8.zip')
    .destination('/usr/share/nginx/html/');

// Execute the command
rsync.execute(function (error, code, cmd) {
    if (error) {
        console.log(error)


    } else { console.log('ok') }
});