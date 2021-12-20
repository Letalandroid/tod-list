const nuevaTarea = () => {

    let tarea = document.getElementById("tarea");

    let t = document.createElement("li");
    t.textContent = tarea.value;

    document.getElementById("tareas").insertAdjacentElement("beforeend", t);

    tarea.value = "";

}

document.getElementById("add").addEventListener("click", nuevaTarea);
document.addEventListener("keydown", (e) => {

    if (e.key == "Enter") {

        nuevaTarea();

    }

});