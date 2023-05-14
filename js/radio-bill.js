// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var  totalCostElemOne = document.querySelector(".totalTwo");
var  smsTotalElemOne = document.querySelector(".smsTotalTwo");
var  callsTotalElemOne = document.querySelector(".callTotalTwo");
var  myResert = document.querySelector(".refreshBtn");

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

function radioBillTotal(){

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
        var billItemTypeRadio = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
    }
// get the value entered in the billType textfiel
    // update the correct total
    if ( billItemTypeRadio === "call"){
        callsTotal += 2.75;
    }
    else if (billItemTypeRadio  === "sms"){
        smsTotal += 0.75;
    }

    callsTotalElemOne.innerHTML = callsTotal.toFixed(2);
    smsTotalElemOne.innerHTML = smsTotal.toFixed(2);
    var totalValue = callsTotal + smsTotal;
    totalCostElemOne.innerHTML = totalValue.toFixed(2);

    if (totalValue >= 50){
        // adding the danger class will make the text red
        totalCostElemOne.classList.add("danger");
    }
    else if (totalValue >= 30){
        totalCostElemOne.classList.add("warning");
    }

}

radioBillAddBtn.addEventListener('click', radioBillTotal);


function radioBillRemove(){
     callsTotal = 0;
     smsTotal = 0;
     totalValue =0
     smsTotalElemOne.innerHTML = "0.00"; 
    totalCostElemOne.innerHTML = "0.00";
    callsTotalElemOne.innerHTML = "0.00";


    totalCostElemOne.classList.remove("warning");
    totalCostElemOne.classList.remove("danger");

}

myResert.addEventListener('click',radioBillRemove);











//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
