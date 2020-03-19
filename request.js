var turer = "https://opencom.no/dataset/47f1e434-1a51-4deb-a66d-1387dfcc636e/resource/d5254e27-7fe7-4efa-aeeb-4582337c277f/download/52hverdagsturertekst.json";

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

request(function(y) {hent_koordinater_1(y), hent_koordinater_2(y)})


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
