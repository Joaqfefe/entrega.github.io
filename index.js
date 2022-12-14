// Generar GIF Ronnie Coleman
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackgroundColor() {
    var colorBg = document.getElementById("color-overlay");
    colorBg.style.backgroundColor = generateRandomColor();
}

function changeBackgroundText() {
    var textBg = document.getElementById("text-bg");
    if (textBg.innerHTML == "TRAIN") {
        textBg.innerHTML = "OR";
    } else if (textBg.innerHTML == "OR") {
        textBg.innerHTML = "DIE";
    } else if (textBg.innerHTML == "DIE") {
        textBg.innerHTML = "TRAIN";
    }
}
function changeBackground() {
    changeBackgroundColor();
    changeBackgroundText();
}
setInterval(changeBackground, 700);

// Tienda
let button1 = document.getElementsByClassName('boton1');
let button2 = document.getElementsByClassName('boton2');
let button3 = document.getElementsByClassName('boton3');
let button4 = document.getElementsByClassName('boton4');
let button5 = document.getElementsByClassName('boton5');
let button6 = document.getElementsByClassName('boton6');

var clicks_button1 = 0;
var clicks_button2 = 0;
var clicks_button3 = 0;
var clicks_button4 = 0;
var clicks_button5 = 0;
var clicks_button6 = 0;
var factura_final = 0;

function sumaprecios() {
    factura_final = clicks_button1 * 35 + clicks_button2 * 100 + clicks_button3 * 20 + clicks_button4 * 80 + clicks_button5 * 95 + clicks_button6 * 85;
    console.log(factura_final);
    alert(`El precio total es de: ${factura_final}\$`);
}


function clicks1() {
    clicks_button1 += 1;
    button1.innerHTML = clicks_button1;
    let name = document.querySelector("#producto1 .name").innerText;
    let price = document.querySelector("#producto1 .price").innerText;
    addElement(name, price);
}

function clicks2() {
    clicks_button2 += 1;
    button2.innerHTML = clicks_button2;
    let name = document.querySelector("#producto2 .name").innerText;
    let price = document.querySelector("#producto2 .price").innerText;
    addElement(name, price);
}

function clicks3() {
    clicks_button3 += 1;
    button3.innerHTML = clicks_button3;
    let name = document.querySelector("#producto3 .name").innerText;
    let price = document.querySelector("#producto3 .price").innerText;
    addElement(name, price);
}

function clicks4() {
    clicks_button4 += 1;
    button4.innerHTML = clicks_button4;
    let name = document.querySelector("#producto4 .name").innerText;
    let price = document.querySelector("#producto4 .price").innerText;
    addElement(name, price);
}

function clicks5() {
    clicks_button5 += 1;
    button5.innerHTML = clicks_button5;
    let name = document.querySelector("#producto5 .name").innerText;
    let price = document.querySelector("#producto5 .price").innerText;
    addElement(name, price);
}


function clicks6() {
    clicks_button6 += 1;
    button6.innerHTML = clicks_button6;
    let name = document.querySelector("#producto6 .name").innerText;
    let price = document.querySelector("#producto6 .price").innerText;
    addElement(name, price);
}

function vaciarprecios() {
    clicks_button1 = 0;
    clicks_button2 = 0;
    clicks_button3 = 0;
    clicks_button4 = 0;
    clicks_button5 = 0;
    clicks_button6 = 0;
    document.getElementById("list").innerHTML = null;
    document.getElementById("items").style.display="none";
}

function addElement(name, price) {
    let list = document.getElementById("list");
    document.getElementById("items").style.display="flex";
    list.innerHTML = list.innerHTML + "<li>" + name + " - " + price + "</li>";
}
