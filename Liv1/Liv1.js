var cont=0 //variabile per verificare se si usano i suggerimenti
var tentativi=3
function controlloRisposta() {
    let risposta_esatta = "investigatore"
    let display = document.getElementById("risposta_utente")
    let displayValue = display.value
    if (displayValue.toLowerCase() === risposta_esatta) {
        openRispostaEsatta()
        assegnaPunteggio()
        assegnaMonete()
        document.getElementById("monete_gioco").innerHTML = monete
    }if(displayValue!==risposta_esatta && displayValue!==""&& displayValue!==' ')
    {
        openRispostaErrata()
        tentativi--
        localStorage.setItem("possibilita",tentativi)
        document.getElementById("tentativi_container").innerHTML=tentativi
        display.value=""
    }
     if(displayValue ===' ' || displayValue === "")
    {
        openCaratteriMancanti()
    }
     if(tentativi===0)
     {
         openPartitaPersa()
     }
}
function openSuggerimenti() {
    cont = 1

    if (monete >= 50) {
        monete = monete - 50
        document.getElementById("myForm").style.display = "block"
        localStorage.setItem("coins", monete)
        document.getElementById("monete_gioco").innerHTML = monete
    } else if (monete < 50) {
        openNoSuggerimenti()
    }
}
    function closeSuggerimenti() {
        document.getElementById("myForm").style.display = "none"
    }

    function pressOk() {
        location.href = "http://localhost:63342/GuessTheWord/Index/index.html?_ijt=86v8kjac2fhh3m9r185tn6kg5f"
    }

    function openHome() {
        document.getElementById("myhomepopup").style.display = "block"
    }

    function closeHome() {
        document.getElementById("myhomepopup").style.display = "none"
    }

    function openRicomincia() {
        document.getElementById("myricominciapopup").style.display = "block"
    }

    function closeRicomincia() {
        document.getElementById("myricominciapopup").style.display = "none"
    }

    function pressOkRicomincia() {
        location.href = "http://localhost:63342/GuessTheWord/Liv1/Livello1.html?_ijt=jum6d1m4tuv1uvu7tlrli39599"
    }

    function assegnaPunteggio() {
        if (cont == 1) {
            punti = punti + 50
            localStorage.setItem("punteggio", punti)
            document.getElementById("punti_container").innerHTML = localStorage.getItem("punteggio")
        } else if (cont == 0) {
            punti = punti + 100
            localStorage.setItem("punteggio", punti)
            document.getElementById("punti_container").innerHTML = localStorage.getItem("punteggio")
        }
    }

   /* function utilizzaMonete() DA VEDERE{
        if (cont == 1) {
            monete = monete - 50
            localStorage.setItem("coins", monete)
            document.getElementById("monete_gico").innerHTML = localStorage.getItem(monete)
        }
        if (monete == 0) {
        }
    }*/

    function assegnaMonete() {
        if (cont == 1) {
            monete = monete + 25
            localStorage.setItem("coins", monete)
            document.getElementById("monete_gioco").innerHTML = localStorage.getItem("coins")
        } else if (cont == 0) {
            monete = monete + 50
            localStorage.setItem("coins", monete)
            document.getElementById("monete_gioco").innerHTML = localStorage.getItem("monete")
        }
    }
    function openRimuoviLettera() {
        document.getElementById("myrimuoviletterapopup").style.display = "block"
    }
    function closeRimuoviLettera() {
        document.getElementById("myrimuoviletterapopup").style.display = "none"
    }
    function pressOkRimuoviLettera() {
        document.getElementById("").disabled = true//DA CONTINUARE
    }
    function openNoSuggerimenti() {
        document.getElementById("mynosuggerimenti").style.display = "block"
    }
    function closeNoSuggerimenti() {
        document.getElementById("mynosuggerimenti").style.display = "none"
    }
    function openRispostaEsatta() {
        document.getElementById("myrispostaesatta").style.display = "block"
    }
    function closeRispostaEsatta() {
        document.getElementById("myrispostaesatta").style.display = "none"
        location.href = "http://localhost:63342/GuessTheWord/Liv2/Livello2.html?_ijt=n2anun9vr4ue7j1g0vomjdtnf9"
    }
    function openRispostaErrata() {
        document.getElementById("myrispostaerrata").style.display = "block"
    }
    function closeRispostaErrata() {
        document.getElementById("myrispostaerrata").style.display = "none"
    }
    function openCaratteriMancanti()
    {
        document.getElementById("mycaratterimancanti").style.display = "block"
    }
    function closeCaratteriMancanti()
    {
        document.getElementById("mycaratterimancanti").style.display = "none"
    }
    function openPartitaPersa()
    {
        document.getElementById("mypartitapersa").style.display = "block"
    }
    function yesPartitaPersa()
    {
        location.href = "http://localhost:63342/GuessTheWord/Liv1/Livello1.html?_ijt=1u1d0gkge0ttvf1l4j6flf4mvg"
    }
    function noPartitaPersa()
    {
        location.href = "http://localhost:63342/GuessTheWord/Index/index.html?_ijt=c6apgdbbfq3podof7b2sd7khu7"
    }