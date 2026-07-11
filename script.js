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

    document.getElementById("qrcode").innerHTML = "";

new QRCode(document.getElementById("qrcode"), {
    text: t.numero,
    width: 220,
    height: 220
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

    html2canvas(document.querySelector(".ticket"), {
        scale: 3
    }).then(canvas => {

        const lien = document.createElement("a");

        lien.download = document.getElementById("numero").textContent + ".png";

        lien.href = canvas.toDataURL("image/png");

        lien.click();

    });

}
