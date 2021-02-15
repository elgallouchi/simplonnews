// VERIFICATION du token

let tokenStorage = sessionStorage.getItem('token');
if (!tokenStorage) {
    window.location.href = "/index.html"
}

function generateAside(asideView) {
    let newAside = document.querySelector("aside");
    let outputAside = '';
    
    asideView.forEach(article => {
        outputAside += `
        <a href="./article.html?id=${article.id}"><img id="asideImg" src="${article.img}" alt="${article.title}"></a>
        <a href="./article.html?id=${article.id}"><h4 id="asideTitle">${article.title}</h4></a>
        `;
    });
    newAside.innerHTML = outputAside;
}

function generateArticle(artArray) {
    
    var url = window.location.search;
    var splitUrl = url.split("=");
    var idChoix = parseInt(splitUrl[1]);
 
    var indexChoix = artArray.map(function(x) {return x.id; }).indexOf(idChoix);
    var objChoisi = artArray[indexChoix];
    
    // console.log(idChoix);
    // console.log(indexChoix);
    // console.log(objChoisi);

    var articleTitle = document.getElementById("articleTitle");
    var articleResume = document.getElementById("articleResume");
    var articleText = document.getElementById("articleText");
    var articleAuthor = document.getElementById("articleAuthor");
    var articleImg = document.querySelector("article > div");

    articleTitle.textContent = objChoisi.title;
    articleResume.textContent = objChoisi.resume; 
    articleImg.innerHTML = `<img src=${objChoisi.img} alt=${objChoisi.title}>`;
    articleText.textContent = objChoisi.content;
    articleAuthor.textContent = objChoisi.author;
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
                    generateAside(response.articles);
                }
            })
    })
    .catch(err => {
        console.log(err);
    })
