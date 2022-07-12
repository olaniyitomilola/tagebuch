let btn_login = document.getElementById('btn_login');
let username = document.getElementById('username');
let password = document.getElementById('password');
let errorlogger = document.getElementById('errorlogger');
errorlogger.style.color = 'red';
errorlogger.style.fontSize = '0.7em';

btn_login.addEventListener('click', function(e){
    e.preventDefault;
    if(username.value.trim() == ''){
        console.log(username.value)
        errorlogger.textContent = "*kindly enter your username"
    } else{
        if(password.value.trim() === ''){
            errorlogger.textContent = "*kindly enter your password"
        } else{
            errorlogger.textContent = "login success"
            errorlogger.style.color = 'green';


        }
    }
})

username.addEventListener('focus',function(e){
    errorlogger.textContent = '';
})
password.addEventListener('focus',function(e){
    errorlogger.textContent = '';
})