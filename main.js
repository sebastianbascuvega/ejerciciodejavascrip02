var Nombre = prompt("ingresa tu nombre")
var edad = prompt("Ingresa tu edad")
var pregunta = prompt("cuantos años te gustarìa tener")

var faltan = Number(edad) - Number(pregunta)
var sobran = Number(edad) - Number(pregunta)

if (edad < pregunta) {
  alert(" te sobran " + faltan + " años ")
}
else {
  alert(" te faltan" + sobran + " años ")
}

