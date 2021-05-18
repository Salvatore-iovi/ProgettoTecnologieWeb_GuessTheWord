function mostraMessaggio()
{
    messaggio=confirm("vuoi davvero tornare alla home? Tutti i progressi andranno persi")
    if(messaggio==true){
        window.history.go(-1)
    }
}
function suggerimenti() {
    alert("Indaga sui crimini")
}
function controlloRisposta()
{
    let risposta_esatta="investigatore"
    let display=document.getElementById("risposta_utente")
    let displayValue=display.value
    if(displayValue===risposta_esatta)
    {
        alert("Risposta esatta")
        location.href="http://localhost:63342/GuessTheWord/Liv2/Livello2.html?_ijt=n2anun9vr4ue7j1g0vomjdtnf9"
    }else{
        alert("Risposta errata...Riprova")
        display.value=""
    }
}

