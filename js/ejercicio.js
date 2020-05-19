
//Funcion Declartiva
function Saludar() {
    return 'Hola a todos';
}


//Funcion Expresiva
var Bailar = function(){
    return 'Yo bailo muy mal';
}


//Funciones con parémtros

//Funcion Sumar
function Sumar(num1,num2) {
    console.log (num1 + num2);
}

Sumar (80+25);

//Funcion Restar
function Resta(a,b) {
    console.log (`El resultado de la resta es: ${a -b}` );
}

/*
    Tipos de valores
    ------------------
*/
//Valor número
var numero = 25;

//Valor de Texto(String)
var texto = 'Hace un dia soleado';

//Valores Booleanos
var verdadero = True;

//Valores Tipo Objeto
var lista=['manzana','pera','naranja','melocoton'];



//BOOLEAN
Boolean (5>10);
//False

Boolean (3);
//True


//OPERADORES ARITMETICOS
/*

+ = SUMA
- = resta 
* = multiplicacion 
/  = division
%  = resto
** = elevado a 

*/


//OPERADORES DE IGUALDAD

7 == '7' //-->true

7 === '7' //-->false. Mira tanto el valor como el tipo de valor.

7 != '8' //--->true. Quiere decir que no es igual.


//OPERADORES DE COMPARACION 
10>20; //False
10<20; //True
20>=10 //True
20<=10 //False

