let formCreate = document.querySelector('form.form-create')
console.log(formCreate)
formCreate.addEventListener('submit', function(e){
    e.preventDefault();

    let errores = {
        name: "",
        price: "",
        image: "",
        description: ""
    }

    /*let erroresName = document.querySelector(".erroresName");
    let erroresPrice = document.querySelector(".erroresPrice");
    let erroresImg = document.querySelector(".erroresImg");
    let erroresDescription = document.querySelector(".erroresDescription");*/

    let name = document.querySelector('input.name');
    if(name.value == ""){
        errores.name == "Debes ponerle un nombre al articulo"
        //erroresName.innerHTML = "Debes ponerle un nombre al articulo"
    }else if(name.value.length < 5){
        errores.name == "El titulo debe tener al menos 5 caracteres"
        //erroresName.innerHTML = "El titulo debe tener al menos 5 caracteres"
    }

    let price = document.querySelector('input.price');
    if(price.value < 0){
        erroresPrice.innerHTML = "El precio deber ser mayor a $0"
    }

    let image = document.querySelector('input.product-img');
    if(image.value == ""){
        erroresImg.innerHTML = "Debes subir la imagen del Producto"
    }

    let description = document.querySelector('textarea.description');
    if(description.value == ""){
        erroresDescription.innerHTML = "La descripcion no puede estar vacia"
    }else if(description.value.length < 20){
        erroresDescription.innerHTML = "La descripcion debe tener al menos 20 caracteres"
    }

    if(errores.image != "" || errores.name != "" || errores.price != "" || errores.description != ""){

        let erroresImg = document.querySelector(".erroresImg");
    
        erroresImg.innerHTML = errores.image;
        
        let erroresName = document.querySelector(".erroresName");
        
        erroresName.innerHTML = errores.name;

        let erroresPrice = document.querySelector(".erroresPrice");
        
        erroresPrice.innerHTML = errores.price

        let erroresDescription = document.querySelector(".erroresDescription");
        
        erroresDescription.innerHTML = errores.description
    }
})