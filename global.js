var path = require('path');  // storing path object try with printing it   
console.log("path",path);  

var name = "chathura deepana";
var newName = name.toUpperCase(name);
console.log(`new name is : ${newName}`);   

console.log(__dirname);  // path 
console.log(__filename); // path with file name
console.log(path.basename(__filename)); // this will break the string and last \/after string will be displayed
console.log(path.basename("D:\/2020_practicle\/2020NODEJS")); // test with this string 