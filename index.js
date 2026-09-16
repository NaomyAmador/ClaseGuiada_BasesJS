//Práctica guiada No. 1 - Java Básico y Crecaión de variables/Mini Programa
//Variables a usar
let nombre = prompt("Ingrese su Nombre")
let apellido = prompt("Ingrese su Apellido")
let fechaNacimiento = prompt("Ingrese su Fecha de Nacimiento")
let edad = 2026 - fechaNacimiento
let esMayorEdad = edad >= 18

//Mostrar en Servidor Web
//Ojo: Se debe de ejecutar en Live Server en el archivo HTML, debido a que ese esta conectado al .js
if (esMayorEdad) {
    document.write("Hola, " + nombre + "" + apellido + "Su año de nacimiento es " + 
        fechaNacimiento + " por lo que usted es Mayor de edad!")
} else {
    document.write(`Hola, ${nombre} ${apellido} su año de nacimiento es ${fechaNacimiento} 
        por lo que usted NO es mayor de edad`)
}