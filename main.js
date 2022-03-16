
function localStorageSaveCombo() {   
var combo=[];
var name=document.getElementById("clientName").value;
var pizzaType=document.getElementById("pizzaType").value;
var pizaSize=document.getElementById("pizzaSize").value;
   combo.push(name,pizzaType,pizaSize)


 return combo
}