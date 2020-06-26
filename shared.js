var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for(var i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click',function(){
        // modal.style.display = 'block';
        // modal.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');

    });
}

backdrop.addEventListener('click', function(){
    mobileNav.classList.remove("open");
    closeModal();  
});


if(modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);   
}


function closeModal(){
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
   backdrop.classList.remove("open");
}

toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

});