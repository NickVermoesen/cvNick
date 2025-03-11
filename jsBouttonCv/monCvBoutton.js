// Fonction à exécuter lorsqu'on clique sur le bouton "Oui"
function afficherAlerteOui() {
    alert("Je suis pret a vous rencontrer pour vous donner plus de details sur mon parcours et mes competences");
}

// Fonction à exécuter lorsqu'on clique sur le bouton "Non"
function afficherAlerteNon() {
    alert("Merci pour l'attention que vous avez porté à mon CV");
}

// Ajout des gestionnaires d'événements aux boutons
document.addEventListener("click", function() {
    let btnOui = document.getElementById("btnOui");
    let btnNon = document.getElementById("btnNon");

    btnOui.addEventListener("click", afficherAlerteOui);
    btnNon.addEventListener("click", afficherAlerteNon);
});