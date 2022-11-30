let nombreCliente = prompt("Ingrese su nombre :");
let monto = prompt("Ingrese el Monto del Plazo Fijo: ");


function plazoFijo(monto){
    if(monto>=1500 && monto<10000000){
        let interesAnual = monto * 0.75; 
        return interesAnual;
        
    }else if(monto>=10000000){
        let interesAnual = monto *0.69;
        return interesAnual;
        
    }else{
        alert("No puedes realizar el plazo fijo : ");
    }
       
}


    if(monto>=1500  && monto<10000000){
        alert (nombreCliente+" tu plazo fijo generara un interes anual de "+(plazoFijo(monto).toFixed(2))+" pesos");
    }else{
        alert (nombreCliente+" tu plazo fijo generara un interes anual de "+(plazoFijo(monto).toFixed(2))+" pesos"); 
    } 


 