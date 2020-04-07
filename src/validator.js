const validator = { //Objeto validator


    //Metodo para comprobar numero tarjeta usando el algoritmo de Luhn
    isValid(creditCardNumber) {

        let arregloNumeros = new Array(10); //Creamos un arreglo para guardar los numeros
        let totalNumeros = 0; //Inicializamos la variable para sumar los numeros del arreglo

        arregloNumeros = creditCardNumber.split("");
        arregloNumeros.reverse(); //Damos vuelta el arreglo para la formula

        for (let i = 0; i < arregloNumeros.length; i++) { //Recorrer el arreglo
            let multNumero = arregloNumeros[i];
            if ((i % 2) !== 0) {//Solo posiciones pares

                multNumero *= 2; //Multiplica por dos el numero de la posicion par


                if (multNumero > 9) {//Si el resultado es mayor a 9
                    multNumero = multNumero % 10 + 1; //Formula para sumar los digitos que lo conforman

                }
                arregloNumeros[i] = multNumero; //Se le asigna el numero resultante a la posicion par


            }
            totalNumeros += parseInt(arregloNumeros[i]); //Transforma el arreglo a enteros y los suma



        }


        if (totalNumeros % 10 == 0) { //Si la suma total de los numeros es multiplo de 10
            return true; //El numero de la tarjeta es valido. 

        } else {//Si no
            return false; //El numero es invalido. 
        }

    },

    //Metodo para ocultar caracteres
    maskify(creditCardNumber) {

        if (creditCardNumber.length > 4) {//Si el numero tiene mas de 4 digitos
            let numeroOculto = new Array(creditCardNumber.length - 3).join('#');//Crear un arreglo donde se guardan los #

            numeroOculto += creditCardNumber.substring(creditCardNumber.length - 4);//Agregar  los ultimos 4 caracteres

            return numeroOculto;
        } else {
            return creditCardNumber;
        }




    }

};


export default validator;
