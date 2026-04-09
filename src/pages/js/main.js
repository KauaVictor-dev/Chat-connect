function enviarMensagem() {
    const chat = document.getElementById("chat");
    const inputMensagem = document.getElementById("input");

    const texto = inputMensagem.value.trim();

    if(texto === "") return;

    const msg = document.createElement("li");
    msg.classList.add("message-sent");
    msg.textContent = texto;

    chat.appendChild(msg);

    inputMensagem.value = "";
    
    chat.scrollTo({
    top: chat.scrollHeight,
    behavior: "smooth"
});

}

document.getElementById("input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        enviarMensagem();
    }
});
