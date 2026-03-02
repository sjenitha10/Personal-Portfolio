document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        let isValid = true;

      
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        
        if (name === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        }
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email === "") {
            emailError.textContent = "Email is required";
            isValid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email";
            isValid = false;
        }
        if (message === "") {
            messageError.textContent = "Message is required";
            isValid = false;
        }
        if (isValid) {
            alert("Message sent successfully!");
            form.reset();
        }
    });

});

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send ("service_lxze4ye","template_w2j036q",parms).then(alert("Email Sent!!"))
}
    

    