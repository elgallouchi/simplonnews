let tokenStorage = sessionStorage.getItem('token');
if (!tokenStorage) {
    window.location.href = "/index.html"
}

// get id article in url current
let lienCurrent = window.location.href;
let lienId = lienCurrent.split("id=")[1]

// generate article 
function generateArticle(dataArticles) {

    let articleHtml = document.querySelector('.generate-article');
    let aside = document.querySelector('aside');

    let outputArticle = '';
    let outputAside = '';
    let count = 0;

    dataArticles.forEach(article => {
        if (article.id == lienId) {
            outputArticle = `
        <article class="articleContent">
            <img src="${article.img}" alt="${article.title}">
            <h1>${article.title}</h1>
            <h3><span>Author: ${article.author}</span></h3>
            <h2>${article.resume}</h2>
            <p>${article.content}</p>
            <div class="buttons-suivant-precedant">
                <a href="?id=${article.id - 1}">&laquo; article précédant</a>
                <a href="?id=${article.id + 1}">Article suivant &raquo;</a>
            </div>
        </article>
        `;
        }
        if (count < 5) {
            outputAside += `
            <img src="${article.img}" alt=${article.title}">
            <h4>${article.title}</h4>
            `;
            count += 1;
        }
    })
    aside.innerHTML = outputAside;
    articleHtml.innerHTML = outputArticle;
}


// requette fetch
function requetteFetch() {

    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tokenStorage
        }
    };
    fetch("https://simplonews.brianboudrioux.fr/articles", options)
        .then(response => response.json()
            .then(data => {
                generateArticle(data.articles);
            }))
        .catch(err => {
            console.log(err);
        })
}
requetteFetch()
