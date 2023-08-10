// ให้เรียกใช้ฟังก์ชัน ask โดย

// -   Parameter ตัวแรกเป็น 'Do you agree?'
// -   Parameter ตัวที่สองเป็นฟังก์ชันท่ีเมื่อทำงานแล้วจะ alert คำว่า “I’m agree with you ?”
// -   Parameter ตัวที่สามเป็นฟังก์ชันที่เมื่อทำงานแล้วจะ alert คำว่า “whyyyyyyy !”

function ask(youAgree, amAgree, why) {
  alert(youAgree);
  amAgree();
  why();
}

function amAgree() {
  alert("I'm agree with you ?");
}
function why() {
  alert("whyyyyyyy !");
}

ask("Do you agree?", amAgree, why);
