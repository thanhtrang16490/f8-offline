//Bài 1:

var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email",
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại",
    },
};

function getError(field) {
    if (errors[field]) {
        var value = Object.keys(errors[field])[0];
        return errors[field][value];
    } else {
        return "Không có field trong errors";
    }
}

console.log(getError("name"));
console.log(getError("email"));
console.log(getError("password"));

// Bài 2:

var Students = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
};

function createStudents(students) {
    var checkValid = students.every(function (student) {
        if (
            student.name &&
            typeof student.name === "string" &&
            student.age > 0 &&
            typeof student.age === "number" &&
            student.address &&
            typeof student.address === "string"
        ) {
            return true;
        } else {
            return false;
        }
    });
    if (checkValid) {
        var sortStudents = [...students].sort((a, b) => {
            if (a.age < b.age) {
                return -1;
            } else {
                return 1;
            }
        });
        var result = sortStudents.map((student) => {
            var arrayName = student.name.split(" ");
            var shortName = `${arrayName[0]} ${
                arrayName[arrayName.length - 1]
            }`;
            return { ...student, shortName };
        });

        return result;
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}

const students = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createStudents(students);
console.log(result);

// Bài 3
