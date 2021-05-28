var nomeutente
function openUsernamePopup()
{
    document.getElementById("myusernamepopup").style.display="block"
}
function closeUsernamePopup()
{
    document.getElementById("myusernamepopup").style.display="none"
}
function pressOkUsername()
{
    let  display=document.getElementById("username")
     nomeutente=display.value
    localStorage.setItem("username",nomeutente)
    if(nomeutente==='' || nomeutente==="" || nomeutente===" ")
    {
        alert("Si prega di inserire un username valido")
    }else{
        location.href="../Liv1/Livello1.html"
        document.getElementById("username").innerHTML=localStorage.getItem("username")
    }
}