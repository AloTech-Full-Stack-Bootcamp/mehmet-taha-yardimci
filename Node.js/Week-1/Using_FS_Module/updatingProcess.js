const fs = require('fs');
const jsonFile = require('./employees.json');

jsonFile.name = 'thyrdmc';
jsonFile.salary = 3100;

// Updating operation on employee.json file
fs.writeFile('employees.json', JSON.stringify(jsonFile, null, 2) , (error) => {
    if (error === true) {
        console.log(`An error occurred while processing your request: ${error}`);
    }
    console.log('The file was successfully updated.');
});
