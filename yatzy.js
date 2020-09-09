document.addEventListener("DOMContentLoaded", function(e) {
    let name_element = document.getElementById("name");
    let calc_button = document.getElementById("calc");
    calc_button.addEventListener("click", function(event) {
        console.log(name_element.value);
    });
});