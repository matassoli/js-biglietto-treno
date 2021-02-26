var km = prompt("Inserisci i chilometri da percorrere:");
var anni = prompt("Inserisci la tua età:");
var prezzo = km * 0.21;
if (isNaN(km) || isNaN(anni)) {
  document.getElementById("price").innerHTML = "Per favore inserisci dei numeri";
} else if (anni < 18) {
  prezzoSc = (prezzo - (prezzo / 100) * 20);
} else if (anni > 65) {
  prezzoSc = (prezzo - (prezzo / 100) * 40);
} else {
  prezzoSc = prezzo;
}
document.writeln(prezzoSc + "€");
