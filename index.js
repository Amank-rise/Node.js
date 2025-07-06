import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {message : "enter your link to generate qr",
    name : "URL"},
  ])
  .then((answers) => {
    const url = answers.URL;
   var qr_svg = qr.image('I love QR!');
  qr_svg.pipe(fs.createWriteStream('qr-image_png'));
  fs.writeFile('url.text', url, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
  })

  .catch((error) => {
    if (error.isTtyError) {
     
    } else {
     
    }
  });

