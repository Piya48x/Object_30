// Constructor Function
function Calculator() {
    // Properties
    this.input1 = 0;
    this.input2 = 0;

    // Methods
    // read() ใĀรับคา input 2 คา
    this.read = function() {
        this.input1 = +prompt('Enter the first number: ', '');
        this.input2 = +prompt('Enter the second number: ', '');
    };

    // sum() ใĀ return คาผลบวกของเลขทั้งÿอง
    this.sum = function() {
        return this.input1 + this.input2;
    };

    this.mul = function() {
        return this.input1 * this.input2;
    };
}

// สร้าง Object ด้วย Constructor
const calculator = new Calculator();

// เรียกใช้ Method read() เพื่อรับค่า input
calculator.read();

// เรียกใช้ Method sum() และ mul() เพื่อคำนวณ
const sumResult = calculator.sum();
const mulResult = calculator.mul();

// แสดงผลลัพธ์
alert(`Sum: ${sumResult}`);
alert(`Multiplication: ${mulResult}`);
