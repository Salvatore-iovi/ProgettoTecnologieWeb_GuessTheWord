var tentativi=3
function controlloRisposta()
{
    let risposta_esatta="cenciaiolo"//risposta corretta
    let display=document.getElementById("risposta_utente")//vado ad estrarre il contenuto della variabile risposta utente
    let displayValue=display.value
    if(displayValue.toLowerCase()===risposta_esatta)//verifico se la risposta utente è uguale a risposta esatta
    {
        alert("Risposta esatta")
        location.href="http://localhost:63342/GuessTheWord/Liv10/Livello10.html?_ijt=tu36v0f61vk4hktag1cmqoobt5"
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
function openSuggerimenti()
{
    document.getElementById("myForm").style.display="block"

}
function closeSuggerimenti()
{
    document.getElementById("myForm").style.display="none"
}
function pressOk()
{
    location.href="http://localhost:63342/GuessTheWord/Index/index.html?_ijt=86v8kjac2fhh3m9r185tn6kg5f"
}
function openHome()
{
    document.getElementById("myhomepopup").style.display="block"
}
function closeHome()
{
    document.getElementById("myhomepopup").style.display="none"
}
function openRicomincia()
{
    document.getElementById("myricominciapopup").style.display="block"
}
function closeRicomincia()
{
    document.getElementById("myricominciapopup").style.display="none"
}
function pressOkRicomincia()
{
    location.href="http://localhost:63342/GuessTheWord/Liv1/Livello1.html?_ijt=jum6d1m4tuv1uvu7tlrli39599"
}