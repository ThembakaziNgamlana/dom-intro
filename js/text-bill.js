// get a reference to the textbox where the bill type is to be entered
// var textBoxBtn = document.querySelector(".textBox");
// //get a reference to the add button

// //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var addToBillBtn = document.querySelector(".addToBillBtn");
var billTypeText = document.querySelector(".billTypeText");
var  totalCostE = document.querySelector(".totalOne");
var  smsTotalE = document.querySelector(".smsTotalOne");
var  callsTotalE = document.querySelector(".callTotalOne");
var myRefresh = document.querySelector(".refreshAll")
// console.log(billTypeText)
//var totalBillBtn = document.querySelector(".totalBill");

var calls = 0;
var sms = 0;
function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.toLowerCase();

    // update the correct total
    if (billTypeEntered === "call"){
        calls += 2.75;
    }
    else if (billTypeEntered === "sms"){
        sms += 0.75;
    }
    callsTotalE.innerHTML = calls.toFixed(2);
    smsTotalE.innerHTML = sms.toFixed(2);
    var totalCapture = calls + sms;
    totalCostE.innerHTML = totalCapture.toFixed(2);

    if (totalCapture >= 50){
        // adding the danger class will make the text red
        totalCostE.classList.add("danger");
    }
    else if (totalCapture >= 30){
        totalCostE.classList.add("warning");
    }

}
    //update the totals that is displayed on the screen.
  
     addToBillBtn.addEventListener('click', textBillTotal);

   
     function radioRefresh(){
        calls = 0;
        sms = 0;
        totalCapture = 0;
        smsTotalE.innerHTML = "0.00";
       totalCostE.innerHTML = "0.00";
       callsTotalE.innerHTML = "0.00";

       totalCostE.classList.remove("warning");
       totalCostE.classList.remove("danger");



   
   }
   
   myRefresh.addEventListener('click',radioRefresh);
   