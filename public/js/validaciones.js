











































































































































































//--------EMPIEZA CARLOS----------
let password=document.querySelector("#password")
let eye= document.querySelector(".eyeIcon")


eye.addEventListener("click",function(){
     eye.classList.toggle("hide")
     eye.classList.toggle("show")
     
        if(password.getAttribute("type")== 'password'){
         password.setAttribute('type','text')
        }
        else{
            password.setAttribute('type','password')
        }
 })
 password.addEventListener()