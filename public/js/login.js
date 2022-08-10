var base_url = window.location.origin;
var gameURL = base_url + "/game";

const loginFormHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#userName').value.trim();
    const passWord = document.querySelector('#password').value.trim();
    console.log(userName);


    if (userName && passWord) {
        let username = userName;
        let password = passWord;
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
      let theResponse = await response.json();

        if (response.ok) {

            localStorage.clear();
            // document.location.replace('/');
            localStorage.setItem('username', username);
            localStorage.setItem('user_id', theResponse.userData.id);

            alert("I know it doesn't look like it, but you're logged in now. Coolcoolcool.");
           
   



        } else {
            alert('Failed to log in')
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    let username = document.getElementById('userNameSignup').value;
    let password = document.getElementById('passwordSignup').value;

    if (username && password) {
        const response = await fetch('/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {

        } else {
            alert('Failed to sign up.');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);