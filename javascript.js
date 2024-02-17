/***Javascript para la hoja de cálculo versión 2***/

//En primer lugar defino las variables

    //Máquina A
let reca1 = document.querySelector("#valorRecaudacion1");
let cargas1 = document.querySelector("#valorCargas1");
let efec1 = document.querySelector("#valorEfectivo1");
let ave1 = document.querySelector("#valorAverias1");

    //Máquina B
let reca2 = document.querySelector("#valorRecaudacion2");
let cargas2 = document.querySelector("#valorCargas2");
let efec2 = document.querySelector("#valorEfectivo2");
let ave2 = document.querySelector("#valorAverias2");

    //Máquina C
let reca3 = document.querySelector("#valorRecaudacion3");
let cargas3 = document.querySelector("#valorCargas3");
let efec3 = document.querySelector("#valorEfectivo3");
let ave3 = document.querySelector("#valorAverias3");

    //Variables comunes
let hopper = document.querySelector("#valorHopper");
let rec = document.querySelector("#valorRecarga");


//Esta es la función que realiza los cálculos

function auxiliar () {

    let recAuxiliar1 = (parseFloat(reca1.textContent) + parseFloat(cargas1.textContent) + parseFloat(hopper.textContent) - parseFloat(efec1.textContent) - parseFloat(ave1.textContent)).toFixed(1);
    let res1 = document.querySelector("#resultado1");
    let recAuxiliar2 = (parseFloat(reca2.textContent) + parseFloat(cargas2.textContent) + parseFloat(hopper.textContent) - parseFloat(efec2.textContent) - parseFloat(ave2.textContent)).toFixed(1);
    let res2 = document.querySelector("#resultado2");
    let recAuxiliar3 = (parseFloat(reca3.textContent) + parseFloat(cargas3.textContent) + parseFloat(hopper.textContent) - parseFloat(efec3.textContent) - parseFloat(ave3.textContent)).toFixed(1);
    let res3 = document.querySelector("#resultado3"); 
    let resultado = parseFloat(valorRecarga.textContent - recAuxiliar1 - recAuxiliar2 - recAuxiliar3).toFixed(1);
    let resGlobal = document.querySelector("#resGlobal");
    
    res1.textContent = recAuxiliar1 + " €";
    res2.textContent = recAuxiliar2 + " €";
    res3.textContent = recAuxiliar3 + " €";
    if (resultado == 0) {
        resGlobal.textContent = `La recarga auxiliar es correcta`;
        resGlobal.style.backgroundColor = "rgb(161, 148, 132)";
        resGlobal.style.fontWeight = 800;
    } else if (resultado >= 0) {
        resGlobal.textContent = `Sobran: ${resultado} € en la recarga auxiliar`;
        resGlobal.style.backgroundColor = "green";
        resGlobal.style.fontWeight = 800;
    } else if (resultado <= 0) {
        resGlobal.textContent = `Faltan: ${Math.abs(resultado)} € en la recarga auxiliar`;
        resGlobal.style.backgroundColor = "red";
        resGlobal.style.fontWeight = 800;
    }
};
function limpiar() {
    
    let entradas = document.querySelectorAll(".derecha");
    for (i = 0; i <= (entradas.length) - 1; i++) {
        entradas[i].textContent = 0;
    };
    auxiliar();   
}
//En este apartado se calcula el efectivo de cada máquina

//En primer lugar defino las variables

//Máquina A

let hopper11 = document.querySelector(".hopper11");
let hopper21 = document.querySelector(".hopper21");
let hopper31 = document.querySelector(".hopper31");
let billetes1 = document.querySelector(".billetes1");
let cajon1 = document.querySelector(".cajon1");

let hopper12 = document.querySelector(".hopper12");
let hopper22 = document.querySelector(".hopper22");
let hopper32 = document.querySelector(".hopper32");
let billetes2 = document.querySelector(".billetes2");
let cajon2 = document.querySelector(".cajon2");

let hopper13 = document.querySelector(".hopper13");
let hopper23 = document.querySelector(".hopper23");
let hopper33 = document.querySelector(".hopper33");
let billetes3 = document.querySelector(".billetes3");
let cajon3 = document.querySelector(".cajon3");



function calculoTotal() {
let total1 = (parseFloat(hopper11.textContent) + parseFloat(hopper21.textContent) +
    parseFloat(hopper31.textContent) + parseFloat(billetes1.textContent) +
    parseFloat(cajon1.textContent)).toFixed(1);
let resTotal1 = document.querySelector("#total1");
resTotal1.textContent = total1 + "€";

let total2 = (parseFloat(hopper12.textContent) + parseFloat(hopper22.textContent) +
    parseFloat(hopper32.textContent) + parseFloat(billetes2.textContent) +
    parseFloat(cajon2.textContent)).toFixed(1);
let resTotal2 = document.querySelector("#total2");
resTotal2.textContent = total2 + "€";

let total3 = (parseFloat(hopper13.textContent) + parseFloat(hopper23.textContent) +
    parseFloat(hopper33.textContent) + parseFloat(billetes3.textContent) +
    parseFloat(cajon3.textContent)).toFixed(1);
let resTotal3 = document.querySelector("#total3");
resTotal3.textContent = total3 + "€";

}