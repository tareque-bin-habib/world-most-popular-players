function getInputField(inputId) {
    const getInputFieldId = document.getElementById(inputId);
    const getInputFieldIdAmountString = getInputFieldId.value;
    const getInputFieldIdAmount = parseFloat(getInputFieldIdAmountString);
    return getInputFieldIdAmount;
}
