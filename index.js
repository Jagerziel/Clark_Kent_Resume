#! /usr/bin/env node

//fs for file system is built in from node
const fs = require('fs')

//__dirname is the current directory we are currently in
//arguments: the file we want to read, the way to encode that file, callback function (error handling)
fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})