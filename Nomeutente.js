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
        document.getElementById("myusernamepopup").style.display = "none"
       openUsernameErrorPopup()
    }else{
        location.href="../Liv1/Livello1.html"
        document.getElementById("username").innerHTML=localStorage.getItem("username")
    }
}
function openUsernameErrorPopup()
{
    document.getElementById("myusernameerrorpopup").style.display = "block"
}
function closeUsernameErrorPopup()
{
    document.getElementById("myusernameerrorpopup").style.display="none"
    document.getElementById("myusernamepopup").style.display="block"
}