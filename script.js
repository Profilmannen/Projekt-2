function myFunction(){
    document.getElementById("kategorier2").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.knapp')){
        var dropdowns = document.getElementsByClassName("kategorier3");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }

    }
}
  
    