const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("rendered")

    const userName = document.querySelector('#uname').value.trim();
    const userPassword = document.querySelector('#password').value.trim();
    const userEmail = document.querySelector('#email').value.trim();
   
    if (userName && userEmail && userPassword) {
      const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({
          name: userName,
          password: userPassword,
          email: userEmail
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("response okay")
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
  .querySelector(".signup-backbtn")
  .addEventListener("click", () => document.location.replace("/"));

  document
    .querySelector('.signup-signup1')
    .addEventListener('click', signupFormHandler);
  