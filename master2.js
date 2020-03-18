var turer = "https://opencom.no/dataset/47f1e434-1a51-4deb-a66d-1387dfcc636e/resource/d5254e27-7fe7-4efa-aeeb-4582337c277f/download/52hverdagsturertekst.json";
var utdanning = "http://wildboy.uib.no/~tpe056/folk/85432.json"

function last2(url, obj , func) {
  var request = new XMLHttpRequest();
  request.open("GET", url)
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      obj.data = JSON.parse(request.responseText)
      //console.log(data);
      if (func) {
        func()
      }
    };
  }
  request.send()
}

var datasett_turer = {}

last2(turer, datasett_turer, function(y) {setup()})


function setup() {
  // NOTE: problement på "lab" var at jeg hadde glemt å skrive ".data" se linje 9
  loop(datasett_turer.data, "li")

}

function loop(datasett, html_element) {
  var plassering = document.getElementById('ul_oversikt')
  //var plassering2 = document.getElementsByTagName("UL")[0]
  for (var i in datasett.features) {
    var li_element = document.createElement(html_element)
    var tekst = document.createTextNode(datasett.features[i].geometry.coordinates[0] + " " + datasett.features[i].geometry.coordinates[1] + " Befolkning" + " Befolkningsvekst")
    li_element.appendChild(tekst)
    plassering.appendChild(li_element)

  }
}


function pluss(a, b) {
  var tall = a + b
  return tall
}

var number = pluss(40, 30)
var number2 = pluss
var number3 = function() {return pluss(70, 100)}


function Person(fornavn) {
  this.fornavn = fornavn
}

var p = new Person("Stian")
