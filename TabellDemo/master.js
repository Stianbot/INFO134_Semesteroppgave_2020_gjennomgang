// NOTE: funksjon som henter inn data fra en server.
function load(){
    //lager requesten
    var xhr = new XMLHttpRequest();
    //åpner requsesten, sier "GET" (hent) og spesifiserer fra hvor vi ønsker å hente data(url).
    xhr.open("GET", "http://wildboy.uib.no/~tpe056/folk/104857.json");
    //sier at når readyState endres, kjør funksjonen under.
    xhr.onreadystatechange = function(){
        //sjekker at readyState === 4 (Done) og status === 200 (OK)
        //hvis disse to stemmer så er vi "garantert" å ha hentet inn dataen vi spurte om.
        if (xhr.readyState === 4 && xhr.status === 200) {
            //parser responsen (gjør den fra plain-text til javascript objekter)
            var response = JSON.parse(xhr.responseText);
            //kjører funksjon "visdata" (se lengre nede hva denne gjør)
            var resultat = visdata(response, "Hol", "2017")
            console.log(resultat);
            //kjører funksjon "skrivUtKommuner"
            skrivUtKommuner(response.elementer)
        }
    };
    //sender requesten
    xhr.send()
}


/*funksjon som henter befolkning fra en kommune, plusser sammen data fra menn og kvinner
etter år(tall) angitt som argument.
*/
function visdata(data, kommune, tall) {
  return data.elementer[kommune].Menn[tall] + data.elementer[kommune].Kvinner[tall]
}


//sier at load() funksjonen skal kjøres når "window" objektet er lastet inn.
window.onload = load


//funksjon som henter ut tekstverdien fra et input-felt på html-siden.
  function hentInput() {
    var inputFelt = document.getElementById("kommuneNavn").value
    if (inputFelt != "" ) {
      return inputFelt
    }

    if (inputFelt == "") {
      alert("Skriv inn noe i input feltet")
      //throw "Skriv inn noe i input feltet"
    }
  }


//funksjon som "skriver ut" alle kommuner til html-siden.
function skrivUtKommuner(array) {
  var ul = document.getElementById("liste")

  for (var i in array) {
    //oppretter et <li></li>-element
    var li = document.createElement("li");
    //oppretter en tekst-node
    var tekst = document.createTextNode(i)

    //fester tekst-noden til <li></li>-elementet
    li.appendChild(tekst)
    //fester <li></li>-elementet til <ul></ul>-elementet som blir hentet fra html-siden på linje 54
    ul.appendChild(li)
  }
}
