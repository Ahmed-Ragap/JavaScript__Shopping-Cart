let UserName = document.querySelector('#username');
let Password = document.querySelector('#password');
let SignUP = document.querySelector('#signIn');
let GetUser = localStorage.getItem('username');
let GetPass = localStorage.getItem('password');
let massage_alert = document.getElementById('massage')
SignUP.addEventListener('click', function (e) {
    e.preventDefault();

    if (GetUser.value === '' || GetPass.value === '') {
        massage_alert.innerHTML = 'please fill all data';
        massage_alert.style.left =  '0';
      
    } else {
       if (GetUser && GetUser.trim() === UserName.value.trim() && GetPass && GetPass === Password.value.trim() ) 
       {
        massage_alert.innerHTML = 'Successfully Logged in  ';
        massage_alert.setAttribute(
            "style", "color: green; background-color: #eee;left:0");
           setTimeout(() => {
            window.location = 'index.html';
            
           }, 2000);

       }
       else{
        massage_alert.innerHTML = 'wrong user or password';
        massage_alert.setAttribute(
            "style", "color: red; background-color: #eee;left:0");
        setTimeout(() => {
            massage_alert.style.left =  '-200px';
           }, 2000);
       }
    }
})