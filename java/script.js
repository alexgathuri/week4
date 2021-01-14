
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





    function display(){
        var type = document.getElementById("type1").value;
        var size = document.getElementById("size1").value;
        var top = document.getElementById("top1").value;
        var crust = document.getElementById("crust1").value;
        var deliver = document.getElementById("deliver1").value;

        
        var size = parseInt (size);
        var top = parseInt (top);
        var crust = parseInt (crust);
        var deliver = parseInt (deliver);
        var total = size+top+crust+deliver;

        alert("You have ordered "+ type );
        alert("The price for "+type +"is Ksh"+ size);
        alert("Crust price is ksh "+ crust);
        alert("Topping price is ksh"+ top);
        alert("Delivery price is ksh"+ deliver);
        alert("The total price will be KSH "+ total);


       
    }

