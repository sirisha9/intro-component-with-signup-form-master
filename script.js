const first = document.getElementById("first").value;
const lastName = document.querySelector("#last");
const email = document.getElementById("email").value;
const password = document.querySelector("#pwd");
const submitBtn = document.querySelector("#submit");
const firstError = document.querySelector("#firstError");
const lastError = document.querySelector("#lastError");
const emailError = document.querySelector("#emailError");
const pwdError = document.querySelector("#pwdError");

submitBtn.addEventListener("click",()=>{
    if(first.value == "" ||email.value == ""|| lastName.value == ""||password.value ==""){
       firstError.innerHTML = "First Name cannot be empty";
       document.getElementById("first").style.border = '1px solid red';
       firstError.style.fontStyle = 'italic';
       
       emailError.innerHTML = "Email is required";
       emailError.style.fontStyle = 'italic';
       document.getElementById("email").style.border = '1px solid red';
        if(validate(email)){
            emailError.innerHTML = ''
        }else{
            emailError.innerHTML = 'valid email required';
        }

       lastError.innerHTML = "Last Name cannot be empty";
       lastError.style.fontStyle = 'italic';
       document.getElementById("last").style.border = '1px solid red';

       
       pwdError.innerHTML ="Password cannot be empty";
       pwdError.style.fontStyle = 'italic';
       document.getElementById("pwd").style.border = '1px solid red';
       submitBtn.disabled = true;
    }
    
   function validate(email){
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
   }

})

