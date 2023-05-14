function calculateBill() {
  var total = 0;
  var smsTotalCost = 0;
  var callTotalCost = 0;
// doing a function

  function totalBill(bill) {
      let billArr = bill.toLowerCase().split(',');
      for(let i = 0; i < billArr.length; i++){
          if (billArr[i]  === "call") {
              callTotalCost += 2.75;
          }
          if (billArr[i] === "sms") {
            smsTotalCost += 0.75;
          }
      }
  
    total = callTotalCost + smsTotalCost
    

  }
 

  function getTotalCallCost() {
    return callTotalCost;
  }
  function getTotalSmsCost() {
    return smsTotalCost;
  }
  function getTotalCost(){
   return total.toFixed(2);
  }
  function warningLevel() {
    if (getTotalCost() >= 20 && getTotalCost() < 30) {
      return "warning";
    }
  }
  function criticalLevel() {
    if (total >= 30) {
      return "critical";
    }
  }

  return {
    totalBill,
    getTotalCallCost,
    getTotalSmsCost,
    warningLevel,
    criticalLevel,
    getTotalCost,
  };
}














