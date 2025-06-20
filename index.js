// imported modules

import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

// The inquirer-input is used to get user input.
const answer = await input({ message: 'Enter your Url: ' });
console.log(`Your Url is: ${answer}`);

// The QR CODE IMAGE is generated from the user entered URL.
const qrPng = qr.image(answer, { parse_url: true, size: 30, margin: 1  })

// 4. Save the QR image to a file
const qrFilename = answer.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".png";
qrPng.pipe(fs.createWriteStream(qrFilename));

// 5. Optional: get the PNG as a string for other uses
const pngString = qr.imageSync(answer, { type: 'png', parse_url: true });
console.log(`Qr-code png saved as: ${qrFilename}`);

// This writes the user input in a file
const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('Link.txt', answer, (err) => {
  if (err) throw err;
  console.log('The file has been created!');
});