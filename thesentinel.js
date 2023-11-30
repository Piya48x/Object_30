const myObjet = {};

while (true) {
  let key = prompt("key : ");
  if (key === "stop")
    break;
   let value = prompt('ใส่ค่า : ')
   myObjet[key] = value;

}
alert(JSON.stringify(myObjet))
