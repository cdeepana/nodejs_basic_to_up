//  move file to another locaction like this 
//  code :    mv newFile.js newDir/newFile2.js 

const fs =  require('fs');

fs.renameSync('newDir2/newDir/newFile2.js', 'newDir2/modifiednewFile.js');   // this will move and rename th file

fs.renameSync('newDir2/newDir', 'chileDir'); // and also this will convert newDir to chileDir and move it to this given path