const fs = require('fs'); // file system

fs.readdir('../',(err,content) => {  // we can use . ./ ../ to go to path

        if(err) return err;
        console.log(content); // log with directory files folder details
});

fs.readFile('global.html','UTF-8', (err,content) => {
    console.log(content);
});