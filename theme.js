
window.onload = () => { // Nous attendons que le DOM soit entièrement chargé
    
    let element = document.getElementById("titre")
    let img = document.getElementById("img")
    // Nous vérifions si un thème est déjà stocké
    if(localStorage.theme != null){
        

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
        // Si aucun thème n'est stocké, nous initialisons le theme
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
