function allowDrop(event) {
  event.preventDefault();
  const dropBox = event.target;
  dropBox.classList.add("hover");
}

function drop(event) {
  event.preventDefault();
  const dropBox = event.target;
  const draggedElement = document.querySelector(".dragging");

  dropBox.classList.remove("hover");

  if (draggedElement) {
    dropBox.textContent = draggedElement.textContent;
    draggedElement.style.display = "none";
  }
}

function drag(event) {
  event.target.classList.add("dragging");
}

document.addEventListener("dragend", (event) => {
  const draggedElement = event.target;
  draggedElement.classList.remove("dragging");
  draggedElement.style.display = "block";
});
