let links = document.querySelector('#links');
let user_info = document.querySelector('#user_info');
let user = document.querySelector('#user');
let username = localStorage.getItem('username');
let logout = document.querySelector('#logout');



if (username) {
    links.remove();
    user_info.style.display = 'flex';
    user.innerHTML = username;
} 

logout.addEventListener('click', function(e) {
    e.preventDefault();
    setTimeout(() => {
        window.location = 'register.html';
       }, 2000);

}, 1500)
