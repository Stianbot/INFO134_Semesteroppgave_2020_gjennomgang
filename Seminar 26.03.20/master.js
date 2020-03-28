
//Utfordring: Sjekk om kommunenummer er gyldig.

/*
  Funksjon som henter ut verdi fra input-felt, tar ett argument: id til input-
  felt. Funksjonen returnerer kommunenummer om det er gyldig.
*/
function hentInput(arg) {
  var kn = document.getElementById(arg).value
  if (kn === "") {
    throw "Skriv inn et kommuenummer"
  }
  var knummer = ["0101", "1201", "2013", "4100", "5840"]
  var tall = 0;
  if (kn != "") {
    for (var nummer in knummer) {
      if (kn == knummer[nummer]) {
        tall = 1
        return kn
      }
    }
    if (tall === 0) {throw "skriv inn et gyldig kommuenummer"}
  }
}

function printDetaljer() {
var kommunenummer = hentInput("oversikt_input")

// NOTE: psudokode
//var restultat = finnKommune(kommunenummer, "data fra XMLHttpRequest")

}

// NOTE: psudokode (fungerer ikke)
function finnKommune(nummer, data) {
  console.log(data.elementer[nummer]);
  for (var k in data.elementer) {
    if (nummer == data.elementer[k].kommuenummer) {
      return data.elementer[k]
    }
  }
}

/*
Funksjon for å legge til data i table
*/
function createTableTd() {
var x = document.getElementById("test")
var td = document.createElement("TD")
// NOTE: data som legges i "tekst" variabelen blir lagt ut på nettsiden.
var tekst = document.createTextNode("Bergen")
td.appendChild(tekst)
x.appendChild(td)
}

/*
Funksjon som viser og skjuler elementer ved tilskriving av klasse.
tar ett argument: v som er index i y-listen, på hvilket element som skal vises.
De andre elementene skjules
*/
function vis(v) {
  var p_list = document.getElementsByTagName("p")
  var y = [p_list[2],p_list[3],p_list[4]]
  for (var i = 0; i < y.length; i++) {
    y[i].className = "hidden"
  }
  y[v].className = "visible"
}
