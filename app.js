// SideNav Code

function openSideMenu() {
    document.getElementById('side-nav').style.width = '250px';
}
function closeSideMenu() {
    document.getElementById('side-nav').style.width = '0px';
}

// Accordian Tab Code
var accordians = document.getElementsByClassName("accordian");

for (var i = 0; i < accordians.length; i++) {
    accordians[i].onclick = function(){
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            //accordian is open, it needs to be closed
            content.style.maxHeight = null;
        } else{
            //accordian is closed
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
    
}

//Modal Code
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];


modalBtn.addEventListener('click', openModal);
    function openModal() {
        modal.style.display = 'block';
    }

closeBtn.addEventListener('click', closeModal);
    function closeModal() {
        modal.style.display = 'none';
    }

window.addEventListener('click', outsideClick);
    function outsideClick(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    }
