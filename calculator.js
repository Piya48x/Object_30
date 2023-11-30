const calculator = {
    read() {
        this.input1 = +prompt('ใส่ค่าที่ 1 : ', '');
        this.input2 = +prompt('ใส่ค่าที่ 2 : ', ''); // แก้ไขตรงนี้
    },
    sum() {
        return this.input1 + this.input2;
    },
    mul() {
        return this.input1 * this.input2;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
