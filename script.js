const inputs=document.getElementById("inp");
const text=document.querySelector(".text");
// const prev=document

function Add(){
    // if users dosent enters any task and presses add button
    if(inputs.value==""){
        alert("Please Enter Task");
    } else{
        // adding task 
        let newTask=document.createElement("ul");
        newTask.innerHTML=`${inputs.value} <i class="material-icons">delete</i>
        </body>`
        text.append(newTask);
        inputs.value ="";
        newTask.querySelector("i").addEventListener("click", remove);
        function remove(){
            newTask.remove()
        }
    }
}
inputs.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        // event.preventDefault()
        Add();
    }
})