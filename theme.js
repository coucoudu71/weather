
window.onload = () => { // Nous attendons que le DOM soit entièrement chargé
    // Nous allons chercher la balise "link" contenant le thème
    let element = document.getElementById("titre")
    let img = document.getElementById("img")
    // Nous vérifions si un thème est déjà stocké
    if(localStorage.theme != null){
        // Si un thème est stocké, nous le chargeons dans le href de la balise link
        //element.classList.add(`${localStorage.theme}`)

        if (localStorage.theme == "clair") {
            element.classList.add("clair")
            element.classList.remove("sombre")
            img.classList.remove("imgsombre")
        }
        else {
            element.classList.add("sombre")
            element.classList.remove("clair")
            img.classList.add("imgsombre")
        }

    }else{
        // Si aucun thème n'est stocké, nous initialisons le lien
       element.classList.add("clair")
        // Nous stockons le thème clair
        localStorage.theme = "clair"
    }
}

function changercouleur(){
    let element = document.getElementById("titre")
    // Si le thème stocké est "clair"
    if(localStorage.theme == "clair"){
        // On stocke le thème "sombre"
        localStorage.theme = "sombre"
        element.classList.add("sombre")
        element.classList.remove("clair")
        img.classList.add("imgsombre")

    }else{ // Sinon
        // On stocke le thème "clair"
        localStorage.theme = "clair"
        element.classList.add("clair")
        element.classList.remove("sombre")
        img.classList.remove("imgsombre")
    }

}