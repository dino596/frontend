document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const requestOptions = {
        method: "GET",
        redirect: "follow"
        };
    fetch("http://127.0.0.1:8199/loginList", requestOptions)
        .then(response => response.json())
        .then(users => {
            console.log("Response from server:", users);
            for (var i = 0; i < users.length; i++) {
                if (username == users[i].username && password == users[i].password){
                    console.log("logged in");
                    window.location.href = "/ScholarSearch/"
                }
            }
            console.log("not logged in")
        })
        .catch(error => console.error(error));
    // Here you can add validation for username and password
    // Perform login process (for demonstration purpose, we'll just log the values)
    console.log("Username: " + username);
    console.log("Password: " + password);
    // You can perform further actions like sending an AJAX request to the server for authentication
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve signup form input values
    var username = document.getElementById("sign-username").value;
    var password = document.getElementById("sign-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        console.log("Passwords do not match!");
        return; // Exit function if passwords do not match
    }

    // Prepare data to send to server
    var formData = {
        username: username,
        password: password
    };

    const requestOptions = {
        method: "POST",
        redirect: "follow"
      };
      
    fetch("http://127.0.0.1:8199/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData) // Convert formData object to JSON string
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error));

    window.location.href = "/ScholarSearch/"
    
});
