// SWITCH page connexion à page inscription

let boutonSInscrire = document.getElementById('inscription')
let boxRegister = document.querySelector('.container-form-register')
let boxConnexion = document.querySelector('.container-form-connexion')
let boutonConnexion = document.getElementById('connexion')

boutonSInscrire.addEventListener('click', () => {
    boxConnexion.style.display = "none";
    boxRegister.style.display = "flex";
})

boutonConnexion.addEventListener('click', () => {
    boxRegister.style.display = "none";
    boxConnexion.style.display = "flex";
})

// AUTHENTIFICATION user


let inputSubmit = document.querySelector("[name=valider-connexion]");


inputSubmit.addEventListener('click', function() {
    let inputEmail = document.querySelector("[name=email-connexion]").value;
    let inputPassword = document.querySelector("[name=password-connexion]").value;    
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
                alert('user non identifié')
            }
            else {
                console.log(data);
                console.log('OK')
                // window.location.href = "./static/views/home.html"
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

let boutonInscription = document.querySelector("[name=bouton-inscription]")

boutonInscription.addEventListener('click', function() {
    let prenomInscription = document.querySelector("[name=prenom-inscription]").value
    let nomInscription = document.querySelector("[name=nom-inscription]").value
    let emailInscription = document.querySelector("[name=email-inscription]").value
    let passwordInscription = document.querySelector("[name=password-inscription]").value
   
    inscriptionNewUser(prenomInscription, nomInscription, emailInscription, passwordInscription)
})

function inscriptionNewUser(prenom, nom, email, password) {
    let fetch_config2 = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "firstName": prenom,
            "lastName": nom,
            "email": email,
            "password": password,
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
                    console.log("utilisateur inscrit")
                    boxRegister.style.display = "none";
                    boxConnexion.style.display = "flex";
                }  
            })
            .catch(function(error){
                console.log(error)
            })
        
    })
    .catch(function (errors) {
    
    })
}






