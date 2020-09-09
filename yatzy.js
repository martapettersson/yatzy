document.addEventListener("DOMContentLoaded", function(e) {
    let name_element = document.getElementById("name");
    let calc_button = document.getElementById("calc");
    let calc_tds = document.querySelectorAll('input[class="calc"]')

    calc_button.addEventListener("click", function(event) {
        let total = 0;
        for(let i = 0; i < calc_tds.length; i++){
            total += (calc_tds[i].value) * (i + 1);
        }
        console.log(total) // skriv ut detta i rutan bredvid summa.
    });

    //behöver en class för varje spelares columner. 
    //skape en funktion som tar in arrayen och räknar ut summan och skriver ut summan bredvid "sum",
    


});

