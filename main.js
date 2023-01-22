//Clase Cliente

class Cliente {
    constructor(nombre, email, monto, plazo) {
        this.nombre = nombre;
        this.email = email;
        this.monto = monto;
        this.plazo = plazo;    
    }
    calcularPlazoFijo() {

        if(this.monto>=1500 && this.monto<=10000000 && this.plazo>=30){
            let Interes = (this.monto * 0.75)*this.plazo/365;
            return Interes.toFixed(2);
        }else if(this.monto>10000000 && this.plazo>=30){
            let Interes = (this.monto * 0.665)*this.plazo/365;
            return Interes.toFixed(2);
        }
    }
}

//Creo un Array de Objetos

const clientes = [];

const idFormulario = document.getElementById("formulario");

idFormulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const monto = document.getElementById("monto").value;
    const plazo = document.getElementById("plazo").value;

    //Creo el objeto cliente
    const cliente = new Cliente(nombre, email, monto, plazo);

    //Agrego los datos en el Array
    clientes.push(cliente);

    //Guardo los datos en el Storage
    localStorage.setItem("Cliente", JSON.stringify(clientes));

    //Limpio el formulario
    idFormulario.reset();

    mostrarPlazoFijo(cliente);
});

//Creo la funcion mostrar Plazo Fijo
const informacion = document.getElementById("infoUsuarios");

const mostrarPlazoFijo = (cliente) => {
    let aux = "";
    aux += `<p class="informacion">${cliente.nombre}</p>
            <p class="informacion">Interes: ${cliente.calcularPlazoFijo()}</p>`

            informacion.innerHTML = aux;
}

const botonAdmin = document.getElementById("admin");
const datosAdmin = document.getElementById("datosAdmin");

botonAdmin.addEventListener("click", () => {
    const clientes = JSON.parse(localStorage.getItem("Cliente"));
    let aux = "";
    clientes.forEach(cliente => {
        aux += `<p class="informacion">Nombre: ${cliente.nombre}</p>
                <p class="informacion">Email: ${cliente.email}</p> <hr>`
    });
    datosAdmin.innerHTML = aux;
});

botonAdmin.addEventListener("click", () => {
    Toastify({
        text:"Se realizo con exito la operacion",
        duration: 3000,
        position:"rigth",
        gravity: "bottom"
    }).showToast();
});

const dolar = "https://criptoya.com/api/dolar";

const divDolar = document.getElementById("divDolar");

setInterval( () => {
    fetch(dolar)
        .then( response => response.json())
        .then(({blue, ccb, ccl, mep, oficial, solidario}) => {
            divDolar.innerHTML = `
            <h2>Valor del Dolar: </h2>
            <p>Dolar oficial: ${oficial} </p>
            <p>Dolar Solidario: ${solidario} </p>
            <p>Dolar MEP: ${mep} </p>
            <p>Dolar CCL: ${ccl} </p>
            <p>Dolar CCB: ${ccb} </p>
            <p>Dolar Blue: ${blue} </p>
            `
        })
        .catch(error => console.error(error))
    }, 3000)


 