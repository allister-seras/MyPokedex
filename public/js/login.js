const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const userName = document.querySelector('#uname').value.trim();
  const password = document.querySelector('#pw').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-login-bttn')
  .addEventListener('submit', loginFormHandler);

