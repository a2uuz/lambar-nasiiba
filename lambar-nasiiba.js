// Collect input from a user
let lambarYar = prompt(`gali lambar yar`);
let lambarWayn = prompt(`gali lambar wayn`);

// Convert the input to a number
let lamYar = +lambarYar;
let lamWay = +lambarWayn;

if(lamYar && lamWay){
// Use Math.random() and the user's number to generate a random number
let lambarNasiibah = Math.floor( Math.random()*(lamWay-lamYar+1))
+lamYar;

// Create a message displaying the random number
const sooSaar = document.querySelector('main').innerHTML = (`${lambarNasiibah} waa lambar nasiib ah oo u dhaxeeya ${lamYar} iyo ${lamWay}`);
} 
else {const hadiiKale = document.querySelector('main').innerHTML = (`Walaal Gali Laba Lambar !!`); 
}