function login(){
    var username, password;

    username = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if(username !="" && password !=""){
        window.location.href="/dashboard";
    }
}