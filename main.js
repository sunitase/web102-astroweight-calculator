// Write your JavaScript code here!

    

var select = document.getElementById("planets"); 
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

for(var i = 0; i < planets.length; i++) {
  //var select = document.getElementById("planets"); 
    var opt = document.createElement('option');
    opt.innerHTML = planets[i][0];
    opt.value = planets[i][0];
    select.appendChild(opt);
      }

function calculateWeight(userWeight, planetName) {
  for(var i = 0; i < planets.length; i++){
    if(planetName == planets[i][0]) {
    var result = userWeight * planets[i][1]; 
    return result;
    }
  }
}
  function handleClickEvent(e){
    var userWeight = document.getElementById("user-weight").value;
    var planetName = planets[select.selectedIndex][0];
   var result = calculateWeight(userWeight, planetName);
  document.getElementById("output").innerHTML = 'If you were on ' +planetName+', you would weigh '+result+'lbs!';
  } 
 