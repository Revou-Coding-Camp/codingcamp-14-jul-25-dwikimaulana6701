window.addEventListener('DOMContentLoaded', () => {
    const name = prompt("What is your name?");
    const greetingElement = document.getElementById("greeting");
    if (name && greetingElement) {
        greetingElement.textContent = `Hi ${name}, welcome to our website`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("messageForm");
    const result = document.getElementById("formResult");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            result.innerHTML = `
                <h3>Your Message:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;

            form.reset();
        });
    }

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});
