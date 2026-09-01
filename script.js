// ================= CURRENT YEAR =================

document.getElementById("year").textContent = new Date().getFullYear();


// ================= NAVBAR ACTIVE LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================= BACK TO TOP =================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= CONTACT FORM =================

const form = document.getElementById("enquiryForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for your enquiry!\n\n" +
        "Aram Computer Education will contact you soon."
    );

    form.reset();

});


// ================= CLOSE MOBILE NAVBAR =================

const navLinksAll = document.querySelectorAll(".navbar-nav .nav-link");

navLinksAll.forEach(link => {

    link.addEventListener("click", () => {

        const navbar = document.querySelector(".navbar-collapse");

        if (navbar.classList.contains("show")) {

            const bsCollapse =
                new bootstrap.Collapse(navbar, {
                    toggle: false
                });

            bsCollapse.hide();

        }

    });

});
