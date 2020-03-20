/*
  Les først "LESMEG.txt" filen.
*/
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

function Search(limit) {
  this.template = "https://api.digitalarkivet.no/v1/census/1910/search_person?s="
  this.key = null
  this.limit ="&limit=" + limit
  this.calculateurl = function() { if (this.key != null) {this.url = this.template + this.key + this.limit} if (this.key == null) {throw "Du trenger søkenøkkelen"}}
  this.url = null
  this.data = null
}

var search_obj = new Search(500)

function getKey(obj) {
  var value = document.getElementById("inputkey").value
  if (value != undefined || value != null || value != "") {
    if (value == obj.key) {
      alert("Skriv inn et nytt navn")
    }
    if (value != obj.key && value != null && value !="") {
      obj.key = value
      obj.calculateurl()
      hent(obj.url, obj, function(data) {program(data)})
    }

  }
  if (value == undefined || value == null || value === "") {
    throw "Skriv input"
  }
}

function trim_data(obj) {
  var datasett = []
  for (var person in obj.data.results) {
    var temp = obj.data.results[person]
    var p = {
      fornavn: temp.fornavn,
      etternavn: temp.etternavn,
      kjønn: temp.kjonn,
      fødselsår: remove_null(temp["fodselsaar"]),
      fødested: remove_null(temp["fodested"]),
      bosted: temp.bosted,
      stilling: temp.stilling_stand
    }
    datasett.push(p)
  }
  obj.data_ren = datasett
}

function remove_null(obj) {
  if (obj == null) {return "MANGLER"}
  return obj
}

function print(obj) {
  var plassering = document.getElementById("liste")

  while (plassering.firstChild){
      plassering.removeChild(plassering.firstChild)
  }

  for (var i = 0; i < obj.data_ren.length; i++) {
    var elem = document.createElement("LI")
    var span = document.createElement("span")
    var x = document.createTextNode(obj.data_ren[i].etternavn)
    var tekst = document.createTextNode(obj.data_ren[i].fornavn + " ")
    var resten = document.createTextNode(", "+ obj.data_ren[i].fødested +", " + obj.data_ren[i].fødselsår)
    span.appendChild(x);elem.appendChild(tekst);elem.appendChild(span);elem.appendChild(resten);plassering.appendChild(elem)
}
}

function program(obj) {
  trim_data(obj)
  print(obj)
}
