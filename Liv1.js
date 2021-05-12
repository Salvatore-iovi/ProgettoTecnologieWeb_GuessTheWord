function mostraMessaggio()
{
    var messaggio=confirm("Vuoi davvero ritornare alla home? Tutti i progressi saranno persi")
    if(messaggio==true){
        window.history.back()
    }
}