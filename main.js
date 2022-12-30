//Clase Cliente

class Cliente {
    constructor(nombre, apellido, dni, plazoFijo,interes) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.plazoFijo = plazoFijo;
        this.interes = interes;
        
    }
}


const clienteAgustin = new Cliente("Agustin", "Goni", 12345678, 10000,7500);
const clienteVirginia = new Cliente("Virginia", "Amestoy", 87654321, 20000, 15000);
const clientePilar = new Cliente("Pilar", "Goni Amestoy", 12345876, 10000000, 6600000);

const arrayClientes = [];

/* arrayClientes.push(clienteAgustin);
arrayClientes.push(clienteVirginia);
arrayClientes.push(clientePilar);
 */
/* console.log(arrayClientes); */

const verPlazoFijo = document.getElementById("verPlazoFijo");

verPlazoFijo.addEventListener("click", () =>{
    calcularTotal();
})


//Mostramos mensaje con el total del plazo fijo

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalPlazofijo = 0;
    arrayClientes.forEach(cliente => {
        totalPlazofijo += cliente.plazoFijo * producto.interes;    
    })
    total.innerHTML = `Total: $${totalPlazofijo}`;
}

//Función con el menú de opciones:

/* function menu() {
    alert("Bienvenido al Banco Nacion");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de Plazo Fijo \n 2) Baja de Plazo Fijo \n 3) Consulta de Plazo Fijo \n 4) Salir "));
    return opcion;
}

//Función para dar de alta un Plazo Fijo:

function altaPlazoFijo() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let plazoFijo = parseInt(prompt("Ingrese el monto de plazo fijo : "));
    
    function interesAnual(plazoFijo){
        if(plazoFijo>=1500 && plazoFijo<10000000){
            return plazoFijo * 0.75; 
            
           
       }else if(plazoFijo>=10000000){
            return plazoFijo *0.66;
           
           
       }else{
           alert("No puedes realizar el plazo fijo : ");
       };
    };
    let interes = interesAnual(plazoFijo);
    let cliente = new Cliente(nombre, apellido, dni, plazoFijo, interes);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

//Función para dar de baja un Plazo Fijo:

function bajaPlazoFijo() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}

//Función para consultar un Plazo Fijo:

function consultaPlazoFijo() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}

//Función para salir del programa:

function salir() {
    alert("Gracias por utilizar el Banco Nacion");
}

//Ejecuto el el programa:

let opcion = menu();
switch (opcion) {
    case 1:
        altaPlazoFijo();
        break;
    case 2:
        bajaPlazoFijo();
        break;
    case 3:
        consultaPlazoFijo();
        break;
    case 4:
        salir();
        break;
    default:
        alert("Opción incorrecta, volve a intentar!!!");
        break;
} */



 