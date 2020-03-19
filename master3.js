
function Tur(url, distanse, tid){
  this.url = url
  this.distanse = distanse
  this.tid = tid
  this.fart = function() {return fartutregning(this.distanse, this.tid)}
}

function Grensesnitt(url) {
  this.url = url
  this.getNames = function(){return fartutregning(40,20){}}
}

function Grensesnitt(url) {
  this.url = url
  this.getNames = function(){return fartutregning(40,20){}}
}


function fartutregning2(d,t){
  return d/t
}


var gggg = new Grensesnitt("url.no")
var ffff = new Grensesnitt("sjsj")

var befolkning = new Grensesnitt("url til befolkning")
var utdanning = new Grensesnitt("url til utdanning")
var sysselsetting = new Grensesnitt("url til sysselsetting")


befolkning.load()
utdanning.load()
sysselsetting.load()

function getNames() {

}

befolkning.getNames()

var min_tur = new Tur("www.ut.no", 50, 5)
console.log(min_tur);


function fartutregning(d,t){
  return d/t
}

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

function minus(x,y) {
  return x - y
}

minus(100,50)
minus(70,30)
minus(50,10)


var a = minus(100, 70)
var b = minus
var c = function() {
  var resultat = minus(100, 70)
  console.log("Logger resultat", resultat);
  console.log("Ferdig");
  return resultat
  }
