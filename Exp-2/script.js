document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = form.email.value.trim();
        const password = form.password.value.trim();
        let isValid = true;
        
        if (!validateEmail(email)) {
           alert("Please enter a valid email address.");
            isValid = false;
        }

        
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            isValid = false;
        }

        if (isValid) {
            alert("Login successful!");
            form.submit();
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
