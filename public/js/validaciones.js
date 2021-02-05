
let inputName = document.querySelector("#name")
let errorName = document.querySelector("#errorName")

let inputImage = document.querySelector("#imagen")
let errorImage = document.querySelector("#errorImage")

let inputEmail = document.querySelector("#email")
let errorEmail = document.querySelector("#errorEmail")

let inputPassword = document.querySelector("#password")
let errorPassword = document.querySelector("#errorPassword")

let inputRepassword = document.querySelector("#repassword")
let errorRepassword = document.querySelector("#errorRepassword")



let form = document.querySelector(".formulario")
let errors = 0

console.log(inputName)
console.log(form)

//-----------------Revisando qu eno haya campos vacios-------------------------->

form.addEventListener("submit", function(event){
    
     if(inputName.value.length == 0 || inputImage.value.length == 0 || inputEmail.value.length == 0 || inputPassword.value.length == 0 || inputRepassword.value.length == 0){   
        console.log("Hay un campo sin completar")
        event.preventDefault()
    }else{
        event.submit()
    }
    
})
 

//------------------------Nombre------------------------->
form.addEventListener("submit", function(){})
inputName.addEventListener("blur", function(){
    //console.log(inputName.value)
    if(inputName.value.length <4){

        errorName.innerText = "El minimo de caracteres para este campo es 4"
        errors = errors++
    }else{
        errorName.innerText = ""
        errors = 0
    
      
    }
})
//-------------------------Imagen------------------------>
inputImage.addEventListener("blur",function(){


if(inputImage.value.length == 0){
errorImage.innerText = "No olvides seleccionar un Avatar"
errors = errors++
}else{
    errorImage.innerText = ""
    errors = 0

}
})

//------------------------Email------------------------->
let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
inputEmail.addEventListener("blur", function (){

    if(!regEx.test(inputEmail.value)){
        errorEmail.innerText = "El email no es valido"
        errors = errors++
    }else{
        errorEmail.innerText = ""
        errors = 0
     
    }
})


form.addEventListener("submit", function (evento){
    if(errors > 0){
        evento.preventDefault()
    }else{
        evento.submit()
    }
})






//--------VALIDACION CONTRASEÑA----------

let eye= document.querySelector(".eyeIcon")


eye.addEventListener("click",function(){
     eye.classList.toggle("hide")
     eye.classList.toggle("show")
     
        if(inputPassword.getAttribute("type")== 'password'){
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

 //----- validacion de confirmar contraseña-------
 
 
 inputRepassword.addEventListener("blur",function(){
    if(inputRepassword.value.length<8){
       errorRepassword.innerHTML="la contraseña debe tener mas de 8 caracteres"
       error= error ++
    }
    else{
       errorRepassword.innerHTML= ""
       error=0
    }
})


































































































































































