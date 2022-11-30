let btns = document.querySelectorAll(".section .btn ")


btns.forEach((btn) => {
    btn.addEventListener('click',(event)=>{
        event.preventDefault()
        const section = btn.parentNode.parentNode
        section.style.display="none"
        section.nextElementSibling.style.display="flex"

    })
})

console.log(btns);
