//get a reference to the calculate button
 var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
  var billTotal = document.querySelector(".billTotal");
//get a reference to the billString
 var billString = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed

function totalPhoneBill(){
    var phoneBill = billString.value
    var bill = phoneBill.toLowerCase().split(",");
    var total = 0;
  for(var i=0; i < bill.length; i++){
    if(bill[i] === "call"){
       total += 2.75;
   } else if (bill[i] === "sms"){
     total += 0.75;
    }
    billTotal.classList.remove("danger");
    billTotal.classList.remove("warning");
  }
  billTotal.innerHTML = total.toFixed(2);

  if(total >= 20){
    billTotal.classList.remove("danger");
    billTotal.classList.add("warning"); 
}
if (total >= 30){
    billTotal.classList.remove("warning");
    billTotal.classList.add("danger");

  }
 // done
 /* else{
  billTotal.classList.remove("danger");
    billTotal.classList.add("black"); 
}*/
   }




calculateBtn.addEventListener("click", totalPhoneBill);

//* this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
