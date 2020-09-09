document.addEventListener("DOMContentLoaded", function(e) {
    let name_element = document.getElementById("name");
    let calc_button = document.getElementById("calc");
    let calc_tds = document.querySelectorAll('input[class="calc"]');
    

    //det här funkar bara med en spelare

    calc_button.addEventListener("click", function(event) {
        
        let total = 0;

        for (let i = 0; i < calc_tds.length; i++){
            total += (calc_tds[i].value) * (i + 1);
        }
        console.log(total)
    });
});
