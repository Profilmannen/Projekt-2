

function myFunction(){
    document.getElementById("kategorier").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.knapp2')){
        var dropdowns = document.getElementsByClassName("ämnen");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }

    }
}

  
    