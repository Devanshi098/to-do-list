let task= document.querySelector("#input-box");
let addbtn= document.querySelector(".addbtn");
console.log(task);
let add_line = document.querySelector(".tasks");

const add_task=(saved_task)=>
{
    let line= document.createElement("p");
    line.innerText= saved_task;
  
    let delbtn= document.createElement("button");
    delbtn.innerText="➖";
    
    delbtn.addEventListener("click", () => {
        add_line.removeChild(line);
        add_line.removeChild(delbtn);
    });

    // Append the task and delete button to the task list
    add_line.appendChild(line);
    add_line.appendChild(delbtn);

}

addbtn.addEventListener("click",()=>
{
    let saved_task= task.value;
    if (saved_task !== "") {
        add_task(saved_task);
        console.log(saved_task);
        task.value = "";
        task.placeholder = "Enter new task!";
    }
    
})

