const fs = require('fs');
const jsonFile = {"name": "Employee 1 Name", "salary": 2000}

// Writing operation to employee.json file
fs.writeFile('employees.json', JSON.stringify(jsonFile, null, 2), 'utf8', (error, data) => {
    if (error === true) {
        console.log(`An error occurred while processing your request: ${error}`);
    }
    console.log('Write operation completed successfully.');
});

