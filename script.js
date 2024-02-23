
function myFunction(){
    document.getElementById("kategorier").classList.toggles("show");
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
    document.getElementById("cart").classList.toggle("show");
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

const ul = document.querySelector("#cart-items");

function add_to_cart(namn, pris){
    console.log("namn: " + namn + "\npris: " + pris)
    let li = document.createElement("li");
    li.textContent= namn + " Pris: " + pris + "kr";
    let removeBtn = document.createElement("#knapp3");   
    removeBtn.textContent = "Ta bort";
    removeBtn.addEventListener("click", function(){
        remove_from_cart(li);

    });
    li.appendChild(removeBtn);
    ul.appendChild(li);
    count++;

    let fält=[];
    let json = window.localStorage.getItem("product");
    if (json){
        fält = JSON.parse(json)
    }

    let obj = {
        namn: namn,
        pris: pris,
    }
    fält.push(obj);
    json = JSON.stringify(fält);
    window.localStorage.setItem("product",json);
}



  
    