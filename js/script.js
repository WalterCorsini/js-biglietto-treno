// // test
// // alert("ciao");

// // INPUT

// // variable result
// let result;

// // ask km
// let userKm = prompt("Quanti kilometri devi percorrere?"); //string | null
// userKm = parseInt(userKm); // string to number
// console.log(userKm, typeof userKm);

// // ask age
// let userAge = prompt("Quanti anni hai?"); //string | null
// userAge = parseInt(userAge); // string to number
// console.log(userAge, typeof userAge);

// //LOGIC

// // calculate price for km
// let price = userKm * 0.21; // number
// result = price;

// // check age or km isNaN else apply discoutn by age
// if(isNaN(userAge) || isNaN(userKm)){
//     result = "Hai inserito i dati in modo non corretto";
// } else if(userAge < 18){   
//     price = price * 0.8;

//     // fixed 2 number after ,
//     result = `il costo del tuo biglietto per percorrere ${userKm} km in base ai tuoi anni è di ${price.toFixed(2)}€`; 
// } else if(userAge > 65){
//     price = price * 0.6;

//     // fixed 2 number after ,
//     result = `il costo del tuo biglietto per percorrere${userKm} km in base ai tuoi anni è di ${price.toFixed(2)}€`; 
// }
// else{
//     result = `il costo del tuo biglietto per percorrere ${userKm} km in base ai tuoi anni è di ${price.toFixed(2)}€`; 
// }

// // OUTPUT

// // print to video result
// document.getElementById("result").innerHTML = result;

// test
// alert("ciao");

// 1. find button on page
const sendBtnElem = document.getElementById("send-btn"); // object | null

let userKm;
let userAge;
let discount = 0;
let priceWithoutDiscount = 0;
let priceOfTheDiscount = 0;
let priceWithDiscount =0;

// INPUT

// 2. add eventListener at button
sendBtnElem.addEventListener("click", function(){
    let userKm = parseInt(document.getElementById("user-km").value); //number
    // console.log(userKm, typeof userKm);
    let userAge = parseInt(document.getElementById("user-age").value); //number
    // console.log(userAge, typeof userAge);

// LOGIC

    // calculate discount
    if(userAge < 18){
        discount = 20;
    } else if(userAge > 65){
        discount = 40;
    } else {
        discount = 0;
    }
    // calculate price Without Discount
    priceWithoutDiscount = userKm * 0.21;  //number

    // calculate price of the discount
    priceOfTheDiscount = priceWithoutDiscount * discount / 100;  //number
    
    // calculate price with the discount
    priceWithDiscount = priceWithoutDiscount - priceOfTheDiscount;  // number

// OUTPUT

    // print to video
    document.getElementById("result").innerHTML = `
    <span>
        - il costo base del biglietto per <strong>${userKm}km</strong> inseriti è di <strong>€${priceWithoutDiscount.toFixed(2)}</strong>.
    </span>
    <span>
        - hai diritto ad uno sconto del <strong>${discount}%</strong> che equivale a <strong>€${priceOfTheDiscount.toFixed(2)}</strong>.
    </span>
    <span>
        - applicando lo sconto, il prezzo del biglietto è  <strong>€${priceWithDiscount.toFixed(2)}</strong>.
    </span>
    `

    // document.getElementById("result").innerHTML = `il costo del tuo biglietto di base è ${priceWithoutDiscount}, sulla base della tua età abbiamo visto che hai uno scont del ${discount} %, quindi il tuo biglietto subirà uno sconto di €${priceOfTheDiscount.toFixed(2)}, e dovrai pagare un totale di €${priceWithDiscount.toFixed(2)}`;
    
})




