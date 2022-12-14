//Clase Cliente

class Cliente {
    constructor(nombre, apellido, dni, plazoFijo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.plazoFijo = plazoFijo;        
    }
}


const clienteAgustin = new Cliente("Agustin", "Goni", 12345678, 10000);
const clienteVirginia = new Cliente("Virginia", "Amestoy", 87654321, 20000);
const clientePilar = new Cliente("Pilar", "Goni Amestoy", 12345876, 10000000);

const arrayClientes = [];

arrayClientes.push(clienteAgustin);
arrayClientes.push(clienteVirginia);
arrayClientes.push(clientePilar);

console.log(arrayClientes);

//Función con el menú de opciones:

function menu() {
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
    let cliente = new Cliente(nombre, apellido, dni, plazoFijo);
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
}
/* let nombreCliente = prompt("Ingrese su nombre :");
let monto = prompt("Ingrese el Monto del Plazo Fijo: ");
 */

/* function plazoFijo(monto){
    if(monto>=1500 && monto<10000000){
        let interesAnual = monto * 0.75; 
        return interesAnual;
        
    }else if(monto>=10000000){
        let interesAnual = monto *0.66;
        return interesAnual;
        
    }else{
        alert("No puedes realizar el plazo fijo : ");
    }
       
} */


    /* if(monto>=1500  && monto<10000000){
        alert (nombreCliente+" tu plazo fijo generara un interes anual de "+(plazoFijo(monto).toFixed(2))+" pesos");
    }else{
        alert (nombreCliente+" tu plazo fijo generara un interes anual de "+(plazoFijo(monto).toFixed(2))+" pesos"); 
    }  */


 