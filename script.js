

// 1. KUPI ULAZNICU

const buyButton = document.querySelector(".button");

buyButton.addEventListener("click", function () {
    alert("Dobrodošli na NEON FEST 2026! 🎵");
});


// 2. KUPNJA ULAZNICA

const buyButtons = document.querySelectorAll(".ticket .button");

buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const ticket = button.parentElement;
        const ticketName = ticket.querySelector("h3").textContent;

        alert("Odabrali ste ulaznicu: " + ticketName);
    });
});


// 3. KONTAKT FORMA

const form = document.querySelector(".contact form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Hvala na poruci! Javili ćemo vam se uskoro. 🎶");

        form.reset();
    });
}