/*
Koden til denne nettsiden er bare ment som inspirasjon, og får å demonstrere hvordan det er mulig å løse
utfordringer som kan ligne på det dere møter på i den karaktersatte semesteroppgaven.
Det er ikke meningen at dere skal kopiere denne koden og bruke den i den karaktersatte semesteroppgaven.
Altså ikke kopier denne koden for bruk i deres egne prosjekter.
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
  return obj.data
}

// NOTE:konstruktør for å lage
function Search(key, limit, callback) {
  this.template = "https://api.digitalarkivet.no/v1/census/1910/search_person?s="
  this.key = key
  this.limit ="&limit=" + limit
  this.url = this.template + this.key + this.limit
}


/*
Funksjon som oppretter søke-objekter av to navn, som skal sammenlignes.
*/
function prepp(navn1, navn2) {
  en = new Search(navn1, 10)
  to = new Search(navn2, 10)

// NOTE: lenker requestene sammen, slik at den først henter ett datasett, så henter det andre.
// til slutt blir en funksjon kjørt i callback (sammnelign)
  hent(en.url, en, function() {hent(to.url, to, function() {
    sammenlign(en,to)})})
}

/*
Funksjon som sammenligner to "slekter". Sjekker hvem som har flest eldste slektninger.
Det utropes en vinner (veldig primitiv variant)

viser to måter å holde tellingen på poengene.
*/
function sammenlign(obj1, obj2) {
  var venstre = []
  var høyre = []
  var v = 0
  var h = 0
  for (var i = 1; i < obj1.data.results.length; i++) {
      console.log(obj1.data.results[i].fodselsaar, obj2.data.results[i].fodselsaar);

      if (obj1.data.results[i].fodselsaar < obj2.data.results[i].fodselsaar === true) {
        venstre.push(1)
        høyre.push(0)
        v += 1
        h += 0
      }

      if (obj1.data.results[i].fodselsaar < obj2.data.results[i].fodselsaar === false) {
        venstre.push(0)
        høyre.push(1)
        v += 0
        h += 1
      }
  }
  console.log(venstre, høyre);

  var resultat_v = summer(venstre)
  var resultat_h = summer(høyre)
  console.log(resultat_v, resultat_h);
  console.log(v,h);
  // NOTE: Disse gjør akkurat det samme
  vinner(resultat_v, resultat_h)
  vinner(v,h)

}

/*
Hjelpefunksjon som summerer alle tallene i en liste.
*/
function summer(liste) {
  var tall = 0
  for (var i = 0; i < liste.length; i++) {
    tall += liste[i]
  }
  return tall
}

/*
Funksjon som utroper en vinner i konsollen.
(ikke ferdig) Mangler funksjonalitet for når det er uavgjort.
*/
function vinner(tall1, tall2) {
  if (tall1 > tall2 === true) {
    console.log("Vinneren er Venstre!");
  }
  if (tall1 > tall2 === false) {
    console.log("Vinneren er Høyre!");
  }
}

// NOTE: Kjører prepp-funksjoen når vindusobjektet har lastet inn.
window.onload = function() { prepp("Jensen", "Grieg")}

/* Psudokode til eksempel av utregning av vekst.

var tallEn = data.elementer["Bergen"][i-1].Menn
var tallTo = data.elementer["Bergen"][i].Menn

//vekst i 2017
// a = 2016 b = 2017
function vekst(a,b) {
 return b - a
}

vekst(tallEn, tallTo)

*/
