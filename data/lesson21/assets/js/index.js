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

var students = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var result = createStudents(students);
console.log(result);

// Bài 3

var User = function (name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
};

const data = [];

function handleRegister(name, password, email) {
    if (!name || !password || !email) {
        console.log("Please enter enough information");
        return;
    }
    var newUser = new User(name, password, email);
    newUser.role = "user";
    if (data.length === 0) {
        data.push(newUser);
    } else {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email === email) {
                console.log("Email exists!");
                return;
            } else if (data[i].name === name) {
                console.log("User name exists!");
                return;
            }
        }
        data.push(newUser);
    }
    return data;
}

function handleLogin(email, password) {
    var checkInfo = data.find((info) => {
        return info.email === email && info.password === password;
    });
    if (checkInfo) {
        return checkInfo;
    } else {
        console.log("Invalid field");
        return;
    }
}

var dataRegister = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
var dataRegister = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);
var dataLogin = handleLogin("Nguyen Van B", "1234567");

console.log(dataRegister);
console.log(dataLogin);
