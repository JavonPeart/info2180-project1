/* Add your JavaScript to this file */
window.onload = () => {
    let btn = document.querySelector("section.newsletter form button.btn");
    let text = document.querySelector("section.newsletter div.message");
    let email = document.querySelector("section.newsletter form input[type=\"email\"]");

    email.setAttribute("placeholder", "Email address"); /* Match the finished website input placeholder*/

    const varList = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    btn.onclick = (event) => {
        event.preventDefault();
        
        if (email.value.length != 0 && varList.test(email.value.toLowerCase())) {
            text.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
            
        } else {
            text.innerHTML = "Please enter a valid email address."
        }
    }
}