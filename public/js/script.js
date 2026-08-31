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

//Dynamic image preview in edit listing form
const imageInput = document.getElementById("image");
const imagePreview = document.getElementById("image-preview");

if (imageInput && imagePreview) {
    imageInput.addEventListener("change", () => {
        const file = imageInput.files[0];

        if (file) {
            imagePreview.src = URL.createObjectURL(file);
        }
    });
}

//Filter
const categories = document.querySelectorAll(".category");

categories.forEach(category => {
    category.addEventListener("click", () => {
        categories.forEach(item => {
            item.classList.remove("active");
        });

        category.classList.add("active");
    });
});

//Tax switch functionality
let taxSwitch = document.getElementById("switchCheckReverse");
let taxInfo = document.getElementsByClassName("tax-info");

taxSwitch.addEventListener("click", () => {
    for(info of taxInfo){
        if(info.style.display != "inline"){
            info.style.display = "inline";
        }
        else{
            info.style.display = "none";
        }
    }
});