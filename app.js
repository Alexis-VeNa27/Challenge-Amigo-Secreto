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

/* Sortear un amigo aleatorio */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").innerHTML = `🎉 Amigo seleccionado: <strong>${amigos[indiceAleatorio]}</strong> 🎉`;
}