#!/usr/bin/node
const fs = require('fs');
const path = require('path');

// Get the file paths from the command-line arguments
const [source1, source2, destination] = process.argv.slice(2);

// Read the contents of the source files
const data1 = fs.readFileSync(path.resolve(__dirname, source1));
const data2 = fs.readFileSync(path.resolve(__dirname, source2));

// Concatenate the contents of the source files
const newData = Buffer.concat([data1, data2]);

// Write the concatenated data to the destination file
fs.writeFileSync(path.resolve(__dirname, destination), newData);

console.log(`Successfully concatenated ${source1} and ${source2} into ${destination}`);
