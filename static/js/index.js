// SWITCH page connexion à page inscription

let boutonInscription = document.getElementById('inscription')
let boxRegister = document.querySelector('.container-form-register')
let boxConnexion = document.querySelector('.container-form-connexion')
let boutonConnexion = document.getElementById('connexion')

boutonInscription.addEventListener('click', () => {
    boxConnexion.style.display = "none";
    boxRegister.style.display = "flex";
})

boutonConnexion.addEventListener('click', () => {
    boxRegister.style.display = "none";
    boxConnexion.style.display = "flex";
})

// AUTHENTIFICATION user


let inputSubmit = document.querySelector("[type=submit]");
console.log(inputSubmit);

inputSubmit.addEventListener('click', function(e) {
    let inputEmail = document.querySelector("[type=email]").value;
    let inputPassword = document.querySelector("[type=password]").value;    
    connexion(inputEmail, inputPassword)
})

function connexion(email, password) {

let fetch_config = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "email": email,
        "password": password,
    })
}

fetch("https://simplonews.brianboudrioux.fr/users/login", fetch_config)
.then(function (response) {
        response.json()
        .then(function(data) {
            if (response.status == 400) {
                console.log('data');
            }
            else {
                console.log(data);
                console.log('OK')
                window.location.href = "./static/views/home.html"
            }  
        })
        .catch(function(error){
            console.log(error)
        })

})
.catch(function (errors) {

})

}

// INSCRIPTION New user

let fetch_config2 = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "firstName": "toto",
        "lastName": "tata",
        "email": "hellloooow@test.fr",
        "password": "unsupermotdepasse",
    })
}

fetch("https://simplonews.brianboudrioux.fr/users", fetch_config2)
.then(function (response) {
    
        console.log('success');
        response.json()
        .then(function(data) {
            if (response.status == 400) {
                console.log('data');
            }
            else {
                console.log(data);
            }  
        })
        .catch(function(error){
            console.log(error)
        })
    
})
.catch(function (errors) {

})