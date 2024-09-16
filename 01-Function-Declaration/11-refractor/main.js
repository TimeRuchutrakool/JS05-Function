// - ให้สร้างฟังก์ชันที่ทำงานได้เหมือนฟังก์ชันด้านล่าง โดยให้เขียน 3 แบบ
// - ใช้ if แต่ห้ามใช้ else
// - ใช้ ? แทน if
// - ใช้ || แทน if

// ```js
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }
// ```

function checkAgePattern1(age) {
  if (age > 18) return true;
  if (age <= 18) return confirm("Did parents allow you?");
}
function checkAgePattern2(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
function checkAgePattern3(age) {
  return age > 18 || confirm("Did parents allow you?");
}
