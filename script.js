const ticket = {
    numero: "ESY-001",
    date: "Samedi 27",
    heure: "16h30",
    lieu: "Aktowers"
};

document.getElementById("numero").textContent = ticket.numero;

document.querySelector(".ticket p:nth-of-type(1)").textContent = "📅 " + ticket.date;
document.querySelector(".ticket p:nth-of-type(2)").textContent = "🕟 " + ticket.heure;
document.querySelector(".ticket p:nth-of-type(3)").textContent = "📍 " + ticket.lieu;

document.getElementById("qr").src = "qrcodes/" + ticket.numero + ".png";
