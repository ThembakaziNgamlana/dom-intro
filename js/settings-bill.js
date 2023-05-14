let callCost = document.querySelector(".callCostSetting");
let smsCost = document.querySelector(".smsCostSetting");
let warningLevelCost = document.querySelector(".warningLevelSetting");
let criticalLevelCost = document.querySelector(".criticalLevelSetting");
let refreshSettings = document.querySelector(".settingsBtn");
// setting up my costs

let billwithsettings = BillWithSettings()
//let callSetting = callCostSettings(callCost.value)





let callCollect = 0;
let smsCollect = 0;
let warningCollect = 0;
let criticalLevelCollect = 0;
let tot = 0

function updateSettingBill() {
  callCollect = callCost.value;
  smsCollect = smsCost.value;
  warningCollect = Number(warningLevelCost.value);
  criticalLevelCollect = Number(criticalLevelCost.value);

  billwithsettings.setCallCost(callCost.value) 
  billwithsettings.setSmsCost(smsCost.value)
  billwithsettings.setCriticalLevel(criticalevel.value)
  billwithsettings.setWarningLevel(warninglevel.value)

  totalSetElem.classList.remove("warning");
  totalSetElem.classList.remove("danger");

  if (tot >= warningCollect && tot < criticalLevelCollect) {
    totalSetElem.classList.add("warning");
  } else if (tot >= criticalLevelCollect) {
    totalSetElem.classList.remove("warning");
    totalSetElem.classList.add("danger");
  }


}

const updateBtn = document.querySelector(".updateSettings");
updateBtn.addEventListener("click", updateSettingBill);




let callTotalSetElem = document.querySelector(".callTotalSettings");
let smsTotalSetElem = document.querySelector(".smsTotalSettings");
let totalSetElem = document.querySelector(".totalSettings");
let addReBtn = document.querySelector("addButton")

function addSettingBill() {
  let settingRadio = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  ).value;
if(tot < criticalLevelCollect){
  if (settingRadio === "call") {
  callTotalSetElem.innerHTML = (
   Number(callTotalSetElem.innerHTML) + Number(callCollect)
   ).toFixed(2);
  } else if (settingRadio === "sms") {
     smsTotalSetElem.innerHTML = (
      Number(smsTotalSetElem.innerHTML) + Number(smsCollect)
     ).toFixed(2);
    
  }
}

 
   tot = (
    Number(callTotalSetElem.innerHTML) + Number(smsTotalSetElem.innerHTML)
  ).toFixed(2);
  totalSetElem.innerHTML = tot;

  totalSetElem.classList.remove("warning");
  totalSetElem.classList.remove("danger");

  if (tot >= warningCollect && tot < criticalLevelCollect) {
    totalSetElem.classList.add("warning");
  } else if (tot >= criticalLevelCollect) {
    totalSetElem.classList.remove("warning");
    totalSetElem.classList.add("danger");
  }
}
//console.log(tot)
let addSettingBtn = document.querySelector(".add-setting-btn");
addSettingBtn.addEventListener("click", addSettingBill);

function settingRefresh(){
  //console.log(refreshSettings)

  callCost.value = "";
  smsCost.value = "";
  warningLevelCost.value= "";
  criticalLevelCost.value= "";
   callTotalSetElem.innerHTML = "0.00";
   smsTotalSetElem.innerHTML = "0.00";
   totalSetElem.innerHTML = "0.00";
   callCollect = "0.00";
   smsCollect = "0.00";
  tot = 0;
 

 totalSetElem.classList.remove("warning");
 totalSetElem.classList.remove("danger");
 

}

refreshSettings.addEventListener('click',settingRefresh);

// let settings = document.getElementById("set")

// settings.addEventListener('submit', (e) => {

//  e.preventDefault()

//   let callCost = document.getElementById("callCost").value
//   let smsCost = document.getElementById("smsCost").value
//   let warningLeveCost = document.getElementById(" warningLeveCost").value
//   let criticalLevelCost= document.getElementById("criticalLevelCost").value

// })