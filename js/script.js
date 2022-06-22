const form = document.getElementById("form"); 
const username = document.getElementById("username"); 
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
// console.log(name);

// Event start
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    validate();
})

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}
// Difine the validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    // name validate
    if(usernameVal === ""){
        setErrorMsg(username, "User name can not be blank?")
    }
    else if(usernameVal.length < 3){
        setErrorMsg(username, "User name min 3 char")
    }
    else{
        setSuccessMsg(username)
    }
    // Email validate
    if(emailVal === ""){
        setErrorMsg(email, "Email can not be blank?")
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, "Not a valid email")
    }
    else{
        setSuccessMsg(email)
    }
    // Phone validate
    if(phoneVal === ""){
        setErrorMsg(phone, "Phone can not be blank?")
    }
    else if(phoneVal.length !== 11){
        setErrorMsg(phone, "Not a valid Number")
    }
    else{
        setSuccessMsg(phone)
    }
}

function setErrorMsg(input, errorMassege){
    const formFloating = input.parentElement;
    const span = formFloating.querySelector("span");
    formFloating.className = "form-floating error mb-3"
    span.innerText = errorMassege;
}
function setSuccessMsg(input){
    const formFloating = input.parentElement;
    formFloating.className = "form-floating success mb-3"
}














let sAlert = document.querySelector("#sAlert")
sAlert.addEventListener("click", function(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
})

