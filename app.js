var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.firstvalue = document.getElementById("first");
        this.secondvalue = document.getElementById("second");
        this.finalvalue = document.getElementById("displayvalue");
        this.sinValue = document.getElementById("sinvalue");
        this.cosValue = document.getElementById("cosvalue");
        this.tanValue = document.getElementById("tanvalue");
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
        this.Sin(this.calculateValue);
        this.Cos(this.calculateValue);
        this.Tan(this.calculateValue);
        this.finalvalue.innerHTML = this.calculateValue.toString();
    };
    Calculator.prototype.Sin = function (num) {
        this.sinValue.innerText = "The sin value of " + num + " is -> " + Math.sin(num) + "\n";
    };
    Calculator.prototype.Cos = function (num) {
        this.cosValue.innerText = "The cos of " + num + " is -> " + Math.cos(num) + "\n";
    };
    Calculator.prototype.Tan = function (num) {
        this.tanValue.innerText = "The tan value of " + num + " is -> " + Math.tan(num);
    };
    return Calculator;
}());
// start the app
new Calculator();
