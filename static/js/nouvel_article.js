// get token from localstorage
let tokenLocal = sessionStorage.getItem("token");

function generateSelectHtml() {
    let selectOption = document.querySelector('select[name=categorie]');
    console.log(selectOption);
}

generateSelectHtml()

fetch("https://simplonews.brianboudrioux.fr/categories", {
    method: "GET",
    headers: {
        "Authorization": "Bearer " + token.token,
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
                    console.log(response);
                    generateArticle(response.articles);
                }
            })
    })
    .catch(err => {
        console.log(err);
    })