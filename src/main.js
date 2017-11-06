const GoogleSpreadsheet = require('google-spreadsheet');
const creds = require('../client_secret.json');
const dotenv = require('dotenv');
dotenv.config();

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet(process.env.SHEET_ID);
 
// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, err => {
    if (err) {
        console.log(err);
    } else {
        doc.getRows(1, {limit: 1}, (err, rows) => {
            if (err) {
                console.log(err);
            } else {
                rows.forEach(element => {
                    element.recebida = "não";
                    element.observacao = "Farm fazendo testes";
                    element.save();
                });
            }
        });
    }
});
