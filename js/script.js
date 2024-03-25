// test
// alert("ciao");

// INPUT

// variable result
let result;

// ask km
let userKm = prompt("Quanti kilometri devi percorrere?"); //string | null
userKm = parseInt(userKm); // string to number
console.log(userKm, typeof userKm);

// ask age
let userAge = prompt("Quanti anni hai?"); //string | null
userAge = parseInt(userAge); // string to number
console.log(userAge, typeof userAge);

//LOGIC

// calculate price for km
    let price = userKm * 0.21; // number
    
// if user age not < 18year and not > 65year
    result = price;

// calculate price for age
    if(userAge < 18){
        result = price * 0.8;
    } else if(userAge > 65){
        result = price * 0.6;
    }
    // fixed 2 number after ,
    result = result.toFixed(2);

    // OUTPUT

    // print to video result
    document.getElementById("result").innerHTML =`il costo del tuo biglietto per percorrere ${userKm}km in base ai tuoi anni è di ${result}€`;
