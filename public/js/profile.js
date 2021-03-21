window.addEventListener('load', function(){

    datosUsuario = document.querySelector('section.datos_usuario');

    botonUsuario = document.getElementById('usuario');
    botonCompras = document.getElementById('compras');
    botonFavoritos = document.getElementById('favoritos');
    botonTarjetas = document.getElementById('tarjetas');
    botonDirecciones = document.getElementById('direcciones');
    botonComentarios = document.getElementById('comentarios');
    botonAjustes = document.getElementById('ajustes');

    botonUsuario.addEventListener('click', function(){
        datosUsuario.innerHTML = `
            <h2>Tu Usuario</h2>
        `
    });

    botonCompras.addEventListener('click', function(){
        datosUsuario.innerHTML = `
            <h2>Tus Compras</h2>
        `
    });

    botonFavoritos.addEventListener('click', function(){
        datosUsuario.innerHTML = `
            <h2>Tus Favoritos</h2>
        `
    });

    botonTarjetas.addEventListener('click', function(){
        datosUsuario.innerHTML = `
            <h2>Tus Tarjetas</h2>
        `
    });

    botonDirecciones.addEventListener('click', function(){
        datosUsuario.innerHTML = `
            <h2>Tus Direcciones</h2>
        `
    });

    botonComentarios.addEventListener('click', function(){
        datosUsuario.innerHTML = `
            <h2>Tus Comentarios</h2>
        `
    });

    botonAjustes.addEventListener('click', function(){
        datosUsuario.innerHTML = `
            <h2>Ajustes</h2>
        `
    }); 

})