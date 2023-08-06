// Bài 1
// Input: Cho trước 2 số a, b
// Output: Thực hiện hoán vị 2 số không dùng biến trung gian
console.log(`bài số: 1`);
var a = 3;
var b = 4;
console.log(`Số ban đầu: a = ${a}  và b = ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`Sau hoán vị: a = ${a}  và b = ${b}`);

//Bài 2
// Viết chương trình tính toán biểu thức sau
// S = 10 + 20 + 5^10 / 2
console.log(`bài số: 2`);
var s = 10 + 20 + 5 ** 10 / 2;
console.log(`Kết quả S=  ${s}`);

//Bài 3
// Học viên tìm hiểu về câu lệnh rẽ nhánh và giải bài tập sau
// Input:
// Cho trước 3 số a, b, c
// Output:
// Tìm số lớn nhất trong 3 số và hiển thị kết quả
console.log(`bài số: 3`);
var maxNumber = function (a, b, c) {
    var max = a;
    if (max <= b) {
        max = b;
    } else if (max <= c) {
        max = c;
    } else;
    return console.log(`Số lớn nhất là ${max}`);
};

maxNumber(23, 200, 70);

//Bài 4:
// Input:
// Cho trước 2 số a, b
// Output:
// Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình
console.log(`bài số: 4`);
var check = function (a, b) {
    if (a * b > 0 && (a != 0 || b != 0)) {
        return console.log(` a va b cùng dấu`);
    } else if (a * b < 0 && (a != 0 || b != 0)) {
        return console.log(` a va b khác dấu`);
    }
    return console.log(`Không xác định`);
};
check(1, 3);
check(1, -2);
check(1, 0);

// Bài 5:
// Input:
// Cho trước 3 số a, b, c
// Output:
// Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần\
console.log(`bài số: 5`);
var order = function (a, b, c) {
    if (a > b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }
    if (b > c) {
        b = b + c;
        c = b - c;
        b = b - c;
    }
    if (a > c) {
        a = a + c;
        c = a - c;
        a = a - c;
    }
    console.log(`sắp xếp: ${a}, ${b}, ${c}`);
};
order(1, 4, 2);
