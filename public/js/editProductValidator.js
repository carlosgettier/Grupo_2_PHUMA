window.addEventListener("load", function () {
    let form = document.querySelector("#form")
    let inputNombre = document.querySelector("#nombre")
    let inputdescripcion = document.querySelector("#description")
    let inputImagenP = document.querySelector("#rutaALaImagen")
    let inputImagenS = document.querySelector("#rutaImagenesSecundarias")
    let inputPrecio = document.querySelector("#precio")

    let errorNombre = document.querySelector("#errorNombre")
    let errorDescripcion = document.querySelector("#errorDescripcion")
    let errorImagenP = document.querySelector("#errorImagenP")
    let errorImagenS = document.querySelector("#errorImagenS")
    let errorPrecio = document.querySelector("#errorPrecio")

    let errors = 0;
    form.addEventListener("submit", function (event) {

        if (inputNombre.value.length == 0 ||
             inputdescripcion.value.length == 0 ||
             inputPrecio.value.length == 0) {
            console.log("Hay un campo sin completar")
            event.preventDefault()
        } else {
            event.submit()
        }

    })
    inputNombre.addEventListener("blur", function () {

        if (inputNombre.value.length < 5) {

            errorNombre.innerText = "El minimo de caracteres para este campo es 5"
            errors = errors++
        } else {
            errorNombre.innerText = ""
            errors = 0


        }
    })
    inputdescripcion.addEventListener("blur", function () {
        console.log("descripcion")
        if (inputdescripcion.value.length < 20) {
            errorDescripcion.innerText = "El minimo de caracteres para este campo es 20"
            errors = errors++
        } else {
            errorDescripcion.innerText = ""
            errors = 0
        }
    })
    /*inputImagenP.addEventListener("blur", function () {
        if (inputImagenP.value.length == 0) {
            errorImagenP.innerText = "Debes ingresar una imagen"
            errors = errors++
        } else {
            errorImagenP.innerText = ""
            errors = 0
        }
    })
    inputImagenS.addEventListener("blur", function () {
        if (inputImagenS.value.length == 0) {
            errorImagenS.innerText = "Debes ingresar una imagen"
            errors = errors++
        } else {
            errorImagenS.innerText = ""
            errors = 0
        }
    })*/
    inputPrecio.addEventListener("blur", function () {
        if (inputPrecio.value.length == 0) {
            errorPrecio.innerText = "Debes ingresar un precio"
            errors = errors++
        } else {
            errorPrecio.innerText = ""
            errors = 0
        }
    })
    form.addEventListener("submit", function (evento) {
        if (errors > 0) {
            evento.preventDefault()
        } else {
            evento.submit()
        }
    })

})
