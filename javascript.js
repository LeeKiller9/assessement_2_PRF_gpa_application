//khai báo biến toàn cục
let totalRow = 0;
let array = [""];
let table = document.getElementById("sheet");
let row = table.getElementsByTagName("tr");
let sum = 0;

//khai báo đối tượng
let testScore = {
    name: "",
    math: 0,
    physic: 0,
    chemistry: 0,
    avg: "",
}

//hàm nhập dữ liệu
function importData() {
    testScore.name = document.getElementById("name").value;
    testScore.math = Number(document.getElementById("markMath").value);
    testScore.physic = Number(document.getElementById("markPhysic").value);
    testScore.chemistry = Number(document.getElementById("markChemistry").value);
    if (isDataOk(testScore.name, testScore.math, testScore.physic, testScore.chemistry)) {
        clearSheet();
        updateData(testScore.name, testScore.math, testScore.physic, testScore.chemistry);
        updateSheet();
    } else {
        alert("Nhập lại giá trị phù hợp");
    }
    clearInput();
}

//hàm kiểm tra dữ liệu đã nhập trong ô input trước khi lưu trữ
function isDataOk(name, math, physic, chemistry) {
    return name !== "" && math >= 0 && math <= 10 && physic >= 0 && physic <= 10 && chemistry >= 0 && chemistry <= 10;
}

//hàm lưu trữ dữ liệu mới
function updateData(name, math, physic, chemistry) {
    totalRow++;
    array.push({
        name: name,
        math: math,
        physic: physic,
        chemistry: chemistry,
        avg: "?",
    });
}

//hàm cập nhật bảng điểm mới
function updateSheet() {
    for (let i = 1; i <= totalRow; i++) {
        let row = table.insertRow(i);
        let cellStt = row.insertCell(0);
        let cellName = row.insertCell(1);
        let cellMath = row.insertCell(2);
        let cellPhysic = row.insertCell(3);
        let cellChemistry = row.insertCell(4);
        let cellAvg = row.insertCell(5);
        cellStt.innerHTML = i;
        cellName.innerHTML = array[i].name;
        cellMath.innerHTML = array[i].math;
        cellPhysic.innerHTML = array[i].physic;
        cellChemistry.innerHTML = array[i].chemistry;
        cellAvg.innerHTML = array[i].avg;
    }
}

//hàm xóa toàn bộ bảng điểm cũ
function clearSheet() {
    for (let i = 1; i <= totalRow; i++) {
        table.deleteRow(1);
    }
}

//hàm xóa dữ liệu trong ô input
function clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("markMath").value = "";
    document.getElementById("markPhysic").value = "";
    document.getElementById("markChemistry").value = "";
}

//hàm tính điểm trung bình, với điểm trung bình có 2 số thập phân
function calAvg() {
    for (let i = 1; i <= totalRow; i++) {
        array[i].avg = ((array[i].math + array[i].physic + array[i].chemistry) / 3).toFixed(2);
    }
    clearSheet();
    updateSheet();
}

//hàm xác định học sinh giỏi với điểm trung bình >= 8
function defineGoodStudent() {
    for (let i = 1; i <= totalRow; i++) {
        if (array[i].avg >= 8) {
            row[i].style.color = "red";
        }
    }
}