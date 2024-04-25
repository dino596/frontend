---
layout: default
title: Profile
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <link rel="stylesheet" href="/ScholarSearch/assets/common/css/style.css">
    <link rel="stylesheet" href="/ScholarSearch/assets/pages/profile/css/style.css">
</head>
<body>
    <div class="profile-container">
        <div class="profile-picture">
            <!--img src="profile_placeholder.png" alt="Profile Picture"-->
        </div>
        <div class="profile-form">
            <h2>Login</h2>
            <form id="login-form">
                <input type="text" id="username" placeholder="Username">
                <input type="password" id="password" placeholder="Password">
                <input type="submit" value="Login">
            </form>
        </div>
        <div class="profile-form">
            <h2>Sign Up</h2>
            <form id="signup-form">
                <input type="text" id="sign-username" placeholder="Username">
                <input type="password" id="sign-password" placeholder="Password">
                <input type="password" id="confirm-password" placeholder="Confirm Password">
                <input type="submit" value="Sign Up">
            </form>
        </div>
    </div>
<script src="/ScholarSearch/assets/pages/profile/js/script.js"></script>
</body>
</html>
