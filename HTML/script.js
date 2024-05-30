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
});
    document.addEventListener('DOMContentLoaded', function () {
        var popups = document.querySelectorAll('.popuptext');
    
        function togglePopup(popupId) {
            var popup = document.getElementById(popupId);
            popup.classList.toggle("show");
        }
    
        function closeAllPopups() {
            popups.forEach(function(popup) {
                if (popup.classList.contains('show')) {
                    popup.classList.remove('show');
                }
            });
        }
    
        document.querySelectorAll('.popup').forEach(function(popup, index) {
            popup.onclick = function(event) {
                event.stopPropagation();
                togglePopup("myPopup" + (index + 1));
            };
        });
    
        document.addEventListener('click', function(event) {
            var isClickInsidePopup = event.target.closest('.popup');
            if (!isClickInsidePopup) {
                closeAllPopups();
            }
        });
    });
    
    function myFunction(n) {
        var popupId = "myPopup" + n;
        var popup = document.getElementById(popupId);
        popup.classList.toggle("show");
    }
    

