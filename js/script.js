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
result = price;

// check age or km isNaN else apply discoutn by age
if(isNaN(userAge) || isNaN(userKm)){
    result = "Hai inserito i dati in modo non corretto";
} else if(userAge < 18){   
    price = price * 0.8;

    // fixed 2 number after ,
    price = price.toFixed(2);
    result = `il costo del tuo biglietto per percorrere ${userKm} km in base ai tuoi anni è di ${price}€`; 
} else if(userAge > 65){
    price = price * 0.6;

    // fixed 2 number after ,
    price = price.toFixed(2);
    result = `il costo del tuo biglietto per percorrere${userKm} km in base ai tuoi anni è di ${price}€`; 
}
else{
    result = `il costo del tuo biglietto per percorrere ${userKm} km in base ai tuoi anni è di ${price}€`; 
    }

// OUTPUT



// print to video result
document.getElementById("result").innerHTML = result;






