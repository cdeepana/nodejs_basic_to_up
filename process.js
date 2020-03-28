/* console.log(process.argv); // process happening locations 1) node.exe path and  process occuring space like d:\\newfolder\\process

var flag = process.argv.indexOf('_chathura'); // when we type  "node process _chathura"  and execute it will detect which line have string _chathura 
                                            // and stored it with flag variable
console.log(flag);  */

process.stdout.write('Enter anything : ');  // standard output so it will print some text and after

process.stdin.on('data',(answer) => {   // stdin also standard input it waiting to input some thing like text so
    console.log(answer, "2222", typeof(answer));  // type is object with ascii value
    console.log(answer.toString().trim()); // convert ascii value to string and  remove whitespace line after printing

    process.exit(); // this will terminate the current process  after done and reach this line
});