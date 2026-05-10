
function addtodo(){
    const text1 = document.getElementById("abc");
    const todovalue = text1.value.trim();

    if (todovalue === "") return; // Don't add empty tasks

    const list = document.createElement("li");
    list.textContent = todovalue;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        list.remove();
    };

    list.appendChild(deleteBtn);

    const unorder = document.getElementById("data");
    unorder.appendChild(list);

    text1.value = "";
}

