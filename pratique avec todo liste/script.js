const taskInput = document.getElementById("taskinput");
const addbtn = document.getElementById("addbutton");
 const taskTable = document.getElementById("taskTable");
 const descriptionInput = document.getElementById("description");

let numero = 1;

addbtn.addEventListener("click", ()=>{
    const task = taskInput.value.trim();
    const description = descriptionInput.value.trim();
   
    if (task ==="" || description === ""){
        alert("veuillez saisir une tache");
        return;
    }
    const tr = document.createElement("tr");
    const tdnum = document.createElement("td");
    tdnum.textContent = numero
    const tdtask = document.createElement("td");
    tdtask.textContent = task;
    const tddescription = document.createElement("td");
    tddescription.textContent=description;
    const tdaction = document.createElement("td");
    const btndelete = document.createElement("button");
    btndelete.className="btndelete";
    btndelete.textContent="Supprimer"
    btndelete.addEventListener("click",()=>{
        tr.remove();
    })
    tdaction.appendChild(btndelete);

     tr.appendChild(tdnum);
     tr.appendChild(tdtask);
     tr.appendChild(tddescription);
     tr.appendChild(tdaction);
     taskTable.appendChild(tr);
     numero++;

     taskInput.value = "";
     descriptionInput.value=""

})
