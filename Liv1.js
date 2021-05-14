function mostraMessaggio()
{
    messaggio=confirm("vuoi davvero tornare alla home? Tutti i progressi andranno persi")
    if(messaggio==true){
        window.history.go(-1)
    }
}
function suggerimenti() {
    confirm("Qui ci sono i suggerimenti")
}