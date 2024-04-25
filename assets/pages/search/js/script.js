document.addEventListener("DOMContentLoaded", function() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    let colleges = []; // Define colleges variable outside of the fetch callback to make it accessible globally

    // Fetch the college data
    fetch("http://127.0.0.1:8199/dataList", requestOptions)
        .then((response) => response.json()) // Parse the response as JSON
        .then((result) => {
            colleges = result; // Assuming result is an array of colleges
            updateSelectedColleges();
            displaySearchResults(colleges); // Display all colleges initially
        })
        .catch((error) => console.error(error));

    // Function to add a college to the list
    function addToList(college) {
        var storedList = JSON.parse(localStorage.getItem('selectedSchools')) || [];
        storedList.push(college);
        localStorage.setItem('selectedSchools', JSON.stringify(storedList));
        updateSelectedColleges();
    }

    // Function to update the selected colleges list
    function updateSelectedColleges() {
        var selectedCollegesList = document.getElementById("selected");
        if (!selectedCollegesList) return; // Check if the element exists
        selectedCollegesList.innerHTML = ""; // Clear previous list
        var storedList = JSON.parse(localStorage.getItem('selectedSchools')) || [];
        storedList.forEach(function(college) {
            var listItem = document.createElement("li");
            listItem.textContent = college;
            selectedCollegesList.appendChild(listItem);
        });
    }

    // Event listener for the search input field
    var searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function(event) {
        var searchTerm = event.target.value.toLowerCase(); // Get the value from the input field
        if (searchTerm.trim() === "") { // If search term is empty, display all colleges
            displaySearchResults(colleges);
            return;
        }
        var filteredColleges = colleges.filter(function(college) {
            return college.name.toLowerCase().includes(searchTerm);
        });
        displaySearchResults(filteredColleges);
    });

    // Function to display search results
    // Inside the displaySearchResults function
    // Inside the displaySearchResults function
    function displaySearchResults(results) {
        var searchResults = document.getElementById("searchResults");
        searchResults.innerHTML = ""; // Clear previous search results
        if (results.length === 0) {
            searchResults.innerHTML = "<p>No results found</p>";
            return;
        }
        results.forEach(function(college) {
            var resultElement = document.createElement("div");
            resultElement.classList.add("searchResult");

            // Create a button instead of an h3 element
            var collegeButton = document.createElement("button");
            collegeButton.textContent = college.name;
            collegeButton.classList.add("collegeButton"); // Add a class for styling
            collegeButton.onclick = function() {
                openCollegeBox(college.name) // Passing college name to addToList function
            };

            // Add flex container and style
            var flexContainer = document.createElement("div");
            flexContainer.classList.add("flex-container");
            flexContainer.appendChild(collegeButton);

            // Create and append the "Add to List" button
            var addButton = document.createElement("button");
            addButton.classList.add("button");
            addButton.textContent = "Add to List";
            addButton.onclick = function() {
                addToList(college.name); // Passing college name to addToList function
            };
            flexContainer.appendChild(addButton);

            resultElement.appendChild(flexContainer);
            searchResults.appendChild(resultElement);
        });
    }

    function openCollegeBox(collegeName) {
        console.log("test")
        var collegeBox = document.getElementById("collegeBox");
        var collegeNameElement = document.getElementById("collegeName");
        collegeNameElement.textContent = collegeName;
        collegeBox.style.display = "block";
    }
    
    // Function to close the college box
    function closeCollegeBox() {
        var collegeBox = document.getElementById("collegeBox");
        collegeBox.style.display = "none";
    }
});