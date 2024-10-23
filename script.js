// let scrollRevealOption = {
//     distance:"50px",
//     origin:"left",
//     duration: 1000,
// };

// ScrollReveal().reveal(".card-item img",{
//     ...scrollRevealOption,
// // origin:"rigth",
// });
// //  ScrollReveal().reveal(".card-item .discount",{
// //      ...scrollRevealOption,
// //  delay : 400,
// // });


// let btn = document.querySelectorAll(".buy")
// let counter = document.getElementById("counter");
// let storeItemsContainer = document.querySelector(".store-items")
// let count = 0;
// let totalPrice = 0;
// btn.forEach((key)=>{
//     key.addEventListener("click", ()=>{
// count++;
// counter.innerText = count;
// let imageElement = key.previousElementSibling.previousElementSibling.src;
// let productPrice = key.previousElementSibling.textContent;
// let card = document.createElement("div");
// card.className = `store-item`
// card.innerHTML = `
//     <img src="${imageElement}" alt="">
//   <p>${productPrice}</p>
//   <button class="remove">Remove</button>
// `;
// storeItemsContainer.appendChild(card);
// let pricevalue = parseFloat(productPrice.replace("Price: Taka", ""));
// totalPrice += pricevalue;
// document.getElementById("total-amount").textContent = `Total Price ${totalPrice} Taka`;
//     })
// })
// storeItemsContainer.addEventListener("click", (event)=>{
//     if(event.target.classList.contains("remove")){
// let productPrice = event.target.previousElementSibling.textContent;
// let pricevalue = parseFloat(productPrice.replace("Price: Taka", ""));
// totalPrice -= pricevalue;
// document.getElementById("total-amount").textContent = `Total Price ${totalPrice} Taka`;
//         count--;
//         counter.innerHTML = count;
// event.target.parentElement.remove();
//     }
// });


let textContainer = document.querySelector(".text-container");
let btnEl = document.getElementById("btn");
let inp = document.querySelector(".inp");
let stars = document.querySelectorAll(".star");
btnEl.addEventListener("click", ()=>{
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



























