function AddTask() {
  const InputByUSer = document.getElementById("taskInput");
  const inputValue = InputByUSer.value.trim();

  if (inputValue === "") {
    alert("Please add some task so that we can add in your TODO List");
  }

  const Li = document.createElement("li");
  Li.textContent = inputValue;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");

  deleteButton.addEventListener("click", () => {
    Li.remove();
  });

  document.getElementById("taskList").appendChild(Li);

  Li.appendChild(deleteButton);

  
  InputByUSer.value = "";
}
