var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("http://127.0.0.1:8199/articles/articlesList", requestOptions)
    .then(response => response.json()) // Assuming the data is in JSON format
    .then(result => {
        // Display the fetched data in the articlesList ul
        const articlesList = document.getElementById("articlesList");
        result.forEach(article => {
            const li = document.createElement("li");
            li.innerHTML = `<b>${article.title}</b> by ${article.author} - <a href="${article.link}">Read More</a>`;
            articlesList.appendChild(li);
        });
    })
    .catch(error => console.log('error', error));