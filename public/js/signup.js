const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#uname').value.trim();
    const password = document.querySelector('#pw').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-login-bttn')
    .addEventListener('submit', signupFormHandler);
  