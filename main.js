document.addEventListener('DOMContentLoaded', () => {
    // Fetch news from the API
    fetchNews();
});

async function fetchNews() {
    const apiKey = 'eecf43ab1b944b0fad877d156394a7e5'; // Replace with your API key
    const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-10&sortBy=publishedAt&apiKey=eecf43ab1b944b0fad877d156394a7e5`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Process the news articles
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    const newsSection = document.getElementById('news-section');

    // Clear existing articles
    newsSection.innerHTML = '';

    // Display each news article
    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsSection.appendChild(articleElement);
    });
}
