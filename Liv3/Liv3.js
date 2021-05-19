function mostraMessaggio()
{
    messaggio=confirm("vuoi davvero tornare alla home? Tutti i progressi andranno persi")
    if(messaggio==true){
        location.href="http://localhost:63342/GuessTheWord/Index/index.html?_ijt=7b57a8tekicc8e6vr3irjusvh5"
    }
}
function suggerimenti() {
    alert("In passato era un vichingo")//suggerimenti per indovinare la parola
}
function controlloRisposta()
{
    let risposta_esatta="scandinavo"//risposta corretta
    let display=document.getElementById("risposta_utente")//vado ad estrarre il contenuto della variabile risposta utente
    let displayValue=display.value
    if(displayValue.toLowerCase()===risposta_esatta)//verifico se la risposta utente è uguale a risposta esatta
    {
        alert("Risposta esatta")
        location.href=""
    }else{
        alert("Risposta errata...Riprova")
        display.value=""
    }
}