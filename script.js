function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;
  document.getElementById("task-list").appendChild(li);
  input.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
}
