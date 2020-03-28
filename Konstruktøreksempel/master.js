/*
Les LESMEG.txt filen først
/*
Funksjon som henter data fra en ekstern ressurs. Tar tre argumenter i parameteret
url: hvor den skal hente data fra.
obj: et objekt som blir tilskrevet en egenskap "data" hvor responsen til requesten lagres.
callback: en funksjon som blir kjørt når responsen til requesten er kommet.
*/
function hent(url, obj, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url)
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      obj.data = JSON.parse(request.responseText)
      if (callback) {callback(obj)}};
  }
  request.send()
}

/*
Konstruktør for søkeobjektet. Konstruktøren har seks egenskaper i utgangspunktet (to til lages via metoder):
søkeord: ordet jeg ønsker å søke etter
onload: en funksjon jeg ønsker å kjøre etter at data er hentet inn
template: mal for url (nødvendlig for å kunne hente ut data fra digitalarkivet)
lagUrl: metode som lager en komplett url. template + søkeord, lagrere dette i this.url
load: metode som henter data fra ekstern ressurs (kall til hent()), bruker url, this (objektet) og onload. legger responsen til requesten i this.data
getNames: metode som returnerer en liste av alle navnene som er i this.data (fornavn og etternavn)
*/
function Søk(søkeord, t) {
  this.søkeord = søkeord
  this.onload = t || null
  this.template = "https://api.digitalarkivet.no/v1/census/1910/search_person?s="
  this.lagUrl = function() {this.url = makeUrl(this.template, this.søkeord)}
  this.load = function() {
    if (this.url != undefined) {
          hent(this.url, this, this.onload)}
    if (this.url == undefined) {
      throw("url mangler!")
    }
  }
  this.getNames = function() {return hentNavn(this.data)}
}

/*
Lager et objekt av typen Søk ved hjelp av Søk-Konstruktøren
Kaller også på to metoder (lagUrl(), load()) for henholdsvis å lage komplett url og laste ned data

*/
var grieg = new Søk("Grieg")
grieg.lagUrl()
grieg.load()

/*
Samme som over. Bare med ulikt søkeord.
funksjonen som oppgis i parameteret er en hjelpefunksjon som skrur på alle knappene på nettsiden.
Det blir også kalt på hide() som er en hjelpefunksjon som skjuler "lasterskjerm"-tekst
En treje funksksjon blir også kalt,som skriver ut resultatet av søket på nettsiden.
Merk at dette skjer bare etter at data er ferdig lastet ned.
*/
var bull = new Søk("Bull", function() {alterButtons(false); hide("laster"); printToPage(bull) ;})
bull.lagUrl()
// NOTE: Kjører load() med en timeout for å simulere en treg ressurss
setTimeout(function () {bull.load()}, 2000);
// NOTE: denne gir undefined i konsoll fordi data ikke er lastet inn enda. Det tar (+)to sekunder å laste inn data
console.log(bull.data);

/*
hjelpefunksjon til å lage url.
*/
function makeUrl(a,b) {
  return a + b
}

/*
Funksjon som returnerer en liste med navn fra et søk-datasett
tar et argument: søk-data
funksjonen logger responsen i konsollen men returnerer også en liste med navnene. Den setter sammen fornavn og etternavn i en tekst-streng.
*/
function hentNavn(data) {
  var l = []
  for (var person in data.results) {
    console.log(data.results[person].fornavn, data.results[person].etternavn);
    l.push(data.results[person].fornavn + " " + data.results[person].etternavn)
  }
  return l
}

/*
Funksjon som henter ut alle knappene på nettsiden og setter de å være enabled/disabled
basert på hvilken boolsk verdi som oppgis som argument i parameteret.
*/
function alterButtons(bool) {
var buttons = document.getElementsByTagName('button')
for (var i = 0; i < buttons.length; i++) {
  buttons[i].disabled = bool;
}
}

/*
Funksjon som printer data til nettsiden. (legger in <li></li> elemente i en <ul></ul>).
Tar som argument et objekt laget av Søk-Konstruktøren, altså et søkeobjekt.
*/
function printToPage(person) {
  var plassering = document.getElementById("liste")
  var liste = person.getNames()
  for (var i = 0; i < liste.length; i++) {
    var li = document.createElement("LI")
    var text = document.createTextNode(liste[i])
    li.appendChild(text)
    plassering.appendChild(li)
  }
}

/*
Hjelpefunksjon som gjemmer et element på html-siden basert på oppgitt ID.
*/
function hide(id) {
document.getElementById(id).style.display = "none"
}

/*
Skrur av alle knapper når nettsiden er lastet inn.
Altså slik at de er skrudd av som utgangspunkt.
*/
window.onload = function() {alterButtons(true)}
