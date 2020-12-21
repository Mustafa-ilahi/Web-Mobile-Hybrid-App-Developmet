function sendMessage(){
    var val = document.getElementById("value");
    var p = document.createElement("p");
    var text = document.createTextNode(val.value);
    p.appendChild(text);
    var messages = document.getElementById("messages");
    messages.appendChild(p);
    val.value = "";  
}