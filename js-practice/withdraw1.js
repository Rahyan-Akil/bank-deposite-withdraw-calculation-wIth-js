document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount1 = getInputFieldValueById1('withdraw-field');
    
    const previousWithdrawTotal1 = getTextElementValueById1('withdraw-total');

    const newWithdrawTotal1 = newWithdrawAmount1 + previousWithdrawTotal1;

    setTextElementValueById1('withdraw-total',newWithdrawTotal1);

    const previousBalanceTotal1 = getTextElementValueById1('balance-total');
    
    const newBalanceTotal1 = previousBalanceTotal1 - newWithdrawAmount1;
    
    setTextElementValueById1('balance-total', newBalanceTotal1);


})