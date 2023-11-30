const oop = {};

while (true) {
    let fruit = prompt('Enter fruit name (type "stop" to finish): ');

    if (fruit.toLowerCase() === 'stop') {
        break;  // หยุดทำงานเมื่อผู้ใช้ป้อน "stop"
    }

    let quantity = parseInt(prompt('Enter quantity: '));

    // เพิ่ม 's' ถ้า quantity มีมากกว่า 1
    const key = quantity > 1 ? `${fruit}s` : fruit;

    oop[key] = quantity;
}

alert('Resulting Object: ' + JSON.stringify(oop));
