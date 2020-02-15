function afficher(n) {
	if(n===0) {
		document.getElementById("proposerArticle").style.display = "block";
      }
    else if(n===1) {
		document.getElementById("contact").style.display = "block";
      }
}

function fermer(n) {
    if(n===0) {     	
      document.getElementById("proposerArticle").style.display = "none";
    }
    else if(n===1) {
		  document.getElementById("contact").style.display = "none";
    }
}

function afficherMenu() {
	document.getElementById("menu").style.width = "350px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function fermerMenu() {
  document.getElementById("menu").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
} 

function date() {
    var d = new Date();
    document.getElementById("date").innerHTML = d;
}

function validP() {
    var nom = document.getElementById("Nom").value;
    var prenom = document.getElementById("Prenom").value;
    var email = document.getElementById("Email").value;
    var tel = document.getElementById("Tel").value;
    var reseauS = document.getElementById("Lien").value;
    var test = true;
    if(nom === "") {
        test = false;
        alert("Veuillez saisir votre nom");
        document.getElementById("Nom").focus();
    }
    else if(prenom === "") {
        test = false;
        alert("Veuillez saisir votre prénom");
        document.getElementById("Prenom").focus();
    }
    else if(email === "") {
        test = false;
        alert("Veuillez saisir votre adresse mail");
        document.getElementById("Email").focus();
    }
    else if(tel === "") {
        test = false;
        alert("Veuillez saisir votre numéro de téléphone");
        document.getElementById("Tel").focus();
    }
    else if(isNaN(tel)) {
        test = false;
        alert("Veuillez saisir un numéro de téléphone valide");
        document.getElementById("Tel").focus();
    }
    else if(reseauS === "") {
        test = false;
        alert("Veuillez saisir votre réseau social");
        document.getElementById("Lien").focus();
    }
    else {
        alert("Merci !");
    }
    return test;
}

function validC() {
    var nom = document.forms["form_contact"].elements["nom"].value;
    var email = document.forms["form_contact"].elements["email"].value;
    var test = true;
    if(nom === "") {
        test = false;
        alert("Veuillez saisir votre nom"); 
        document.forms["form_contact"].elements["nom"].focus();
    }
    else if(email === "") {
        test = false;
        alert("Veuillez saisir votre adresse mail"); 
        document.forms["form_contact"].elements["email"].focus();
    }

    else {
        alert("Merci !");
    }
    return test;
}




