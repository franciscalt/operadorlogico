var nombre = prompt("ingresa tu nombre")
var edad = prompt("Cual es tu edad edad ")
var quiero = prompt(" cuandos años quieres tener ?")

var resta = Number(edad) - Number(quiero)
var resta1 = Number(quiero) - Number(edad)


if(quiero < edad) {
 alert('no puedes rejuvencer! ' + resta + "  años ")
}
 else{
    ('te faltan'+ resta + " años ")
 }

 if(quiero > edad) {
alert(" te faltan, " + resta1 + " años " )
}
 else{
    ('te faltan'+ resta1 + " años ")
 }

 if(quiero = edad) {
alert(" tu edad esta bien ")
}




