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