function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

// Function to open the article modal and display the relevant article
function openArticle(articleId) {
    // Display the modal
    document.getElementById("article-modal").style.display = "block";
    
    // Hide all articles
    var articles = document.querySelectorAll(".article-content");
    articles.forEach(function(article) {
        article.classList.remove("active");
    });
    
    // Show the selected article
    document.getElementById(articleId).classList.add("active");
}

// Function to close the article modal
function closeArticle() {
    document.getElementById("article-modal").style.display = "none";
}
