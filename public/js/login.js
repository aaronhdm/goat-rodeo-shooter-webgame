const loginFormHandler = async (event) => {
    event.preventDefault();

    const userName = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password').value.trim();


    if (userName && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
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

    const email = document.querySelector('emailSignup').value.trim();
    const username = document.querySelector('userNameSignup').value.trim();
    const password = document.querySelector('passwordSignup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
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


