let button = document.getElementById("myBtn");
let spoiler = document.getElementById("spoiler");
let styles = window.getComputedStyle(spoiler);
button.addEventListener("click", function() {
	if( styles.display == "none"){
		spoiler.style.display = "block";
	}
	else{
		spoiler.style.display = "none";
	}
});
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 27 && styles.display == "block") {
    spoiler.style.display = "none";
  }
});