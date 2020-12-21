var list = document.getElementById("list");
function addItems(){
    // Adding items
    var val = document.getElementById("input");
    var li = document.createElement("li");
    var text = document.createTextNode(val.value);
    li.appendChild(text);
    val.value = "";
   
    // Create delete Button
    var delBtn = document.createElement("button");
    var text = document.createTextNode("DELETE");
    delBtn.appendChild(text);
    delBtn.setAttribute("id","delBtn");
    delBtn.setAttribute("onclick","deleteItem(this)")
    li.appendChild(delBtn);

    // Create insert Button
    var editBtn = document.createElement("button");
    var text = document.createTextNode("EDIT");
    editBtn.appendChild(text);
    editBtn.setAttribute("id","editBtn");
    editBtn.setAttribute("onclick","editItem(this)");
    li.appendChild(editBtn);

    list.appendChild(li);
}

function deleteItem(item){
    item.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem(item){
    var val = prompt("Enter updated value" , item.parentNode.firstChild.nodeValue);
    item.parentNode.firstChild.nodeValue = val;
    console.log(item.parentNode.firstChild);
}