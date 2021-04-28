class Calculator {
    firstvalue:any;
    secondvalue:any;
    finalvalue:any;
    additionbtn:any;
    subtractionbtn:any;
    multiplicationbtn:any;
    calculateValue:any;
    sinValue:any;
    cosValue:any;
    tanValue:any;
    constructor() {
        this.firstvalue = document.getElementById("first") as HTMLInputElement;
        this.secondvalue = document.getElementById("second") as HTMLInputElement;
        this.finalvalue = document.getElementById("displayvalue") as HTMLSpanElement;
        this.sinValue = document.getElementById("sinvalue") as HTMLSpanElement;
        this.cosValue = document.getElementById("cosvalue") as HTMLSpanElement;
        this.tanValue = document.getElementById("tanvalue") as HTMLSpanElement;
        this.additionbtn = document.getElementById("addition");
        this.additionbtn.addEventListener("click", (e:Event) => this.calculation('add'));
        this.subtractionbtn = document.getElementById("subtraction");
        this.subtractionbtn.addEventListener("click", (e:Event) => this.calculation('sub'));
        this.multiplicationbtn = document.getElementById("multiplication");
        this.multiplicationbtn.addEventListener("click", (e:Event) => this.calculation('multi'));
        
      }

    calculation(value:any){
        let first_value : string = this.firstvalue.value;
        let second_value : string = this.secondvalue.value;
        if(value == 'add'){
            this.calculateValue = parseInt(first_value) + parseInt(second_value);
        }else if(value == 'sub'){
            this.calculateValue = parseInt(first_value) - parseInt(second_value);
        }else if(value == 'multi'){
            this.calculateValue = parseInt(first_value) * parseInt(second_value);
        }
        this.Sin(this.calculateValue);
        this.Cos(this.calculateValue);
        this.Tan(this.calculateValue);
        this.finalvalue.innerHTML = this.calculateValue.toString();
    }
    Sin(num: number) {  
        this.sinValue.innerText = "The sin value of " + num + " is -> " + Math.sin(num) + "\n"; 
    }  
    Cos(num: number) {  
        this.cosValue.innerText = "The cos of " + num + " is -> " + Math.cos(num) + "\n";  
    }  
    Tan(num: number) {  
        this.tanValue.innerText = "The tan value of " + num + " is -> " + Math.tan(num);  
    } 


}
// start the app
new Calculator();    