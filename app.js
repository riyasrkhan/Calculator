var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.firstvalue = document.getElementById("first");
        this.secondvalue = document.getElementById("second");
        this.finalvalue = document.getElementById("displayvalue");
        this.additionbtn = document.getElementById("addition");
        this.additionbtn.addEventListener("click", function (e) { return _this.calculation('add'); });
        this.subtractionbtn = document.getElementById("subtraction");
        this.subtractionbtn.addEventListener("click", function (e) { return _this.calculation('sub'); });
        this.multiplicationbtn = document.getElementById("multiplication");
        this.multiplicationbtn.addEventListener("click", function (e) { return _this.calculation('multi'); });
    }
    Calculator.prototype.calculation = function (value) {
        var first_value = this.firstvalue.value;
        var second_value = this.secondvalue.value;
        if (value == 'add') {
            this.calculateValue = parseInt(first_value) + parseInt(second_value);
        }
        else if (value == 'sub') {
            this.calculateValue = parseInt(first_value) - parseInt(second_value);
        }
        else if (value == 'multi') {
            this.calculateValue = parseInt(first_value) * parseInt(second_value);
        }
        console.log(this.calculateValue);
        this.finalvalue.innerHTML = this.calculateValue.toString();
    };
    return Calculator;
}());
// start the app
new Calculator();
