// script.js

// Draggable functionality for riots and causes
const riots = document.querySelectorAll('.draggable');
const causes = document.querySelectorAll('.cause');
const years = document.querySelectorAll('.year');
const matchingBoxes = document.querySelectorAll('.matching-box');

// Allow the dragging functionality for each item
riots.forEach(riot => {
    riot.addEventListener('dragstart', dragStart);
});
causes.forEach(cause => {
    cause.addEventListener('dragstart', dragStart);
});

// Prevent default for drop area
matchingBoxes.forEach(box => {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('drop', drop);
});

years.forEach(year => {
    year.addEventListener('dragover', dragOver);
    year.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    const droppedItem = document.getElementById(e.dataTransfer.getData('text'));
    e.target.appendChild(droppedItem);
}

// Handle the screenshot prompt
document.getElementById('submitBtn').addEventListener('click', () => {
    alert('Take a screenshot of your answers and upload to Padlet!');
});
