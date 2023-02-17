const createAccount = document.querySelector('#createAccount');

createAccount.addEventListener('click', () =>{
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    console.log(password.value);
    if(password.value != confirmPassword.value){
        password.style.cssText = "border: 2px solid red";
        confirmPassword.style.cssText = "border: 2px solid red";
        alert("Passwords do not match. Try again");
        
    }
    else{
        password.style.cssText = "border: 2px solid green";
        confirmPassword.style.cssText = "border: 2px solid green";
        alert("Account created successfully");
    }

});




