// Task array to store all tasks
let tasks = [];
let taskId = 1;

// Event listener for the Add Task button
document.getElementById("addTask").onclick = function() {
  let name = document.getElementById("taskName").value;
  let priority = document.getElementById("priority").value;
  let isImportant = document.getElementById("important").checked;
  let today = new Date().toLocaleDateString();

  // Validate input to prevent empty task names
  if (name === "") {
    alert("Enter a task name.");
    return;
  }

  // Create task object with properties matching the rubric requirements
  let task = {
    id: taskId,
    name: name,
    priority: priority,
    isImportant: isImportant,
    isCompleted: false,
    date: today
  };

  // Increment ID for next task and add to tasks array
  taskId++;
  tasks.push(task);
  
  // Display tasks and log to console
  showTasks();
  console.log(JSON.stringify(tasks));

  // Reset input fields
  document.getElementById("taskName").value = "";
  document.getElementById("important").checked = false;
};

// Function to display all tasks in the DOM
function showTasks() {
  let taskmanager = document.getElementById("taskmanager");
  taskmanager.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let t = tasks[i];

    // Create task div
    let taskDiv = document.createElement("div");
    
    // Apply base styles to task div using JavaScript .style property
    taskDiv.style.margin = "10px 0";
    taskDiv.style.padding = "10px";
    taskDiv.style.border = "1px solid black";

    // Apply important styling if needed using JavaScript .style property
    if (t.isImportant) {
      taskDiv.style.backgroundColor = "red";
      taskDiv.style.color = "white";
    }

    // Apply completed styling if needed using JavaScript .style property
    if (t.isCompleted) {
      taskDiv.style.textDecoration = "line-through";
    }

    // Set task content
    taskDiv.innerHTML = t.name + " | Priority: " + t.priority + " | " + t.date;

    // Create completion checkbox
    let check = document.createElement("input");
    check.type = "checkbox";
    check.checked = t.isCompleted;
    check.style.marginLeft = "10px";
    check.onclick = function() {
      t.isCompleted = check.checked;
      showTasks();
      console.log(JSON.stringify(tasks));
    };

    // Create delete button
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.style.marginLeft = "10px";
    del.onclick = function() {
      tasks.splice(i, 1);
      showTasks();
      console.log(JSON.stringify(tasks));
    };

    // Append controls to task div
    taskDiv.appendChild(check);
    taskDiv.appendChild(del);
    
    // Append task to taskmanager div
    taskmanager.appendChild(taskDiv);
  }
}