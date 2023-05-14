describe("Testing the calculate bill", function(){
it("should return the total call bill ", function(){
 let calculate = calculateBill();
 calculate.totalBill("call,call") 
 assert.equal(5.5, calculate.getTotalCallCost())
 calculate.totalBill("CALL,caLl,call") 
 assert.equal(13.75, calculate.getTotalCallCost())
  })
  it("should return the total sms bill ", function(){
    let calculate = calculateBill();
    calculate.totalBill("sms,sms") 
    
    assert.equal(1.5, calculate.getTotalSmsCost())
    calculate.totalBill("SMs,SMS,sms") 
    assert.equal(3.75, calculate.getTotalSmsCost())
     })

  it("should return 'warning' when the total reached the warning level", function(){
   let calculate = calculateBill();
   calculate.totalBill("call,call,call,call,call,call,call,call,call,call")
   console.log(calculate.getTotalCost())
   assert.equal("warning", calculate.warningLevel())
  })

  it("should return 'critical'  when the total reached the critical level", function(){
    let calculate = calculateBill();
    calculate.totalBill("sms,call,sms,call,call,sms,sms,call,sms,call,call,sms,sms,call,sms,call,call,sms,sms,call,sms,call,call,sms,")
    assert.equal("critical", calculate.criticalLevel())
})



})