// Recupera l'utente salvato
let utente = localStorage.getItem("utente");

// Se non esiste → chiedilo
if (!utente) {
    utente = prompt("🎄 Benvenuto! Inserisci il tuo nome:");
    if (!utente || utente.trim() === "") {
        utente = "Ospite";
    }
    localStorage.setItem("utente", utente);
}

// Funzione bottone ENTRA
function entra() {
    window.location.href = "calendario.html";
}

// Funzione CAMBIA NOME
function cambiaNome() {
    let nuovoNome = prompt("Inserisci il nuovo nome:");
    if (nuovoNome && nuovoNome.trim() !== "") {
        localStorage.setItem("utente", nuovoNome.trim());
        alert("Nome aggiornato!");
    }
}
