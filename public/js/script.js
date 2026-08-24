// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

const toggles = document.querySelectorAll(".toggle");

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-bs-theme", savedTheme);

const updateToggleIcon = () => {
    toggles.forEach(toggle => {
        if (toggle.classList.contains("bi")) {
            toggle.classList.toggle("bi-moon-fill", savedTheme !== "dark");
            toggle.classList.toggle("bi-sun-fill", savedTheme === "dark");
        }
    });
};

updateToggleIcon();

toggles.forEach(toggle => {
    toggle.onclick = () => {
        const currentTheme = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-bs-theme", currentTheme);
        localStorage.setItem("theme", currentTheme);
        toggles.forEach(toggle => {
            if (toggle.classList.contains("bi")) {
                toggle.classList.toggle("bi-moon-fill", currentTheme !== "dark");
                toggle.classList.toggle("bi-sun-fill", currentTheme === "dark");
            }
        });
    };
});