const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () =>{
    const blurHeader = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*Email Js */
const constactForm = document.getElementById('contact--form'),
      contactMessage = document.getElementById('contact--message')

const sendEmail = (e) =>{
    e.preventDefault()
    //serviceID - templateID #form - publickey 
    emailjs.sendForm('service_dgiz6ww' , 'template_hr4xfc9', '#contact--form', 'sYJjSBGqq-1ZrXJaJ')
     .then(()=>{
        //show sent message 
        contactMessage.textContent = 'message sent successfully ✔'

        //Remove message after five seconds 
        setTimeout (() =>{
            contactMessage.textContent = ''
        }, 5000)

        //clear input fields
        constactForm.reset()

     }, ()=>{
         //show error message 
        contactMessage.textContent = 'message not sent(service error)😥'

    }) 
     //Remove message after five seconds 
     setTimeout (() =>{
        contactMessage.textContent = ''
    }, 5000)
    
     //clear input fields
     constactForm.reset()
}
   
constactForm.addEventListener('submit' , sendEmail)  

/*show scroll up*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);



/*- SCROLL SECTIONS ACTIVE LINK -*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


