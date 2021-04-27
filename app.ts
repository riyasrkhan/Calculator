
var firstvalue = document.getElementById("first") as HTMLInputElement;
var secondvalue = document.getElementById("second") as HTMLInputElement;


var finalvalue = document.getElementById("displayvalue") as HTMLSpanElement;

    function addition(){
    let first_value : string = firstvalue.value;
    let second_value : string = secondvalue.value;
    let calculateValue = parseInt(first_value) + parseInt(second_value);
    finalvalue.innerHTML = calculateValue.toString();
    }
    function subtraction(){
    let first_value : string = firstvalue.value;
    let second_value : string = secondvalue.value;
    let calculateValue = parseInt(first_value) - parseInt(second_value);
    finalvalue.innerHTML = calculateValue.toString();
    }
    function multiplication(){
    let first_value : string = firstvalue.value;
    let second_value : string = secondvalue.value;
    let calculateValue = parseInt(first_value) * parseInt(second_value);
    finalvalue.innerHTML = calculateValue.toString();
    }