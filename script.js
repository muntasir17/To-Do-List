let textContainer = document.querySelector(".text-container");
let btnEl = document.getElementById("btn");
let inp = document.querySelector(".inp");
let stars = document.querySelectorAll(".star");
btnEl.addEventListener("click", ()=>{
        if(inp.value.trim() === ""){
alert("Enter a task");
return;
    }
    let textElement = document.createElement("p");
    textElement.innerHTML = inp.value;
    let removeBtn = document.createElement("button");
    removeBtn.className = `rem`;
    removeBtn.innerHTML = `Remove`;
    removeBtn.addEventListener("click", ()=>{
        listOfWork.innerHTML = "";
        listOfWork.style.border = "none";
    })
    let listOfWork = document.createElement("div");
    listOfWork.className = `card-list`;
    listOfWork.appendChild(textElement);
    listOfWork.appendChild(removeBtn);
    textContainer.appendChild(listOfWork);
    inp.value = "";
});
stars.forEach((star, index1)=>{
    star.addEventListener("click", ()=>{
        stars.forEach((star, index2)=>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        })
    })
})



























