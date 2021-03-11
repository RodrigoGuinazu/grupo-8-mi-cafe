window.addEventListener('load', function() {

    let erroresName = document.getElementById("erroresName");
    let erroresPrice = document.getElementById("erroresPrice");
    let erroresDescription = document.getElementById("erroresDescription");

    // ERRORES CON BLUR //
    
    let name = document.querySelector('input.name');
    name.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(name.value == ""){
            erroresName.innerHTML = "Debes ponerle un nombre al articulo"
        }else if(name.value.length < 5){
            erroresName.innerHTML = "El titulo debe tener al menos 5 caracteres"
        }else {
            erroresName.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    let price = document.querySelector('input.price');
    price.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(price.value <= 0){
            erroresPrice.innerHTML = "El precio deber ser mayor a $0"
        }else {
            erroresPrice.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    let description = document.querySelector('textarea.description');
    description.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(description.value == ""){
            erroresDescription.innerHTML = "La descripcion no puede estar vacia"
        }else if(description.value.length < 20){
            erroresDescription.innerHTML = "La descripcion debe tener al menos 20 caracteres"
        }else {
            erroresDescription.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    // ERRORES CUANDO EL ADMIN APRETA SUBMIT //

    let formEdit = document.querySelector('form.edit-product')
    formEdit.addEventListener('submit', function(e){ // Todo este codigo funciona cuando el Admin apreta el boton submit

        let errores = {
            name: "",
            price: "",
            description: ""
        }

        let name = document.querySelector('input.name');
        if(name.value == ""){
            errores.name = "Debes ponerle un nombre al articulo"
        }else if(name.value.length < 5){
            errores.name = "El titulo debe tener al menos 5 caracteres"
        }else {
            errores.name = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }


        let price = document.querySelector('input.price');
        if(price.value <= 0){
            errores.price = "El precio deber ser mayor a $0"
        }else {
            errores.price = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }

        let description = document.querySelector('textarea.description');
        if(description.value == ""){
            errores.description = "La descripcion no puede estar vacia"
        }else if(description.value.length < 20){
            errores.description = "La descripcion debe tener al menos 20 caracteres"
        }else {
            errores.description = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }

        if(errores.name != "" || errores.price != "" || errores.description != ""){ // En caso de que haya un error hace lo siguiente
            e.preventDefault();

            erroresName.innerHTML = errores.name

            erroresPrice.innerHTML = errores.price

            erroresDescription.innerHTML = errores.description
        }else {
            formEdit.submit() // En el caso de que la condicion de arriba sea falsa (que no haya ningun error) permitimos el submit de formEdit
        }
    })

    // ELIMINAR PRODUCTO //

    let deleteProduct = document.querySelector('form.delete-product');

    deleteProduct.addEventListener('submit', (e) => {
        e.preventDefault(); 
        swal({
            title: "Eliminar Producto",
            text: "Está seguro que desea eliminar el producto?",
            icon: "warning",
            buttons: ["Cancelar","Sí"],
            dangerMode: true,
            closeOnClickOutside: true,
            closeOnEsc: false,
        })
        .then((deleteProduct) => {
            if (deleteProduct == true) {
            deleteProduct.submit();
            swal("El Producto fue eliminado!", {
            icon: "success",
            })
            }
        })
    })
    
})