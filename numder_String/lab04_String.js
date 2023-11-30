function trojtext(text) {
    console.log(text);
    const lowercaseText = text.toLowerCase(); // แปลงเป็น lowercase เพื่อตรวจสอบ case-insensitive

    if (lowercaseText.includes('xxx') || lowercaseText.includes('sex') || lowercaseText.includes('porn')) {
        return true;
    } else {
        return false;
    }
}

// ตัวอย่างการใช้งาน
const result = trojtext('This is a XXx sample text.'); // ผลลัพธ์: true
console.log(result);
