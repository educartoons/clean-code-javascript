let toDos = [
  {
    task: "Get some eggs",
    done: false
  },
  {
    task: "Send pull request",
    done: true
  },
  {
    task: "Watch Facebook Developer Conference",
    done: false
  }
];

// filter = 0 prints all todos

function printAllToDos(todos) {
  for (let todo of todos) {
    console.log(todo.task);
  }
}

// filter = 1 prints completed todos

function printCompletedToDos(todos) {
  for (let todo of todos) {
    if (todo.done) {
      console.log(todo.task);
    }
  }
}

// filter = 2 prints pending todos

function printPendingToDos(todos) {
  for (let todo of todos) {
    if (!todo.done) {
      console.log(todo.task);
    }
  }
}
