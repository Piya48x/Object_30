let decimalNumber = 255;

// แปลงเลขฐาน 10 เป็นฐาน 2
let binaryNumber = decimalNumber.toString(2); // 11111111

// แปลงเลขฐาน 10 เป็นฐาน 8
let octalNumber = decimalNumber.toString(8); // 377

// แปลงเลขฐาน 10 เป็นฐาน 16
let hexadecimalNumber = decimalNumber.toString(16); // FF
console.log(binaryNumber,octalNumber,hexadecimalNumber)