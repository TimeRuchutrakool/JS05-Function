// * log -> Hello Everybody เพราะ message ถูกเขียนค่าทับใน function
// ** log -> Welcome to Thailand เพราะถึงแม้ว่าจะดูเหมือนว่า message ถูกเขียนทับไปก่อนแล้วแต่นั่นเป็นแค่ message ที่เป็น local variable ของ function เลยไม่โดน message ของ global
// *** log -> John เพราะมันเอา name จาก global scope มา log
// **** log -> เพราะ function ไม่รับอะไรเข้ามาใน function ตอน เรียกใช้เลย input จึงเป็น undefined แล้วเขียนทับ name ที่อยู่ใน global ด้วย input ที่เป็น undefined จึงได้ name เป็น undefined
