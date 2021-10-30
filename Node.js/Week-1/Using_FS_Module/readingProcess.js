const fs = require('fs');

// Reading operation from employee.json file
fs.readFile('employees.json', 'utf8', (error, data) => {
    if (error === true) {
        console.log(`An error occurred while reading the file: ${error}`);
    }
    console.log(data);
    console.log('The file was read successfully.');
});