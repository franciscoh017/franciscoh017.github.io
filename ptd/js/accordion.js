var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle("is-accordion");
    if(this.children[0].getAttribute("data-icon")=="chevron-down")
    {
        this.children[0].setAttribute("data-icon", "chevron-right");
    }
    else{
        this.children[0].setAttribute("data-icon", "chevron-down");
    }
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}