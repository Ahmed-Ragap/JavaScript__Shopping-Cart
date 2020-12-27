let UserName = document.querySelector('#username');
let Email = document.querySelector('#email');
let Password = document.querySelector('#password');
let SignUP = document.querySelector('#signUp');
let massage_alert = document.getElementById('massage')

SignUP.addEventListener('click', function (e) {
    e.preventDefault();

    if (UserName.value === '' || Email.value === '' || Password.value === '') {
        massage_alert.innerHTML = 'please fill all data';
        
        massage_alert.setAttribute(
            "style", "color: red; color: red;left:0");
        
        setTimeout(() => {
            massage_alert.style.left =  '-200px';
               },2000)
        } else {
        localStorage.setItem('username', UserName.value);
        localStorage.setItem('email', Email.value);
        localStorage.setItem('password', Password.value);
   
   
   setTimeout(() => {
window.location = 'login.html'
   },2000)
}
})