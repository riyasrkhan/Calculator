var firstvalue = document.getElementById("first");
var secondvalue = document.getElementById("second");
var finalvalue = document.getElementById("displayvalue");
function addition() {
    var first_value = firstvalue.value;
    var second_value = secondvalue.value;
    var calculateValue = parseInt(first_value) + parseInt(second_value);
    finalvalue.innerHTML = calculateValue.toString();
}
function subtraction() {
    var first_value = firstvalue.value;
    var second_value = secondvalue.value;
    var calculateValue = parseInt(first_value) - parseInt(second_value);
    finalvalue.innerHTML = calculateValue.toString();
}
function multiplication() {
    var first_value = firstvalue.value;
    var second_value = secondvalue.value;
    var calculateValue = parseInt(first_value) * parseInt(second_value);
    finalvalue.innerHTML = calculateValue.toString();
}
