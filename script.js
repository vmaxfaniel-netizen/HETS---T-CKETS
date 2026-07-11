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

    // Met à jour le numéro
    document.getElementById("numero").textContent = t.numero;

    // Génère le QR
    const qr = document.getElementById("qrcode");
    qr.innerHTML = "";

    new QRCode(qr, {
        text: t.numero,
        width: 180,
        height: 180
    });
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

function telechargerPNG() {

    // Laisse le temps au QR de se dessiner
    setTimeout(() => {

        html2canvas(document.querySelector(".ticket"), {
            scale: 3,
            useCORS: true,
            backgroundColor: null
        }).then(canvas => {

            const image = canvas.toDataURL("image/png");

            // Fonctionne mieux sur iPhone
            const nouvelleFenetre = window.open();
            nouvelleFenetre.document.write(
                '<img src="' + image + '" style="width:100%">'
            );

        });

    }, 300);

}
