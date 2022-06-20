function login()
{
  var helo=document.getElementById('god').value;
  var bye=document.getElementById('password').value;
  
  if (helo=="Sashi singh" && bye=="Sashi3445")
  
  {
    window.alert("YOU ARE WELCOME")
     location.assign('https://sashi-singh.github.io/sashi-singh-site.com/')
  }
  else if (helo=="Sashi singh" && bye=="") 
  
  {
    window.alert("please type the password below to proceed")
  }
  
else
{
  window.alert("SORRY, YOU ARE NOT ELLIGEBLE");
}


}
