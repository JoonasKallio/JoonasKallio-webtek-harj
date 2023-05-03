/* tietojen ja viestin syöttö */
function addMessage() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var highlight = document.getElementById("highlight").checked;
    var timestamp = new Date();
    
/* uusi div ja higlight */
    var div = document.createElement("div");
    div.classList.add("message");
    if (highlight) {
      div.classList.add("highlight");
    }
    
    /* viestien sisältö */
    var p1 = document.createElement("p");
    p1.innerHTML = "<strong>" + name + "</strong>";
    var p2 = document.createElement("p");
    p2.innerHTML = message;
    var p3 = document.createElement("p");
    p3.innerHTML = timestamp.toLocaleString();
    
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    
    document.getElementById("messages").appendChild(div);
  }