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
document.querySelectorAll("nav-links").forEach(n => n. addEventListener("click", () => {
    navLinks.classlist.remove("active");
}));



var visitbtn=document.getElementById("visit-github-btn")
visitbtn.onclick=function(){
    window.open("https://github.com/nirmaniakalanka129-ux", "_blank")
};
var igithub=document.getElementById("icon.github")
igithub.onclick=function(){
    window.open("https://github.com/nirmaniakalanka129-ux", "_blank")
};  
