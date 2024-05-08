const todoList = [
  { id: 1, todo: "Have breakfast", completed: false },
  { id: 2, todo: "Have eat", completed: true },
  { id: 3, todo: "Have breakfast", completed: false },
];
// console.log(`Ban đầu`);
// console.log(todoList);
// function addTodo(todo) {
//   let newId = 0;
//   for (let i = 0; i < todoList.length; i++) {
//     newId = todoList.length - 1;
//   }
//   let newTodo = {
//     id: newId,
//     todo: todo,
//     completed: false,
//   };
//   todoList.push(newTodo);
// }

// addTodo("Đi tắm");
// addTodo("Đi chơi");
// addTodo("Đi bay");
// console.log(`add jobs`);
// console.log(todoList);
// function updateComplete(id) {
//   let findIndex = todoList.findIndex((e) => {
//     return id === e.id;
//   });
//   todoList[findIndex].completed = true;
// }

// updateComplete(3);
// console.log(`update đã làm việc hay chưa`);
// console.log(todoList);
function removeTodo(id) {
  let check = -1;
  for (let i = 0; i < todoList.length; i++) {
    if (id == todoList[i].id) {
      check = i;
    }
  }
  todoList.splice(check, 1);
}
removeTodo(2);
console.log(`xoá`);
console.log(todoList);
