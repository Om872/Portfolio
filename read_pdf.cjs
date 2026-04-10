const fs = require('fs');
const pdf = require('pdf-parse');

const file = 'C:/Users/omnam/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/311E76DF0FBF363D9D656A661F28A29588D4777A/transfers/2026-15/Resume.OM.pdf';

const dataBuffer = fs.readFileSync(file);

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(console.error);
