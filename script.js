const nextBtn = document.querySelector(".next")
const welcomeContainer = document.querySelector(".welcome__container")
const loginContainer = document.querySelector(".login__container")
const backBtn = document.querySelector(".back__btn")
const registerBtn = document.querySelector(".register__btn")
const registerNowBtn = document.querySelector(".register__now__btn")
const registerContainer = document.querySelector(".register__container")
const registerBackBtn = document.querySelector(".register__back__btn")
const loginNowBtn = document.querySelector(".login__now__btn")
const loginBtn = document.querySelector(".login__btn")
const input = document.querySelector("input")

const home = document.querySelector(".home")



   



nextBtn.addEventListener("click", (e) => {
    e.preventDefault()
   
    welcomeContainer.classList.add("trx2");
    loginContainer.classList.add("trx")
})

backBtn.addEventListener("click", (e) => {
e.preventDefault()
loginContainer.classList.remove("trx")
welcomeContainer.classList.remove("trx2");
})

registerNowBtn.addEventListener("click", (e) => {
 
    registerContainer.classList.remove("trx2");
    registerContainer.classList.remove("trx");
    loginContainer.classList.add("trx2")
    registerContainer.classList.add("trx");
    })

registerBackBtn.addEventListener("click", (e) => {
e.preventDefault()
registerContainer.classList.remove("trx2");
registerContainer.classList.add("trx2");
loginContainer.classList.remove("trx2");
})

loginNowBtn.addEventListener("click", (e) => {
    e.preventDefault();
   

    registerContainer.classList.add("trx2");
    loginContainer.classList.remove("trx2");
    })



registerBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(input.value == ""){
        alert("incorrect input")
    }else{
    home.classList.remove("trx")
registerContainer.classList.add("trx2");
home.classList.add("trx")
    }
})

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(input.value == ""){
        alert("incorrect input")
    }else{
    loginContainer.classList.add("trx2");
    home.classList.add("trx");
    }
})
