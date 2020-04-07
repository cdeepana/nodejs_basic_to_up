const fs = require('fs');
// write file and replace file when exist name
fs.writeFile('wrote_file.html', `\n Hello this is from file-writing.js \n`, 'utf8', (err) => {  //path would be like this ./module/filename even
    if(err) return err;
    console.log("The wrote file has been saved");
})

// append extra text to written file
fs.appendFile('wrote_file.html', '\n this is extra text', 'utf8', (err) => {  
    if(err) return err;
    console.log("extra data saved");
})
