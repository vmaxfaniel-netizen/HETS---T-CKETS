const tickets = [];

for (let i = 1; i <= 200; i++) {

    const numero = "ESY-" + String(i).padStart(3, "0");

    tickets.push({
        numero: numero,
        date: "Samedi 27",
        heure: "16h30",
        lieu: "Aktowers"
    });

}

let index = 0;

function afficherTicket() {

    const t = tickets[index];

    document.getElementById("numero").textContent = t.numero;

    document.getElementById("qr").src =
        "qrcodes/" + t.numero + ".png";

}

afficherTicket();
function suivant() {

    if (index < tickets.length - 1) {
        index++;
        afficherTicket();
    }

}

function precedent() {

    if (index > 0) {
        index--;
        afficherTicket();
    }

}
