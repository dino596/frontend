---
layout: default
title: List
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ScholarSearch</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .selected {
            background-color: yellow;
        }
        .delete-button {
            margin-left: 10px; /* Adjust as needed */
        }
    </style>
</head>
<body>
    <div class="trifold">
        <div class="column">
            <h2><b>Safety Schools</b></h2>
            <ul id="safety" class="category"></ul>
        </div>
        <div class="column">
            <h2><b>Match Schools</b></h2>
            <ul id="match" class="category"></ul>
        </div>
        <div class="column">
            <h2><b>Reach Schools</b></h2>
            <ul id="reach" class="category"></ul>
        </div>
    </div>
    <footer>
        <!-- Footer content goes here -->
    </footer>
    <div class="column">
        <h2><b>Searched Colleges</b></h2>
        <ul id="selected">
            // selelected colleges
            <script>
                // Retrieve selected colleges from database
                var selectedColleges = JSON.parse(localStorage.getItem('selectedSchools')) || [];
                var selectedList = document.getElementById('selected');
                // Display selected colleges
                selectedColleges.forEach(function(college) {
                    var listItem = document.createElement('li');
                    listItem.textContent = college;
                    listItem.onclick = function() {
                        toggleSelect(this);
                    };
                    selectedList.appendChild(listItem);
                });
            </script>
        </ul>
        <div class="buttons">
            <button onclick="moveTo('Safety')">Move to Safety</button>
            <button onclick="moveTo('Match')">Move to Match</button>
            <button onclick="moveTo('Reach')">Move to Reach</button>
        </div>
        <div class="buttons">
            <button onclick="deleteSelected()">Delete</button>
        </div>
    </div>
    <script>
        var selectedSchools = []; // Array to store selected schools
        // Function to move schools between categories
        function moveTo(category) {
            if (selectedSchools.length === 0) {
                alert('Please select at least one school first.');
                return;
            }
            var destinationList = document.getElementById(category.toLowerCase());
            selectedSchools.forEach(function (school) {
                var listItem = document.createElement("li");
                listItem.textContent = school;
                destinationList.appendChild(listItem);
            });
            selectedSchools = []; // Clear the selected schools array
            // Clear the visual indication of selection
            var selectedListItems = document.querySelectorAll("#selected li");
            selectedListItems.forEach(function(item) {
                item.classList.remove('selected');
            });
            // Clear the selected colleges list
            document.getElementById("selected").innerHTML = "";
        }
        // Function to toggle selection of schools
        function toggleSelect(school) {
            if (selectedSchools.includes(school.textContent)) {
                selectedSchools = selectedSchools.filter(item => item !== school.textContent);
                school.classList.remove('selected');
            } else {
                selectedSchools.push(school.textContent);
                school.classList.add('selected');
            }
        }
        // Function to remove school from the list
        function removeFromList(schoolElement) {
            var schoolName = schoolElement.textContent;
            var index = selectedSchools.indexOf(schoolName);
            if (index !== -1) {
                selectedSchools.splice(index, 1);
            }
            schoolElement.remove();
        }
        // Function to delete selected colleges
        function deleteSelected() {
            var selectedListItems = document.querySelectorAll("#selected li");
            selectedListItems.forEach(function(item) {
                if (item.classList.contains('selected')) {
                    removeFromList(item);
                }
            });
        }
    </script>
</body>
</html>