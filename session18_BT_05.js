let staff ={
    id: 1,
    name: "Ronando",
    age:30,
    salary:1000,
}

// console.log(staff);
// let newID = +prompt("Nhập id:")

// let newSalary=+prompt("Nhập lương");

let company =[];
company.push(staff);
// company.push(newStaff);
console.log(company);
//sửa
// let findIndex = company.findIndex((e)=> newID==e.id);
// company[findIndex].salary = newSalary;
// console.log(company);
//xoá
// let inputDel = Number(prompt("Nhập vào id mà bạn muốn xoá"));
// let findIndex=company.findIndex((e)=> inputDel = e.id);
// company.splice(findIndex,1);
// console.log(company);
//sửa
let state = true;
while (state) {
  let input = prompt(
    "Nhập vàoC/R/U/D/E để tiếp tục chương trình"
  ).toLocaleLowerCase();

  if(input == "c") {
    // Thêm mới nhân viên vào trong mảng trên
    let newName = prompt("Nhập tên nhân viên muốn thêm");
    let newAge = Number(prompt("Nhập tuổi nhân viên muốn thêm"));
    let newSalary = Number(prompt("Nhập mức lương của nhân viên muốn thêm"));

    let newStaff = {
      id: Math.floor(Math.random()* 1000),
      name: newName,
      age: newAge,
      salary: newSalary,
     };
    company.push(newStaff);
    console.log(company);
  } else if (input == "u") {
    let inputUpdate = Number(prompt("Nhập vào id nhân viên muốn cập nhật"));
    let updateSalary = Number(prompt("Nhập mức lương muốn thay đổi"));

    let findIndex = company.findIndex((e) => inputUpdate == e.id);
    company[findIndex].salary = updateSalary;
    console.log(company);
  } else if (input == "d") {
    let inputDelete = Number(prompt("Nhập vào id nhân viên muốn xóa"));
    let findIndex = company.findIndex((e) => inputDelete == e.id);
    company.splice(findIndex, 1);
    console.log(company);
  } else if (input = "e") {
    alert("Cảm ơn bạnđã sử dụng chương trình");
    state = false;
  }
}