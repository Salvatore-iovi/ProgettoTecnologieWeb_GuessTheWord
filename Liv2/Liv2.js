function mostraMessaggio()
{
    messaggio=confirm("vuoi davvero tornare alla home? Tutti i progressi andranno persi")
    if(messaggio==true){
        window.history.go(-2)
    }
}
function suggerimenti() {
    alert("Qui andranno i suggerimenti")
}
function controlloRisposta()
{
    let risposta_esatta="parola"
    let display=document.getElementById("risposta_utente")
    let displayValue=display.value
    if(displayValue===risposta_esatta)
    {
        alert("Risposta esatta")
        location.href=""
    }else{
        alert("Risposta errata...Riprova")
        display.value=""
    }
}