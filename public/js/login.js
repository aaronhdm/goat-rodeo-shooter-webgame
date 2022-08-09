const loginFormHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();


    if (userName && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ userName, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in')
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    let email = document.getElementById('emailSignup').value;
    let username = document.getElementById('userNameSignup').value;
    let password = document.getElementById('passwordSignup').value;

    if (username && email && password) {
        const response = await fetch('/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
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


