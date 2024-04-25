---
layout: default
title: Search
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ScholarSearch/assets/common/css/style.css">
    <link rel="stylesheet" href="/ScholarSearch/assets/pages/search/css/style.css">
    <style>
    </style>
    <title>College Search</title>
</head>
<body>
    <div id="collegeBox" class="college-box">
        <div class="college-content">
            <span class="close-btn" onclick="closeCollegeBox()">&times;</span>
            <h2 id="collegeName"></h2>
        </div>
    </div>
    <div class="container">
        <h1>College Search</h1>
        <form id="searchForm">
            <label for="searchInput">Search by College Name:&nbsp; </label>
            <input type="text" id="searchInput" name="searchInput" placeholder="Enter college name">
        </form>
        <div id="searchResults">
        </div>
    </div>
</body>
<script src="/ScholarSearch/assets/pages/search/js/script.js"></script>
</html>