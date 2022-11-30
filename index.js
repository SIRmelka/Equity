let btns = document.querySelectorAll(".section .next ")
let confirmationBtn = document.querySelector(".accept")
let popupBtns = document.querySelectorAll(".popup-btn")
let confirmForm = document.querySelector(".confirm-form")


console.log(popupBtns);
btns.forEach((btn,index) => {
    btn.addEventListener('click',(event)=>{
        event.preventDefault()
        const section = btn.parentNode.parentNode
        index<btns.length?section.style.display="none":""
        section.nextElementSibling.style.display="flex"
        // alert(index)
    })
})

confirmationBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    let popup = confirmationBtn.parentNode.parentNode.parentNode.nextElementSibling
    popup.style.display="flex"
})
popupBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.parentNode.parentElement.style.display="none"
        popupBtns[1].addEventListener('click',()=>{
            confirmForm.submit()
        })
    })
})
console.log(btns);
