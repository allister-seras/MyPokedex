console.log("hello");
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  console.log("rendered")
  const userName = document.querySelector('#uname').value.trim();
  const password = document.querySelector('#pw').value.trim();

  if (userName && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ name: userName, password: password }),
      headers: { 'Content-Type': 'application/json' }
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
  .querySelector(".login-backbtn")
  .addEventListener('click', () => document.location.replace("/"));

document
  .querySelector('.login-login-bttn')
  .addEventListener('click', loginFormHandler);

