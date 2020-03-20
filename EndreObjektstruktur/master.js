
/* Utfordingen med dette datasettet er at fornavnet til personene er egenskapsnavnet
til egenskaper til objetet, så hvordan kan vi få skrevet denne ut til nettsiden?*/
var personer={
  Wenna:{surname:"Rabbit", birthday:"1968-06-03"},
  Kate:{surname:"Wilson", birthday:"1969-01-21"},
  Richard:{surname:"Gobble", birthday:"1991-01-09"},
  Chad:{surname:"Parker", birthday:"2003-12-10"},
  Maud:{surname:"MacDonal", birthday:"2017-10-06"},
}

/*En mulighet er å lage en funksjons om tar egenskapsnavnet og legger dette i en ny egenskap i objektet*/
function changeObject(obj) {
for (var person in obj) {
  console.log(obj[person]);
  // NOTE: bruker toString for å bare få egenskapsnavnet (om ikke hadde vi fått hele objektet som ligger i person)
  obj[person].firstname = person.toString()
  console.log(obj[person]);
}
}
// NOTE: åpne konsollen og se at først logges objektet som det er orginalt, så logges det med den nye egenskapen "firstname"


// NOTE: nå kan man skrive dette ut på nettsiden. (fornavn og etternavn)
function printToWebPage(obj) {
 var p = document.getElementById("liste")

 for (var person in obj) {
   var li = document.createElement("LI")
   var t = document.createTextNode(obj[person].firstname + " " + obj[person].surname + " " + obj[person].birthday)
   li.appendChild(t);p.appendChild(li)
 }

}

// NOTE: samler funksjonskallene mine i en "samlefunksjon"
function program() {
  changeObject(personer)
  printToWebPage(personer)
}

// NOTE: kjører samlefunksjonen
window.onload = program
