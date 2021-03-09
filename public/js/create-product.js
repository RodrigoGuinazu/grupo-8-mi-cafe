window.addEventListener('load', function(){
    let form = document.querySelector('form')
    form.addEventListener('submit', function(e){
        let errores = {
            image: "",
            name: "",
            price: "",
            description: ""
        }

        let image = document.querySelector('.product-img');
        if(image.value == ""){
            errores.image = "Debes subir la imagen del Producto"
        }

        let name = document.querySelector('.name');
        if(name.value == ""){
            errores.name = "Debes ponerle un nombre al articulo"
        }else if(name.value.length < 5){
            errores.name = "El titulo debe tener al menos 5 caracteres"
        }

        let price = document.querySelector('.price');
        if(price.value < 0){
            errores.price = "El precio deber ser mayor a $0"
        }

        let description = document.querySelector('.description');
        if(description.value == ""){
            errores.description = "La descripcion no puede estar vacia"
        }else if(description.value.length < 20){
            errores.description = "La descripcion debe tener al menos 20 caracteres"
        }

        if(errores.image != "" || errores.name != "" || errores.price != "" || errores.description != ""){
            e.preventDefault();

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

})