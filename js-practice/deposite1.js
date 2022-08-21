document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount1 = getInputFieldValueById1('deposit-field');

    const previousDepositTotal1 = getTextElementValueById1('deposit-total');

    const newDepositTotal1 = previousDepositTotal1 + newDepositAmount1;

    setTextElementValueById1('deposit-total', newDepositTotal1);

    const previousBalanceTotal1 = getTextElementValueById1('balance-total')
    const newBalanceTotal1 = previousBalanceTotal1 + newDepositAmount1;
    setTextElementValueById1('balance-total', newBalanceTotal1);
   
})