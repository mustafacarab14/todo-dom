console.log("hello");
document.querySelector("#add").addEventListener("click",function(){
    let todo = document.querySelector("#input").value
    let ndiv =document.createElement("div")
    ndiv.innerText = todo
    ndiv.classList.add("task")
    document.querySelector(".tasks").appendChild(ndiv)
})
