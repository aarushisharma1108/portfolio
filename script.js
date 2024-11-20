let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Backend Developer','Web Developer','UI/UX Designer'],
    typeSpeed:90,
    backSpeed:100,
    backDelay:1200,
    loop:true
})
function generateMessage() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `
      *New message from ${fullName}:*
      
      *Email:* ${email}
      *Phone:* ${phone}
      *Subject:* ${subject}
      
      *Message:*
      ${message}
    `;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "919915778944"; // Replace with your actual phone number
    document.getElementById('contactForm').action = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return true; // Continue with form submission
}
