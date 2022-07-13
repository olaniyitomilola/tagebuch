let username = document.getElementById('username');
let password = document.getElementById('password');
let errorlogger = document.getElementById('errorlogger');               
function login (){
    let btn_login = document.getElementById('btn_login')
        
        errorlogger.style.color = 'red';
        errorlogger.style.fontSize = '0.7em';
        if(username.value.trim() == ''){
            errorlogger.textContent = "*kindly enter your username"
        } else{
            if(password.value.trim() === ''){
                errorlogger.textContent = "*kindly enter your password"
            } else{
                location.href = 'dashboard.html'

            }
        }
 
}

//

function removeError(){
    errorlogger.textContent = '';
}

//navselector
const actives = document.querySelectorAll('.nav');


(function selectActive(){

    actives.forEach((active) => {
        active.addEventListener('click', () => {
            removeActiveClasses();
            active.classList.add('active');
        });
    });

    function removeActiveClasses() {
    actives.forEach((active) => {
        active.classList.remove('active');
    });
    }
})()
