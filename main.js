/*function getChatGPTResponse(message) {
    // Make a request to the ChatGPT API.
    const response = fetch(  https://chatgpt.com/chat?q=${message}   );
  
    // Get the response body.
    const body = await response.json();
  
    // Return the response text.
    return body.text;
  }
  
  // Listen for the form submit event.
  document.querySelector("form").addEventListener("submit", async (event) => {
    // Prevent the form from submitting.
    event.preventDefault();
  
    // Get the message from the form.
    const message = document.querySelector("input[name=message]").value;
  
    // Get the response from ChatGPT.
    const response = await getChatGPTResponse(message);
  
    // Display the response in the response div.
    document.querySelector("#response").innerHTML = response;
  });
  */
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  
  toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
  })