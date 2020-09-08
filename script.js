var wrapperEle =document.body.querySelector(".wrapper");
var yearMilesEle =document.body.querySelector(".yearMiles");
var gasCostEle =document.body.querySelector(".gasCost");
var buttonEle =document.body.querySelector(".buttonMpg");
var twelveEle =document.body.querySelector(".twelveMpg");
var seventeenEle =document.body.querySelector(".seventeenMpg");
var twentySixEle =document.body.querySelector(".twentySixMpg");
var twentyNineEle =document.body.querySelector(".twentyNineMpg");

function rewriteFunction(){
  var inputMiles = Number(prompt("How many miles have you driven this year?"));
  var inputCost = Number(prompt("What is the cost for a gallon of gas in your area?"));
  
  writerFunction(inputMiles,inputCost);
}

function writerFunction(miles,cost){
  yearMilesEle.innerHTML="Estimated number of miles driven per year: "+miles;
  gasCostEle.innerHTML="Cost of gas-per-gallon in current location: $"+cost;
}

buttonEle.addEventListener("click", function(){
  rewriteFunction();
})

function reMathFunction(inputMiles,inputCost){
  var yearlyTwelve = Number(inputMiles*inputCost/12)
  var yearlySeventeen = Number(inputMiles*inputCost/17)
  var yearlyTwentySix = Number(inputMiles*inputCost/26)
  var yearlyTwentyNine = Number(inputMiles*inputCost/29)
}

function mathWriterFunction(){
  twelveEle.innerHTML="To drive a car with an MPG Rating of 12 for"+inputMiles "at"+inputCost "per Gallon, it would cost"+yearlyTwelve
  seventeenEle.innerHTML="To drive a car with an MPG Rating of 17 for"+inputMiles "at"+inputCost "per Gallon, it would cost"+yearlySeventeen
  twentySixEle.innerHTML="To drive a car with an MPG Rating of 26 for"+inputMiles "at"+inputCost "per Gallon, it would cost"+yearlyTwentySix
  twentyNineEle.innerHTML="To drive a car with an MPG Rating of 29 for"+inputMiles "at"+inputCost "per Gallon, it would cost"+yearlyTwentyNine
}