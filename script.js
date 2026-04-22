var btn=document.getElementById("btn")
btn.onclick=function(){
    alert("Message sent successfully!")
};
var i=document.getElementById("icon.linkedin")
i.onclick=function(){
    window.open("https://www.linkedin.com/in/nirmani-waduressa-86b95a242", "_blank")
};
var blogbtn=document.getElementById("view-blog-btn")
blogbtn.onclick=function(){
    window.open("https://medium.com/@nirmaniakalanka129/disneys-principles-of-animation-d1085ebddd12", "_blank")
};
var menuIcon=document.getElementById("menu-icon")
var navLinks=document.getElementById("nav-links")
menuIcon.onclick=function(){
    navLinks.classList.toggle("active")
};
var visitbtn=document.getElementById("visit-github-btn")
visitbtn.onclick=function(){
    window.open("https://github.com/nirmaniakalanka129-ux", "_blank")
};
var igithub=document.getElementById("icon.github")
igithub.onclick=function(){
    window.open("https://github.com/nirmaniakalanka129-ux", "_blank")
};  
var name = document.getElementById("name").value.trim();
 var email = document.getElementById("email").value.trim();
 var message = document.getElementById("message").value.trim();

 var nameError = document.getElementById("nameError");
 var emailError = document.getElementById("emailError");
 var messageError = document.getElementById("messageError");
 var successMsg = document.getElementById("successMsg");

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }
    const emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = " Email is required";
        isValid = false;
    }
    else if (!email.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email address";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        isValid = false;
    }
    if (isValid) {
        successMsg.textContent = "Your Message was recorded!";
        document.getElementById("contactForm").reset();
    }
});


                                                        
