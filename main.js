var groupCombos=[]

function localStorageSaveCombo() {   
var combo=[];
var name=document.getElementById("clientName").value;
var pizzaType=document.getElementById("pizzaType").value;
var pizzaSize=document.getElementById("pizzaSize").value;
var pizzaPrice = Number;
var sizePrice = Number;
var totalPrice = Number
   combo.push(name,pizzaType,pizzaSize);
   groupCombos.push(combo);

switch (combo[1]){

  case "napolitana": pizzaPrice=500;
                    break;
  case  "4Quesos": pizzaPrice=700; 
                    break;
  case "provolone" : pizzaPrice= 600;
                    break;
  case  "aCaballo" : pizzaPrice= 800;               

}

switch (combo[2]) {
  case "chica": sizePrice=0.75;
                break;

  case "mediana": sizePrice=1;
                break;
  
  case "grande": sizePrice=1.25
                break;
}

totalPrice= pizzaPrice*sizePrice;

document.getElementById("tableBody").insertRow(-1).innerHTML = '<td>'+ name + '</td><td>' +  pizzaType + '</td><td>' + pizzaSize +'</td><td>'+ totalPrice;

console.log(combo);
console.log(groupCombos);
console.log(pizzaPrice);
console.log(sizePrice);
console.log(totalPrice);
}