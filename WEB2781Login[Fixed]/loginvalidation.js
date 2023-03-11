var attempt = 3 ;  
function validation() 
{   let namestyle = document.getElementById("adminText");  
    let passstyle = document.getElementById("adminPassword");
    let errorstyle = document.getElementById("message");
    let errorp = document.getElementById("pmessage");
    let name = document.getElementById("adminText").value ;
    let password = document.getElementById("adminPassword").value ;
     
    if (name== "admin" && password== "123")
    {
        alert("Login Succesfully")
        window.open("/Landing Page WPR281/INSKT_Landing_page.html")
        namestyle.style.border = '1px solid green';
        namestyle.style.backgroundColor = '#befaa256';
        passstyle.style.border = '1px solid green';
        passstyle.style.backgroundColor = '#befaa256';
        return false ; 
    }
    else 
    {
        document.getElementById("adminText").value = "" ;
        document.getElementById("adminPassword").value = "" ;
        namestyle.style.border = '1px solid #cc0033';
        namestyle.style.backgroundColor = '#fce4e4';
        passstyle.style.border = '1px solid #cc0033';
        passstyle.style.backgroundColor = '#fce4e4';
        errorstyle.style.display = 'inline';
        errorp.style.display = 'inline';
        attempt-- ; 
        alert("You have "+attempt+" attempts left");
        if(attempt == 0)
        {
            document.getElementById("adminText").disabled = true ; 

            document.getElementById("adminPassword").disabled = true ; 
            
            document.getElementById("btnLogin").disabled = true ; 
            return false ; 
        }

    }
    
}


