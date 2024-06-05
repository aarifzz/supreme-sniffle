// document.getElementById("addbtn").onclick= function(){
//     const input=document.getElementById("inputt");
//     const inputvalue= input.value.trim();
//     if(inputvalue===''){
//         window.alert("PLease enter a valid task")
//     }
//     else{
//         const task=document.getElementById("task");
//         const li= document.createElement("li");
//         li.innerHTML=`
//         <span>${inputvalue}</span>
//         <button class="completebtn">Completed</button>
//         <button class="deletebtn">Delete</button>`

//         li.className="list";
        
        
//         li.querySelector('.deletebtn').onclick= function() {
//             li.remove();
//         };
//         li.querySelector('.completebtn').onclick=function(){
//             li.completed();
//         }

//         task.appendChild(li);
//         input.value = '';
        

//     }

//     document.getElementsByClassName("completebtn").onclick=function(){

//     }
// }


document.getElementById("addbtn").onclick = function() {
    const input = document.getElementById("inputt");
    const inputvalue = input.value.trim();
    if (inputvalue === '') {
        window.alert("Please enter a valid task");
    } else {
        const task = document.getElementById("task");
        const li = document.createElement("li");
        li.className = "list";

        const span = document.createElement("span");
        span.textContent = inputvalue;

        const completeImg = document.createElement("img");
        completeImg.src = "images/check-box.png"; 
        completeImg.className = "completeimg";
        completeImg.alt = "Completed";
        completeImg.onclick = function() {
            span.classList.toggle("completed");
        };
        

        const deleteImg = document.createElement("img");
        deleteImg.src = "images/delete.png"; 
        deleteImg.className = "deleteimg";
        deleteImg.alt = "Delete";
        deleteImg.onclick = function() {
            li.remove();
        };

        li.appendChild(span);
        li.appendChild(completeImg);
        li.appendChild(deleteImg);
        task.appendChild(li);
        input.value = '';
    }
};

