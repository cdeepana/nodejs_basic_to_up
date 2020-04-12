const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, res => {
    // console.log("res ==>", res.setEncoding('utf8'));
    res.setEncoding('utf8');

    let body = '';
    res.on('data', data => {
        body += data;
    });
    res.on('end', () => {

        // fs.writeFile('data', body, 'utf8', (err) => {
        //     if(err) return err;
        //     console.log('pulled all the post and created file');
        // });

        body = JSON.parse(body);
        console.log(body.length);
        for(i = 0; i < body.length; i++){
        console.log( ` ${body[i].title}`)
        }
    })
})