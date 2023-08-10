// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

const matchPoint = (result) => {
  if (result === "win") return 3;
  else if (result === "even") return 1;
  else return 0;
};

console.log(matchPoint("win"));
