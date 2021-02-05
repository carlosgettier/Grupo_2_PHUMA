window.addEventListener("load",function(){

    let inputEmail= document.querySelector("#email")
     let inputPassword= document.querySelector("#password")
     let errorEmail= document.querySelector("#errorEmail")
    let errorPassword= document.querySelector("#errorPassword")
    let form = document.querySelector(".datoImp")
    let eye= document.querySelector(".eyeIcon")


    form.addEventListener("submit",function(event){
        if( inputEmail.value.length == 0 || inputPassword.value.length == 0){   
            console.log("Hay un campo sin completar")
            event.preventDefault()
        }else{
            event.submit()
        }
    })

    let error= 0

    let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   inputEmail.addEventListener("blur", function (){
       if(!regEx.test(inputEmail.value)){
        errorEmail.innerText = "El email no es valido"
        error=error ++
    }else{
        errorEmail.innerText = ""
        errors = 0
     
    }

    eye.addEventListener("click",function(){
        eye.classList.toggle("hide")
        eye.classList.toggle("show")
        
           if(inputPassword.getAttribute("type") == 'password'){
            inputPassword.setAttribute('type','text')
           }
           else{
               inputPassword.setAttribute('type','password')
           }
    })
    inputPassword.addEventListener("blur",function(){
        if(inputPassword.value.length<8){
           errorPassword.innerHTML="la contraseña debe tener mas de 8 caracteres"
           error= error ++
        }
        else{
           errorPassword.innerHTML= ""
           error=0
        }
    })
    form.addEventListener("submit", function (evento){
        if(errors > 0){
            evento.preventDefault()
        }else{
            evento.submit()
        }
    })


}) 
    
})


