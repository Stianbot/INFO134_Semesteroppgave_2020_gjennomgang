// NOTE: funksjon som henter en en ekstern ressurs (52 hverdangsturer i Stavanger)
// NOTE: Ett (optional) argument: funksjon som skal kjøres når responsen til requesten er kommet.
function request(func){
  var x = new XMLHttpRequest();
  x.open("GET", "https://opencom.no/dataset/47f1e434-1a51-4deb-a66d-1387dfcc636e/resource/d5254e27-7fe7-4efa-aeeb-4582337c277f/download/52hverdagsturertekst.json")
  x.onreadystatechange = function(){
    if (x.readyState === 4 && x.status === 200) {
      var data = JSON.parse(x.responseText)
      //hent_koordinater_1(data)
      //hent_koordinater_2(data)
      if (func) {
        func(data)
      }
    }
  }
  x.send()
}

// NOTE: kaller på request og oppgir en anonym funksjon som skal bli kjørt når
// responsen er kommet. Denne anonyme funksjonen kaller på to funksjoner, beskrevet under.
request(function(y) {hent_koordinater_1(y) hent_koordinater_2(y)})

/*Funksjon som henter første koordinat til alle turene.
dette er et dårlig kode for jeg har to funksjoner som gjør nesten nøyaktig det samme,
Her ville det vært bedre å ha mulighet for å oppgi i parameteret hvilket koordinat som skal
hentes. Men dette er for å illustrere over (linje 21) at en kan kalle på flere funksjoner
(potensielt uendelig mange) inne i en anonym funksjon. Og at denne kjører etter at responsen
er komme tilbake*/

function hent_koordinater_1(datasett) {
  for (var element in datasett.features) {
    console.log(datasett.features[element].geometry.coordinates[0])
  }
}

function hent_koordinater_2(datasett) {
  for (var element in datasett.features) {
    console.log(datasett.features[element].geometry.coordinates[1])
  }
}
