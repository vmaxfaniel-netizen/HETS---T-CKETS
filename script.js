const tickets = [];

for (let i = 1; i <= 200; i++) {
    tickets.push({
        numero: "ESY-" + String(i).padStart(3, "0"),
        date: "Samedi 27",
        heure: "16h30",
        lieu: "Aktowers"
    });
}

let index = 0;

function afficherTicket() {

    const t = tickets[index];

    document.getElementById("numero").textContent = t.numero;
    document.getElementById("date").textContent = "📅 " + t.date;
    document.getElementById("heure").textContent = "🕟 " + t.heure;
    document.getElementById("lieu").textContent = "📍 " + t.lieu;

    const qr = document.getElementById("qrcode");
    qr.innerHTML = "";

    new QRCode(qr, {
        text: t.numero,
        width: 110,
        height: 110
    });

}

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

function telechargerPNG() {

    html2canvas(document.querySelector(".ticket"), {
        scale: 3,
        useCORS: true
    }).then(canvas => {

        const lien = document.createElement("a");

        lien.download = tickets[index].numero + ".png";

        lien.href = canvas.toDataURL("image/png");

        lien.click();

    });

}

window.onload = afficherTicket;
