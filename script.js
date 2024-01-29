const Inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtask()
{
    if(Inputbox.value === '')
    {
        alert("you must write something!");
    }else{
        let li=document.createElement("li");
        li.innerHTML=Inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    Inputbox.value="";
    savedata();
}
listcontainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
        }
},false);
function savedata()
{
    localStorage.setItem("data",listcontainer.innerHTML)
}
function displaylist()
{
    listcontainer.innerHTML =localStorage.getItem("data");
}
displaylist();