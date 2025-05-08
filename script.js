function format(command) {
    document.execCommand(command, false, null);
  }
  
  function changeColor(color) {
    document.execCommand("foreColor", false, color);
  }
  
  function alignText(direction) {
    document.getElementById("editor").style.textAlign = direction;
  }
  
  function undo() {
    document.execCommand("undo", false, null);
  }
  
  function redo() {
    document.execCommand("redo", false, null);
  }