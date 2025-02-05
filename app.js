let amigos = [];

/* Agregar amigo al array y actualizar lista */
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
    
    actualizarLista();    
}

/* Actualizar lista en pantalla */
function actualizarLista() {
    const listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";  

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaDeAmigos.appendChild(li);
    });
}