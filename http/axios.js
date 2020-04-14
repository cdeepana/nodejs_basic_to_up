const axios = require('axios');

let username = 'cdeepana';
axios.get('https://api.github.com/users/' + username).then( res => {
    console.log(res.data.blog);   //res.data.followers
}).catch((err) => {
    console.log(err);
})