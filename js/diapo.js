var diapoIndex = 1;
diaporama(diapoIndex);

function imgSuivante(n) {
    diaporama(diapoIndex += n);
}

function diaporama(n) {
    var i;
    var diapo = document.getElementsByClassName("diapo");
    if(n> diapo.length){
        diapoIndex = 1;
    }
    if(n< 1) {
        diapoIndex = diapo.length;
    }
    for(i=0; i<diapo.length; i++) {
        diapo[i].style.display = "none";
    }
    
    diapo[diapoIndex-1].style.display = "block";
}