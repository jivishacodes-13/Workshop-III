// CRUD operaions
// Create, Read, Update, Delete
const fs = require('fs');

function updateFile(fileName, data, callback) {
    fs.writeFile(fileName, data, callback);
}

fs.writeFile('std.txt', 'Hello jivisha', (err) => {
    if (err){
        console.log('Error in creating file');
    } else {
        console.log('File created and data written');

        updateFile('std.txt', 'Hello jivisha, how are you?', (err) => {
            if (err){
                console.log('Error in updating file');
            } else {
                console.log('File updated successfully');

                fs.readFile('std.txt', 'utf8', (err, data) => {
                    if (err){
                        console.log('Error in reading file');
                    } else {
                        console.log('File data:', data);
                    }
                });
            }
        });
    }
});