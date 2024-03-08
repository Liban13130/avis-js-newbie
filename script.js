let submit = document.querySelector(".submit");
let buttons = document.querySelectorAll(".button")
let thankYouCard = document.querySelector('.container-2')
let ratingCard = document.querySelector('.container')
let choice = document.getElementById("choice")

let rating;

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        rating = button.textContent
    })
})

submit.addEventListener("click", () =>{
    if(rating >= 0){
        thankYouCard.style.display = "flex"
        ratingCard.style.display = "none"
        choice.textContent = `You selected ${rating} out of 5`
    }else{
        return alert("Please make a choice.")
    }
    
})