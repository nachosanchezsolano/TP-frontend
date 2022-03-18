var groupCombos=[];

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

  case "Napolitana": pizzaPrice=500;
                    break;
  case  "4 Quesos": pizzaPrice=700; 
                    break;
  case "Provolone" : pizzaPrice= 600;
                    break;
  case  "A Caballo" : pizzaPrice= 800;               

}

switch (combo[2]) {
  case "Chica": sizePrice=0.75;
                break;

  case "Mediana": sizePrice=1;
                break;
  
  case "Grande": sizePrice=1.25
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


function changeImage(event){
  
  var pizzaType=document.getElementById("pizzaType").value;

   switch(pizzaType){
  
    case "Napolitana": event.style.backgroundImage = 'url("img/napolitana.png")';
              
    break;

case  "4 Quesos": event.style.backgroundImage = 'url("img/4 Quesos.png")'
    break;

case "Provolone" : event.style.backgroundImage = 'url("img/Provolone.png")'
    break;

case  "A Caballo" : event.style.backgroundImage = 'url("img/aCaballo.png")'
   }
}