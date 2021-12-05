// Collect input from a user
let sheegLambar = prompt(`walaal gali lambar`);

// Convert the input to a number
let wakanLambarku = +sheegLambar;

// Use Math.random() and the user's number to generate a random number
let lambarNasiibah = Math.floor( Math.random()*sheegLambar+1);

// Create a message displaying the random number
const sooSaar = document.querySelector('main').innerHTML = (`${lambarNasiibah} waa lambar nasiib ah oo u dhaxeeya 1 iyo ${sheegLambar}`);


