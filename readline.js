var readline =  require('readline');
var util = require('util');

var RL =  readline.createInterface(process.stdin, process.stdout);

RL.question('What is you name ? ', (name) => {
    console.log("name ==> ",name);

    RL.setPrompt(`${name} how old are you ? `);
    RL.prompt();

    RL.on('line', (age) => {  // waiting for input any text [  RL.on]

        if(age < 18) {
            util.log(`${name.trim()} because you are ${age} years old, you cannot `)
            RL.close();
        }
        else{
            util.log(`${name.trim()} is great . you are ${age} years old. You are ok !!!`);
            RL.close();
        }
    });
    //process.exit();
});
