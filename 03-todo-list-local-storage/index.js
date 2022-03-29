const form = document.getElementById("form");
const listParent = document.getElementById("list");
const inputForm = document.getElementById("inputForm");

form.addEventListener("submit", e => {
    e.preventDefault()
    addTask()
})

const addTask = () => {
    if (inputForm.value === "") {
        console.log("este campo no puede estar vacío!")
    }

    localStorage.setItem("todos", JSON.stringify({
        todos: inputForm.value,
        completed: false
    }))

}