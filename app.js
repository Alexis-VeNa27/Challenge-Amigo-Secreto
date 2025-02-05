let amigos = [];

/* Agregar amigo al array */
function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value.trim();  

    if (!nombreAmigo) {  
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {  
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";  
    
    console.log(amigos);
}