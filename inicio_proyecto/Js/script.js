alert("HOla soy una ventana de script externo")


//tipos de datos---> cadena de caracteres
//String = "Hola soy una cadena;"

//char ='a';

//int edad = 15;

//numeros ---->enteros, decimales 10, 25, 1.25, etc
// booleanos ---> true  or false (1 , 0)
/*console.log(10 + 5)
console.log(3*2)
console.log(10 % 2) //resto de la division//
console.log(10%3)
console.log(10%7)
alert(10+5)
alert("10+5")
alert("100+1") */
//concatenar
/*alert("Pablo" + " " + "Dohmen")
alert("Pablo" + " Dohmen") */
/*alert("Pablo" +  "Edad: " +  (15+15))

alert("Beatriz Noemi")
console.log("beatriz noemi")
document.write("Beatriz Noemi")
*/
//Variables...> una caja con nombre y tipo de dato

/*PSEUDOCODIGO
1- DEFINIR LA VARIABLE  NOMBRE..
2- ASIGNAR UN VALOR DEL TIPO CADENA DE CARACTERES
3- METODO ALERT !!! 
4- ...*/
/*
var nombre = "Carla";

console.log(nombre)
alert(nombre)
alert("El nombre de usuario es: " + nombre)
document.write(nombre)

//realizar el algoritmo de sacar superficie de un cuadrado//

var lado= 10

var superficie = lado * lado
var superficie1 = lado **2
console.log("La superficie del cuadrado es: " + superficie)
alert("La superficie del cuadrado es: " + superficie)
document.write("La superficie del cuadrado es: " + superficie)


//perimetro...
//acumulador
var  ladoA = lado + 15
console.log(ladoA)
//contador
var contador = 0
contador += 1
contador += 1


//operador de incremento
contador++ //3
console.log(contador)
// operador decrementar
contador --
contador -= 1
console.log(contador)

//videojuegos... ALGORITMOS
var vidasMario = 3

const TORTUGA = 1 
const SUMARVIDA = 1

console.log("Inicio del juego:")
console.log("La vidad de Mario es: " + vidasMario)

vidasMario = vidasMario - TORTUGA

console.log("Primer tope con tortuga...")
console.log(vidasMario)

//TORTUGA = 0
vidasMario = vidasMario - TORTUGA
console.log("Primer tope con tortuga...")
console.log(vidasMario)


console.log("Encontrar una estrella...")
vidasMario = vidasMario + SUMARVIDA
console.log(vidasMario)

//Constantes---> valor fijo, no modificables
const PI = 3.141516
const E = 2.71
const  GRAVEDAD = 9.8
const IVA = 21

//

//alert("hola super Mario")
var numeroA = Number(prompt("Ingrese el numero"))

console.log(typeof numeroA)

//numeroA = Number(numeroA) //Método Number convierte un String a numero.

console.log(typeof numeroB)

var numeroB = Number(prompt("Ingrese el numero"))

//numeroB = Number(numeroB) //Método Number conviierte un String a numero.


console.log(numeroA)
console.log(numeroB)

var sumarNumeros =  numeroA + numeroB

console.log("La sunma de NA y NB es: " + sumarNumeros)

console.log(10 + 10)
console.log(10 + "10")
*/

//Trabajar con edades 
var edadUsusario = parseInt(prompt("Ingrese su edad: "))
alert("La edad del usuario es : " + edadUsusario)

//Condicionales

if (edadUsusario > 18){
    alert("Está permitido actualizar la APP")
}
else{
    alert("No puede actualizar la APP !!! PELIGRO!!")

}


//Operadores de comparación
/*
mayor >
mayor e igual >=
menor <
menor e igual<=
igual == (compara valor solamente!! )
igual estricto === ( compara tipo de dato y valor: typeof)
distinto !=

*/
console.log(10 > 5)  //---> true
console.log(10 < 8) //---> false
console.log(1 == 1) // --> true
console.log(1 != 1) // --> false
console.log(1==true) //-->true  es igual 1
console.log(1=== true)//---> false
console.log("++carecteres++")  
console.log("a" == "a")

//código ASCII
console.log("Casa" == "casa") //--> false
console.log("a" > "A")
console.log("a" < "A")

if (true){
    console.log("Hola soy un condicional")
}

if (10 > 5){
    console.log("Hola va a funcionar")
}

//Condicionales

const nombreUsuario = "JuanSe"
const passUsuario = "123456"
var password = prompt("Ingres su pass: ")
if (password === passUsuario){
    console.log("Hola va a igresar...")
}else {
    console.log("Lo lamento, no coincide su pass!!")
}


if (vidaMario == 0){
    alert("Game Over")
}


// Operadores Lógicos... operadores de relacion (AND --OR -- !=)
/*
TABLA DE VERDAD
        AND
TRUE AND TRUE = TRUE
TRUE AND FALSE = FALSE
FALSE AND TRUE = FALSE
FALSE AND FALSE = FALSE







*/







