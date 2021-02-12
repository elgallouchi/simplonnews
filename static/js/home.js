// VERIFICATION du token

let tokenStorage = sessionStorage.getItem('token');
    if(!tokenStorage) {
        window.location.href = "../index.html"
    }

function addAdsBanner() {
    // add ads element in home
    let thirdElement = document.querySelector('article:nth-of-type(3)');
    let div = `
    <div class="ads">
        <div>
            Ads Here !
        </div>
    </div>
    `;
    thirdElement.insertAdjacentHTML("afterend", div);
}


// get token
// let token = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: decodeURIComponent(value) }), {});



// ------------------------------------------------- get users
function generateArticle(responseArticles) {


    let target = document.querySelector('main .container section');
    let output = '';
    responseArticles.forEach(article => {
        output += `
                <article>
                    <div class="article-image">
                        <a href="./article.html/${article.id}">
                            <img src="${article.img}"
                                alt="${article.title}" />
                        </a>
                    </div>
                    <div class="article-info">
                        <div>
                            <h2 class="article-titre"><a href="./article.html/${article.id}">${article.title}</a></h2>
                            <p class="article-description">
                            ${article.resume}
                            </p>
                        </div>
                        <div class="article-lire">
                            <a href="./article.html/${article.id}">Lire la suite</a>
                        </div>
                    </div>
                </article>
    `;
    });

    target.innerHTML = output;

    addAdsBanner();
}


fetch("https://simplonews.brianboudrioux.fr/articles", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + tokenStorage,
    }
})
    .then(function (response) {
        response.json()
            .then(function (response) {
                if (response.status === 400) {
                    // window.location.href = "/kilk";
                } else if (response.status === 403) {
                    // window.location.href = "/link";
                } else {
                    let arrayReversed = response.articles.reverse();
                    if (!arrayReversed) {
                        document.querySelector('.container').innerHTML = "attent !";
                    }
                    generateArticle(response.articles);
                }
            })
    })
    .catch(err => {
        console.log(err);
    })





