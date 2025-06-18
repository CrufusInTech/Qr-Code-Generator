# QR Code Generator 🧾

A simple and interactive Node.js QR code generator. It takes user input from the terminal using `@inquirer/prompts` and generates scannable QR codes in multiple formats — **PNG**, **SVG**, **EPS**, and **PDF** — using the `qr-image` package.

---

## 🚀 Features

- Accepts user input via terminal
- Generates QR codes from any string or URL
- Supports output formats: **PNG**, **SVG**, **EPS**, and **PDF**
- Saves output directly to file
- Clean modern code using ESM (ECMAScript Modules)

---

## 📦 Requirements

- Node.js v14 or later  
- Internet access (for installing packages)

---

## 🔧 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
```
Install the required dependencies:
npm install

Ensure your package.json has ESM enabled:
"type": "module"


## 📂 Usage
node index.js
You'll be prompted to enter the text you want to convert into a QR code. The app will generate and save the QR in all available formats.

💻 Example Code
js
Copy
Edit
import qr from 'qr-image';
import fs from 'fs';
import { input } from '@inquirer/prompts';

const userInput = await input({ message: 'Enter text for QR code:' });

const formats = ['svg', 'png', 'eps', 'pdf'];

formats.forEach((format) => {
  const qrStream = qr.image(userInput, { type: format });
  qrStream.pipe(fs.createWriteStream(`qr_output.${format}`));
});

console.log('✅ QR codes generated in SVG, PNG, EPS, and PDF formats!');
📄 License
This project is licensed under a custom license. All rights reserved.

For learning or personal use, feel free to explore the code. For commercial use, please reach out.

🙌 Acknowledgements
qr-image

@inquirer/prompts

📬 Contact
Created by [Your Name or Handle]
📫 [your-email@example.com]
🌐 [your-portfolio-link]

