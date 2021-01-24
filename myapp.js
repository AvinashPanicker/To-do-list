var addButton=document.getElementById('enter');
var userInput=document.getElementById('userInput');
var List=document.querySelector('ul');

function addTask(){
    var newTask=document.createElement("li");
    newTask.appendChild(document.createTextNode(userInput.value));
    List.appendChild(newTask);
    userInput.value='';

    var deleteButton=document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener('click',removeTask);
    function removeTask(){
        List.removeChild(newTask);
    }
}

function addByClick(){
    if(userInput.value.length>0){
        addTask();
    }
}
function addByKey(event){
    if(userInput.value.length>0 && event.which===13){
        addTask();
    }
}

addButton.addEventListener('click',addByClick);
userInput.addEventListener('keypress',addByKey);
