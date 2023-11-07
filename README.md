# valiDate
#### by Paco Fuentes

This function validates appointment dates sent from a client to a REST API. It ensures that appointments cannot be scheduled in the past, on the same day, or on weekends.

## Prerequisites

To use this function, you need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system. Additionally, you'll need to install the [Day.js](https://day.js.org/) library.

You can install Day.js and its custom parsing format plugin using npm:

```bash
npm install dayjs
npm install dayjs/plugin/customParseFormat
```

## Usage

To test the function, you can uncomment the console.log statements in the code and input a date in the "DD-MM-YYYY" format in the second field of the function.

Here's how you can use the function:

```js
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

// ... (Rest of your code)

valiDate(todayFormated, myDateFormated); // Test a date
```

### Import the Function in Another File

To use the valiDate function in another JavaScript file, you can import it like this:
```js
// app.js

const valiDate = require('./YOUR_PATH/valiDate'); // Specify the correct path to the valiDate.js file

// ... (the rest of your code)

valiDate(todayFormated, myDateFormated); // Call the valiDate function
```

Make sure to specify the correct path to the valiDate.js file in the require statement.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contributing
If you would like to contribute to this project, please open an issue or submit a pull request.

## Authors
Paco Fuentes. 2023

Acknowledgments
Thanks to the Day.js library for date handling.