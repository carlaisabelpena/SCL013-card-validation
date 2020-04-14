import validator from './validator.js'; //Importamos el objeto validator del otro archivo JS

//Botones 
let botonConfirmar=document.getElementById("confirmarbtn");
let botonVolver=document.getElementById("volverbtn");

let creditCardNumber; //Definiendo variable donde guardaremos el numero que ingresa el usuario
botonConfirmar.addEventListener("click",function(){ //Funcion para validar campo de texto admitiendo solo numeros
    let numeroParaComprobar = document.getElementById("numTarjeta").value; //Guarda lo ingresado
     
    let numeroEnmascarado;
    
    //Condicion, si el campo esta vacio, tiene espacios, etc mostrar mensaje
    if(numeroParaComprobar==null || numeroParaComprobar=="" || document.getElementById("numTarjeta").value.indexOf(" ") !== -1) {     
        alert("El campo no puede estar vacio");
        document.getElementById("error").innerHTML = "Ingrese numero de tarjeta valido";
        document.getElementById("mensajeError").style.display = "block"; //Mostrar en la pagina mensaje de error
        
  
    }else if(isNaN(numeroParaComprobar)){
        alert("Solo ingrese numeros");
    }else{//Si la tarjeta es solo numeros
         creditCardNumber=numeroParaComprobar; //Guardamos los numeros en la variable
         
         if(validator.isValid(creditCardNumber)==true){ //Si es un numero de tarjeta valido
            alert("funciona"); //borrar despues
            numeroEnmascarado=validator.maskify(creditCardNumber); //Enmascaramos los digitos con #
            alert(numeroEnmascarado); //Borrar despues
            //Aqui redirigir a la ultima pantalla html y mostrar el digito oculto con # al usuario
            
         }
         if(validator.isValid(creditCardNumber)==false){
            alert("numerofalso"); //Borrar despues
            numeroEnmascarado=validator.maskify(creditCardNumber); //Enmascaramos los digitos con #
            alert(numeroEnmascarado); //Borrar despues
            document.getElementById("error").innerHTML = "Ingrese numero de tarjeta valido";
            document.getElementById("mensajeError").style.display = "block"; //Mostrar en la pagina mensaje de error
         }
    }
});

//Boton para volver
botonVolver.addEventListener("click",function(){ //Boton para volver a pagina anterior

});




