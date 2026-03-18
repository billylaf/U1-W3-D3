const formSubmit = function (e) {
  e.preventDefault()
  const taskInput = document.getElementById("task")
  const task = taskInput.value
  console.log(`dati salvati: ${task}`)
  const card = document.createElement("article")
  card.classList.add("task-card")
  const section = document.getElementById("save-task")
  section.innerHTML += `
        <article class="task-card">
            <p>${task} <input type="checkbox" class="check-box"> <button id="button-save" onclick="deleteTask(event)">🗑️ DELETE </button></p>
        </article>
    `
  form.reset()
}
const deleteTask = function (e) {
  console.log("ORA ELIMINO LA task")
  console.log(e.target)
  const button = e.target
  const article = button.closest(".task-card")
  article.remove()
}
const form = document.getElementById("new-task")
form.addEventListener("submit", formSubmit)
