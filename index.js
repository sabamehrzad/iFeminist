window.onload = () => {
  document.getElementById('close').onclick = function() {
    this.parentNode.remove()
    return false;
  };
};