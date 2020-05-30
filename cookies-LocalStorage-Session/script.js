//LOCAL STORAGE AND SESSION STORAGE functions are same
// ======localStorage===========
localStorage.setItem('fname', 'cdeepana') 
console.log(localStorage.getItem('fname'))
// localStorage.removeItem('fname')


// =======session storage ============
sessionStorage.setItem('lname','herath')
sessionStorage.setItem('lname','cherath') // update value
console.log(sessionStorage.getItem('lname'))
// sessionStorage.removeItem('lname')

// ======COOKIES ======
// document.cookie = 'Mname=chat' 
document.cookie = 'Mname=chat; expires=' + new Date(2020,10,5).toUTCString();

console.log(document.cookie);