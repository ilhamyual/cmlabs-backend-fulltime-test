const readline = require('readline');
const mulai = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function palindrom(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');
    let kebalikan = str.split('').reverse().join('');
    return str === kebalikan;
}

mulai.question('Masukkan sebuah kata: ', (jawaban) => {
    if (palindrom(jawaban)) {
        console.log('True, itu adalah palindrome.');
    } else {
        console.log('False, itu bukan palindrome.');
    }
    mulai.close();
});
