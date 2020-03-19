// NOTE: Eksempel på en konstruktør
function Tur(url, distanse, tid){
  this.url = url
  this.distanse = distanse
  this.tid = tid
  // NOTE: eksempel på metode i en konstruktør
  this.fart = function() {return fartutregning(this.distanse, this.tid)}
}

// NOTE: eksempel på en konstruktør
function Grensesnitt(url) {
  this.url = url
  // NOTE: benytter en anonym funksjon
  this.fart = function(){return fartutregning(40,20){}}
}

// NOTE: enkel funksjon, deler d(distanse) på t(tid) og returnerer resultatet
function fartutregning2(d,t){
  return d/t
}

// NOTE: oppretter objekter av typen "Grensesnitt" ved hjelp av konstruktøren definert over
var gggg = new Grensesnitt("url.no")
var ffff = new Grensesnitt("sjsj")
var befolkning = new Grensesnitt("url til befolkning")
var utdanning = new Grensesnitt("url til utdanning")
var sysselsetting = new Grensesnitt("url til sysselsetting")


// NOTE: oppretter et objekt av typen "Tur" ved hjelp av konstruktør
var min_tur = new Tur("www.ut.no", 50, 5)
console.log(min_tur);



// NOTE: viser at det er bedre å lage en generell funksjon (minus) istedet for å ha mange lignende funksjoner som gjør det samme, bare med små variasjoner.
function minus1() {
  return 100 - 50
}

function minus2() {
  return 70 - 30
}

function minus3() {
  return 50 - 10
}

minus1()
minus2()
minus3()
// NOTE: -----------------------------------------------------------------------

// NOTE: koden under gjør det samme som koden over, bare på mye mindre plass, og fungerer for alle tall.
function minus(x,y) {
  return x - y
}

minus(100,50)
minus(70,30)
minus(50,10)
// NOTE: -----------------------------------------------------------------------


// NOTE: Demonstrerer bruksområdet ved å bruke en anonym funksjon.
// NOTE: a vil bli resultatet av minus(100,70) funksjonen
var a = minus(100, 70)
// NOTE: b vil bli selve minus funksjonen
var b = minus
// NOTE: samme som b, men en har muligheter til å bruke argumenter i et funksjonskall uten at dette blir kjørt
// NOTE: en kan også kalle på så mange funksjoner en ønsker her. Ulikt b, som bare kan være en funksjon.
var c = function() {
  var resultat = minus(100, 70)
  console.log("Logger resultat", resultat);
  console.log("Ferdig");
  return resultat
  }
