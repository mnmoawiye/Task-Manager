let tasks = [];
let taskId = 1;
// Creates the button for "Add task"
document.getElementById("addTask").onclick = function() {
  // Gets the variable for name priority and isImportant. Also gets the date in the variable today
  let name = document.getElementById("taskName").value;
  let priority = document.getElementById("priority").value;
  let isImportant = document.getElementById("important").checked;
  let today = new Date().toLocaleDateString();

  // Makes an alert if user leaves name blank.
  if (name === "") {
    alert("Enter a task name.");
    return;
  }

  
  let task = {
    id: taskId,
    name: name,
    priority: priority,
    isImportant: isImportant,
    isCompleted: false,
    date: today
  };

  
  taskId++;
  tasks.push(task);
  
  
  showTasks();
  console.log(JSON.stringify(tasks));

  // Reset input fields
  document.getElementById("taskName").value = "";
  document.getElementById("important").checked = false;
};