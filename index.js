/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// imported modules

import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

// The inquirer that is used to get user input.

const answer = await input({ message: 'Enter your link: ' });
console.log(`Your link is: ${answer}`);

// The QR CODE IMAGE is generated from the user entered URL.
const qrPng = qr.image(answer, { parse_url: true  });

// 3. Create a safe filename by stripping/escaping invalid characters
const qrFilename = answer.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".png";

// 4. Save the QR image to a file
qrPng.pipe(fs.createWriteStream(qrFilename));

// 5. Optional: get the PNG as a string if needed elsewhere
const pngString = qr.imageSync(answer, { type: 'png', parse_url: true });

console.log(`Qr-code png saved as: ${qrFilename}`);


const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', answer, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});