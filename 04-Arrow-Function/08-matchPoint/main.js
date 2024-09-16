// ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

const winPoint = 3;
const drawPoint = 1;
const losePoint = 0;

const calmatchpint = (winPoint, drawPoint) => winPoint * 3 + drawPoint;
