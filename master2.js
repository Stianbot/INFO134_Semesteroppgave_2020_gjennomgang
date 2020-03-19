// NOTE: variabler som holder på url-er til json ressurser
var turer = "https://opencom.no/dataset/47f1e434-1a51-4deb-a66d-1387dfcc636e/resource/d5254e27-7fe7-4efa-aeeb-4582337c277f/download/52hverdagsturertekst.json";
var utdanning = "http://wildboy.uib.no/~tpe056/folk/85432.json"


/*Funksjon som henter en ekstern ressurs. Tar tre argumenter: Url: hvor den skal hente ressursen.
obj: et objekt som får tilskrevet en egenskap(data) hvor en parset versjon av responseText-en blir lagret.
func: (optional) en funksjon som blir kjørt når requesten er ferdig (altså; responsen er kommet tilbake.)*/
function last2(url, obj , func) {
  var request = new XMLHttpRequest();
  request.open("GET", url)
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      obj.data = JSON.parse(request.responseText)
      if (func) {
        func()
      }
    };
  }
  request.send()
}

// NOTE: lager et objekt som skal fungere som et grensesnitt for Turer
var datasett_turer = {}

// NOTE: henter data (data lagres i datasett_turer.data), setup() funksjonen blir kjørt når responsen er kommet tilbake.
last2(turer, datasett_turer, function(y) {setup()})

// NOTE: funksjon som kaller på loop()
function setup() {
  // NOTE: problement på "lab" var at jeg hadde glemt å skrive ".data" se linje 9
  loop(datasett_turer.data, "li")
}

/*funksjon som går gjennom et datasett og "skriver ut" info til nettsiden.
  Tar to argumenter: datasett: datasett som skal gjennomgås. html_element:
  hvilket html-element data skal bli representert som, for eksempl: "li","p",
  "div", et cetera*/
function loop(datasett, html_element) {
  var plassering = document.getElementById('ul_oversikt')
  // NOTE: alternativ måte å hente ut "UL"-elementet fra html-siden
  //var plassering2 = document.getElementsByTagName("UL")[0]
  for (var i in datasett.features) {
    // NOTE: lager element av typen som blir oppgitt i parameteret.
    var li_element = document.createElement(html_element)
    // NOTE: lager en tekstnode (teksten jeg vil ha på nettsiden)
    var tekst = document.createTextNode(datasett.features[i].geometry.coordinates[0] + " " + datasett.features[i].geometry.coordinates[1])
    // NOTE: fester tekst-noden til html-elementet
    li_element.appendChild(tekst)
    // NOTE: fester html-elementet (nå med tekst-noden bundet til seg) til "UL"-elementet på html siden.
    plassering.appendChild(li_element)
  }
}


function pluss(a, b) {
  var tall = a + b
  return tall
}


// NOTE: Demonstrerer forskjell på å gi en funksjon med og uten paranteser(at den blir kjørt)
// NOTE: Demonstrerer også en anonym funksjon
var number = pluss(40, 30)
var number2 = pluss
var number3 = function() {return pluss(70, 100)}

// NOTE: eksempel på konstruktør
function Person(fornavn) {
  this.fornavn = fornavn
}

// NOTE: oppretter et objekt av typen Person, ved hjelp av en konstruktør
var p = new Person("Stian")
