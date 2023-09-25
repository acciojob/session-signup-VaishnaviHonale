 document.getElementById("signup-form").addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password === confirmPassword) {
                const userData = {
                    name: name,
                    email: email,
                    password: password
                };

                // Store data in session storage
                sessionStorage.setItem("name", userData.name);
                sessionStorage.setItem("email", userData.email);
                sessionStorage.setItem("password", userData.password);

                alert("Sign up successful!");
            } else {
                alert("Passwords do not match");
            }
 });