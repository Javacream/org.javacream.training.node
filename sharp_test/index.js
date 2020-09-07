const sharp = require('sharp');
const fs = require('fs');

sharp('site-logo.jpg')
    .rotate(180)
    .resize(200)
    .toBuffer()
    .then( data => {
        fs.writeFileSync('site_logo_sharp.jpg', data);
    })
    .catch( err => {
        console.log(err);
    });												
						
