function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        const li = document.createElement("li");

        const checkboxContainer = document.createElement("div");
        checkboxContainer.classList.add("checkbox-container");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        const taskText = document.createElement("span");
        taskText.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            li.remove();
        };

        checkboxContainer.appendChild(checkbox);
        li.appendChild(checkboxContainer);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
