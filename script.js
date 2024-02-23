
function myFunction(){
    document.getElementById("kategorier").classList.toggle("show");
}

window.addEventListener('click', function(event){
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
})

function cartFunction(){
    document.getElementById("cart").classList.toggle
}

window.addEventListener('click', function(event){
    if (!event.target.matches('.knapp1')){
        var dropdowns = document.getElementsByClassName("varukorg");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }

    }

})



  
    