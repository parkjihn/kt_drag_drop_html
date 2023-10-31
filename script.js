
function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
  
    var draggedColor = window.getComputedStyle(draggedElement).backgroundColor;
    var targetBorderColor = window.getComputedStyle(ev.target).borderColor;
  
    if (draggedColor === targetBorderColor) {
      ev.target.appendChild(draggedElement);
      
      draggedElement.style.top = "0px";
      draggedElement.style.left = "0px";
    } 
}
