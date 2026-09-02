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

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        name: form.querySelector('[name="name"]').value,
        mobile: form.querySelector('[name="mobile"]').value,
        course: form.querySelector('[name="course"]').value,
        message: form.querySelector('[name="message"]').value
    };

    try {

        await fetch("https://script.google.com/macros/s/AKfycbySKzc4S7KZQs8lyFsGOCPbAjkTwjO6v15SeEOUBP3Oku-_0TSdHE3pr2S_CU_QyFCU/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify(data)
        });

        alert("Enquiry submitted successfully! ✅");

        form.reset();

    } catch (error) {

        alert("Something went wrong. Please try again.");

        console.error(error);
    }

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
