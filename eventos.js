document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contenedor").addEventListener("click", 
        function() {
            console.log("llego hasta aca");
            alert("Hola, soy el div");
        
        });

    document.querySelector("button").addEventListener("click", function(evento) {
        alert("Hola!");
        evento.stopPropagation();
    });
    });
