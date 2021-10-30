const fs = require('fs');

//  Deleting operation from employee.json file
fs.unlink('employees.json', (error) => {
    if (error === true) {
        console.log(`An error occurred while deleting the file: ${error}`);
    }
    console.log("The file was successfully deleted.");
});