function mostraMessaggio()
{
    messaggio=confirm("vuoi davvero tornare alla home? Tutti i progressi andranno persi")
    if(messaggio==true){
        window.history.go(-1)
    }
}
function suggerimenti() {
    alert("Qui ci sono i suggerimenti")
}
function controlloRisposta(risposta_utente)
{
    let risposta_esatta="cane"
    let display=document.getElementById("risposta_utente")
    var displayValue=display.innerText
    if(displayValue==risposta_esatta)
    {
        alert("Risposta esatta")
    }else{
        alert("Risposta errata...Riprova")
    }
}

