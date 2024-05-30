document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('check');
    const navUl = document.querySelector('nav ul');


    checkBtn.addEventListener('change', function() {
        if (this.checked) {
            navUl.style.left = '0';
        } else {
            navUl.style.left = '-100%';
        }
    });
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }
    
});
