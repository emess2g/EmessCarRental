//  show/hide faq answer

const faq = document.querySelectorAll('.faq');

faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })

        //change icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'fa-solid fa-minus'){
            icon.className = "fa-solid fa-plus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
})


const toggleNav = () => {
     const barIcon = document.getElementsByClassName('.mobileNav');

     if(barIcon.style.display === "block"){
        barIcon.style.display === "none";
     }else{
        barIcon.style.display === "block";
     }


}

