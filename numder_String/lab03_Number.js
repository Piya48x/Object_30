function sum(buy){
    const point = 1;

    const totalPoints = Math.floor(buy/100)* point
    return totalPoints;
}

const buy = 350;
const pointbuy = sum(buy)
console.log(`จำนวนเงินที่คุณซื้อ: ${buy} บาท\nจำนวนแต้มที่ได้: ${Math.round(pointbuy)} แต้ม`)
