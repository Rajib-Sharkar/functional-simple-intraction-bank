

document.getElementById('btn-deposit').addEventListener('click',function(){
// 1.get the element by id
// 2.get the value from the element 
// convert string value to  a number

const newDepositAmount =getInputFieldValueById('deposit-field');
// console.log( newDepositAmount );


// get previous deposit total by id
const previousDepositTotal =getTextElementValueById('deposit-total');

// calculate new deposit total
const newDepositTotal = previousDepositTotal+newDepositAmount;
// set deposit total value
setTextElementValueById('deposit-total',newDepositTotal)

// get previous balance by the using function
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal+ newDepositAmount;
setTextElementValueById('balance-total',newBalanceTotal);

})

