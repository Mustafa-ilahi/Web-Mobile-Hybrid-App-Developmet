var list = document.getElementById("list");

firebase.database().ref('todos').on("child_added",function(data){
    var li = document.createElement("li");
    var text = document.createTextNode(data.val().value);
    li.appendChild(text);
    
   
    // Create delete Button
    var delBtn = document.createElement("button");
    var text = document.createTextNode("DELETE");
    delBtn.appendChild(text);
    delBtn.setAttribute("id",data.val().key);
    delBtn.setAttribute("onclick","deleteItem(this)")
    li.appendChild(delBtn);

    // // Create insert Button
    var editBtn = document.createElement("button");
    var text = document.createTextNode("EDIT");
    editBtn.appendChild(text);
    editBtn.setAttribute("id","editBtn");
    editBtn.setAttribute("onclick","editItem(this)");
    li.appendChild(editBtn);

    list.appendChild(li);
})

function addItems(){
    var todoItems = document.getElementById("input");
    // console.log(todoItems.value);
    var key = firebase.database().ref('todos').push().key;
    // console.log(key);
    var todos = {
        value : todoItems.value,
        key : key
    }
    todoItems.value = "";
    firebase.database().ref('todos').child(key).set(todos);
}

function deleteItem(item){
    // console.log(item.id);
    firebase.database().ref('todos').child(item.id).remove();
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