//array der indeholder elementerne(tal)
var tal = ["1", "2", "3"];

//array som henter fra html
var html = [];

//loop der kører igennem array'et
for (var i = 0; i < tal.length; i++) {//start for-loop

  //tilføjer valgmuligheder
  html.push("<option>" + tal[i] + "</option>")

}//slut for-loop

//tilføjer valgmuligheder med en id af "tal"
document.getElementById("tal").innerHTML = html.join("");
