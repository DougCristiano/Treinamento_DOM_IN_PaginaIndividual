function enviar() {
    let nome_usuario = document.getElementById("nome").value;
    let feedback_usuario = document.getElementById("feedback").value;
    if (nome_usuario === "" || feedback_usuario === "") {
        alert("Não pode enviar feedback vazio. Tente novamente!")
        return;
    }
    let div = document.createElement("div");
    div.classList.add("comentarios");
    let usuario = document.createElement("p");
    usuario.classList.add("usuario");
    usuario.innerText = nome_usuario;
    let comentario = document.createElement("p");
    comentario.classList.add("nome");
    comentario.innerText = feedback_usuario;

    div.append(usuario);
    div.append(comentario);

    let inicio = document.querySelector(".inicioComentarios");
    inicio.append(div);

    document.getElementById("nome").value = "";
    document.getElementById("feedback").value = "";
}
