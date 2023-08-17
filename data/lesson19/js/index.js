//bài 1
var minmax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

minmax.sort(function (a, b) {
    return b - a;
});

console.log("Số lớn nhất là ", minmax[0]);
console.log("Số nhỏ nhất là", minmax[minmax.length - 1]);

//Bài 2

var array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
function checkSoNT(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

var result = array.reduce((sum, currentValue) => {
    if (checkSoNT(currentValue)) {
        return sum + currentValue;
    }
    return sum;
}, 0);

console.log(`Tổng các số nguyên tố là ${result}`);

//Bài 3
var inputArray = [6, 1, 3, 2, 5, 3, 7, 8, 9, 5, 4, 6, 7, 8, 3, 4, 5, 6];
function filter(arr) {
    var newArray = [];
    var duplicated = {};

    for (let num of arr) {
        if (!duplicated[num]) {
            newArray.push(num);
            duplicated[num] = true;
        }
    }

    return newArray;
}

var final = filter(inputArray).sort();

console.log("Mảng mới:", final);

// bài 4
