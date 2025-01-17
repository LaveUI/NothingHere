
document.querySelector('.login-form').addEventListener('submit', function (e){
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    if(username === 'hello' && password==='world'){
        alert('Login Successful! Reaching to our Website...');
        window.location.href='index.html';
    } else{
        alert('Invalid credentials. Please Try again!!!');
    }
});


