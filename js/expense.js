document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = getInputField('per-player');
    const orderList = document.getElementById('setPlayers');
    const orderListChild = orderList.childNodes.length;
    const playerExpenses = perPlayer * orderListChild;
    const playerExpensesAmount = getAmount('player-expenses');
    setValue('player-expenses', playerExpenses);
})
document.getElementById('calculate-total').addEventListener('click', function () {
    const manager = getInputField('manager');
    const coach = getInputField('coach');
    const playerExpensesAmount = getAmount('player-expenses');
    const total = getAmount('total');
    const getTotal = manager + coach + playerExpensesAmount;
    setValue('total', getTotal);
})