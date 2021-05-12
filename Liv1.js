function mostraMessaggio()
{
    messaggio=confirm("vuoi davvero tornare alla home tutti i progressi andranno persi")
    if(messaggio==true){
        window.history.go(-1)
    }
}