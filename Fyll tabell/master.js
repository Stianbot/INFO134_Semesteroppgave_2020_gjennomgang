/*
Utfordring: "skrive ut" informasjon til tabell.
Legg merke til at responsen er nødt til å komme tilbake med data før en kan vise den på nettsiden.
Ressursen er laget kunstig treig, så den bruker ca 1,5 sekunder på å laste.
Prøv å refresh siden og klikk på "Fyll tabell" (litt fort), så vil dere få en feilmelding.
Om dere klikker på knappen etter 1,5 sekunder så vil data være kommet inn og den vil bli vist på siden.
*/

// NOTE: request som i alle andre eksempler.
function hent(url, obj , f) {
  var request = new XMLHttpRequest();
  request.open("GET", url)
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      obj.data = JSON.parse(request.responseText)
      if (f) {f(obj)}};
  }
  request.send()
}

// NOTE:konstruktør for å lage
function Search(key, limit) {
  this.template = "https://api.digitalarkivet.no/v1/census/1910/search_person?s="
  this.key = key
  this.limit ="&limit=" + limit
  this.url = this.template + this.key + this.limit
  this.data = null
}

// NOTE: oppretter et objekt av tyoen Search ved hjelp av konstruktør.
// NOTE: En god callback-funksjon å sette inn er, er en som skrur på knappen.
var grieg = new Search("Grieg", 100)
// NOTE: bruker timeout for å simulere en litt treig ressurs. (bruker litt over 1,5 sekunder.)
setTimeout(function () {hent(grieg.url, grieg)}, 1500);

/*
Funksjon som samler informasjon som skal vises i table.
*/
function prepTable(data) {
  var tableinfo = document.getElementById('info')
  for (var variable in data.results) {
    var tr = document.createElement("TR")
    tr.appendChild(createTd(data.results[variable].fornavn))
    tr.appendChild(createTd(data.results[variable].etternavn))
    tr.appendChild(createTd(data.results[variable].fodested))
    tr.appendChild(createTd(data.results[variable].fodselsaar))
    tableinfo.appendChild(tr)
  }
}

// NOTE: Hjelpefunksjon til prepTable()
function createTd(text) {
  var x = document.createElement("td")
  var y = document.createTextNode(text)
  x.appendChild(y)
  return x
}
