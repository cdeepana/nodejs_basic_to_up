const fs = require("fs");

fs.exists("createdVIEW_FILE",(response) => {
    if(!response){

  fs.mkdir("createdVIEW_FILE", (err) => {
    if (err) return err;
    fs.writeFile(
      "createdVIEW_FILE/newCreatedFile.html",  // some time tutorial had .directoryName/name/name but did not work. test this
      "hey this is new filder and new file",
      (err) => {
        if (err) return err;
        console.log("file creation successful in new directory");
      }
    );
  });
    }
else{
    console.log("There have the directory");
}

}
);

