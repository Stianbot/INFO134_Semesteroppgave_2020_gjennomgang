/*
Det er ikke tillat å kopiere denne koden for eget bruk.
Koden er bare ment som eksempler på ulike funksjoner som er relevant for semesteroppgaven.
Det er ikke garantert at dette er den beste / mest effektive måten å løse oppgavene på.
Dette er ikke en fasit på semesteroppgaven. Det skal bare brukes til veiledning og gi inspirasjon til hvordan oppgavene kan løses.
*/

function urler() {
  return ["https://opencom.no/dataset/47f1e434-1a51-4deb-a66d-1387dfcc636e/resource/d5254e27-7fe7-4efa-aeeb-4582337c277f/download/52hverdagsturertekst.json","http://wildboy.uib.no/~tpe056/folk/85432.json", "http://wildboy.uib.no/~tpe056/folk/100145.json" ]}

var turer = "https://opencom.no/dataset/47f1e434-1a51-4deb-a66d-1387dfcc636e/resource/d5254e27-7fe7-4efa-aeeb-4582337c277f/download/52hverdagsturertekst.json";
var utdanning = "http://wildboy.uib.no/~tpe056/folk/85432.json"

function load(url, func){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
          // NOTE: lager en global variabel: data, som inneholder datasettet. parser responsen
            //data = JSON.parse(xhr.responseText);
            //console.log(data);
            // NOTE: hvis det finnes en funksjon som blir oppgitt i parameteret; kall på denne funksjonen.
    };
}
    xhr.send()
}


function last(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url)
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText)
      console.log(data.features[0].geometry.coordinates[0], data.features[0].geometry.coordinates[1] );
      if (callback) {
        callback(data)
      }

    };
  }
  request.send()
}

//last(utdanning, function(x) {last(turer, function() {console.log("Ferdig lastet inn");})})
//last(turer, utdanning_last)

last(turer, function (y) {program(y)})

function print_coordinates(arg) {
  var plassering = document.getElementById("ul_oversikt")
  console.log(plassering);
  for (var variable in arg.features) {
    var li = document.createElement("H1")
    var text = document.createTextNode(arg.features[variable].geometry.coordinates[0] + " " + arg.features[variable].geometry.coordinates[1])
    li.appendChild(text)
    plassering.appendChild(li)
  }
jkj
}

function program(argument) {
  print_coordinates(argument)
  print_asdasd(argument)
  calculate_population(argument)
}


















function utdanning_last() {
  last(ut)
}





function print_data(argument) {
  console.log("Her printes data",argument);
}

//print_data(data)













function pluss(a, b) {
  return a + b
}

var tall = pluss
var tall2 = pluss(40, 60)
var tall3 = function() {return pluss(70,40)}






// NOTE: funksjon som henter ned turer og printer ut "ferdig lastet inn" når data er ferdig lastet inn.
// NOTE: Bruker en callback funksjon til å få dette til.
// NOTE: callback funksjonen lager også ett objekt av typen interface og logger dette til konsollen.
/*load(turer,function(){
  //console.log("Ferdig lastet inn");
  // NOTE: lagrer grensesnitt som global variabel
  grensesnitt = new Interface(data)
})*/

// NOTE: konstruktør for et brukergrensesnitt, tar inn ett argument (datasett)
// NOTE: metoden getCoordinates kaller på funksjonen "coordinates"
function Interface(data){
  this.datasett = data
  this.getCoordinates = function () {return coordinates(this.datasett)}
}

// NOTE: funksjon som returnerer en liste med alle kordinatene til turene.
function coordinates(response) {
  var liste = []
  for (var x in response.features) {
    liste.push([response.features[x].geometry.coordinates[0],
       response.features[x].geometry.coordinates[1]]);
  }

  return liste
}


// NOTE: eksempel på konstruktør
function Person(x, y) {
  this.fornavn = x
  this.etternavn = y
}

//oppretter et objekt ved hjelp av konstruktør
var person1 = new Person("Ola", "Nordmann")

//console.log(person1);


// NOTE: funksjon som henter ut data fra et input-felt på html-siden.
function hent_input() {
  var input = document.getElementById("input_felt").value
  if (input == "") {
    // NOTE: brukeren for beskjed om han har glemt å skrive inn tekst i input feltet
    alert("Skriv inn tekst")
    // NOTE: med throw kan en skrive egne feilmeldinger
    throw "Skriv inn tekst"
  }

  // NOTE: hvis input ikke er en tom streng logges og returneres det.
  if (input != "") {
    console.log(input);
    return input
  }
}

// NOTE: fiks eksempel
function give_class(id) {
  var intro = document.getElementById(id)

  if (intro.className == "farge") {
    //console.log("elementet er farget");
    intro.classList.add("ikke_farge")
  }

  if (intro.className != "farge") {
    intro.className = "farge"
  }
}

//give_class("Introduksjon")
//give_class("Detaljer")
