var tentativi=3
function mostraMessaggio()
{
    messaggio=confirm("Vuoi davvero tornare alla home? Tutti i progressi andranno persi")
    if(messaggio==true){
        location.href="http://localhost:63342/GuessTheWord/Index/index.html?_ijt=7b57a8tekicc8e6vr3irjusvh5"
    }
}
function suggerimenti() {
    alert("Si occupa della selezione degli stracci")//suggerimenti per indovinare la parola
}
function controlloRisposta()
{
    let risposta_esatta="cenciaiolo"//risposta corretta
    let display=document.getElementById("risposta_utente")//vado ad estrarre il contenuto della variabile risposta utente
    let displayValue=display.value
    if(displayValue.toLowerCase()===risposta_esatta)//verifico se la risposta utente è uguale a risposta esatta
    {
        alert("Risposta esatta")
        alert("Congratulazioni hai terminato tutti i livelli")
        location.href="http://localhost:63342/GuessTheWord/Index/index.html?_ijt=o0j11c6srilr5f0kt9n3o0317e"
    }else{
        tentativi--
        alert("Risposta errata...Ti restano: " +tentativi+ " tentativi")
        display.value=""
        if(tentativi==0)
        {
            alert("Hai perso")
            location.href="http://localhost:63342/GuessTheWord/Index/index.html?_ijt=si66pr5k6m9d6t81pqbmqu0b3o"
        }
    }
}
function ricomincia()
{
    confirm("Stai per ricominciare la partita...Vuoi continuare?")
    location.href="http://localhost:63342/GuessTheWord/Liv1/Livello1.html?_ijt=tcobftjgvaa3um95jjq4qq6jgm"
}