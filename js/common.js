function getInputField(inputId) {
    const getInputFieldId = document.getElementById(inputId);
    const getInputFieldIdAmountString = getInputFieldId.value;
    const getInputFieldIdAmount = parseFloat(getInputFieldIdAmountString);
    return getInputFieldIdAmount;
}

function getAmount(amountId) {
    const amountTotal = document.getElementById(amountId);
    const amountTotalValueString = amountTotal.innerText;
    const amountTotalValue = parseInt(amountTotalValueString);
    return amountTotalValue;
}
function setValue(oldId, newValue) {
    const setValueId = document.getElementById(oldId);
    setValueId.innerText = newValue;
}