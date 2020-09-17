document.addEventListener("DOMContentLoaded", function (e) {
    let player1Sum = document.getElementById("player1_sum");
    let player1Bonus = document.getElementById("player1_bonus");
    let diceHTMLCol = document.querySelectorAll("td.dice");
    let checkboxHTMLCol = document.querySelectorAll("input.check");
    let throwDiceBtn = document.getElementById("throwDiceButton");
    let throwsLeft = document.getElementById("throwsLeft");



    document.addEventListener('change', function (e) {
        let otsHTMLCol = document.querySelectorAll("input.calc"); //gör en NodeList av alla <input> med class="calc"
        let otsElArr = Array.from(otsHTMLCol); //gör en array av elementen i NodeList
        let otsVal = otsElArr.map((element, index, array) => {
            return parseInt(element.value); //gör en array av värden ur elementen
        });

        //summerar värdena i otsSum
        let otsSum = otsVal.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue;
        }, 0);
        player1Sum.value = otsSum;

        //ger bonus om summan är 63 eller högre.
        if (otsSum >= 63) {
            player1Bonus.value = 50;
        } else {
            player1Bonus.value = 0;
        };
    });

    //basic tärningsfunktion.
    function throwDice() {
        let dieSum = Math.floor(Math.random() * 6) + 1;
        return dieSum;
    };

    //array med tärnings-SVG
    const dieSVG = ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.01em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 960 959"><path d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-53 37.5-90T128 0h704q53 0 90.5 37.5T960 127v704q0 53-37.5 90.5T832 959zM480 383q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5z" fill="black"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.01em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 960 959"><path d="M832 959H128q-53 0-90.5-37.5T0 831V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v703q0 53-37.5 90.5T832 959zM224 128q-40 0-68 28t-28 67.5t28 67.5t68 28t68-28t28-67.5t-28-67.5t-68-28zm512 511q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28z" fill="black"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.01em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 960 959"><path d="M832 959H128q-53 0-90.5-37.5T0 831V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v703q0 53-37.5 90.5T832 959zM224 128q-40 0-68 28t-28 67.5t28 67.5t68 28t68-28t28-67.5t-28-67.5t-68-28zm256 255q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm256 256q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28z" fill="black"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.01em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 960 959"><path d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-52 37.5-89.5T128 0h704q53 0 90.5 37t37.5 90v704q0 53-37.5 90.5T832 959zM224 127q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28zm512-512q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28z" fill="black"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.01em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 960 959"><path d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-52 37.5-89.5T128 0h704q53 0 90.5 37t37.5 90v704q0 53-37.5 90.5T832 959zM224 127q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28zm256-256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm256-256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28z" fill="black"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1.01em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 960 959"><path d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-53 37.5-90T128 0h704q53 0 90.5 37t37.5 90v704q0 53-37.5 90.5T832 959zM224 831q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28zm0-704q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm0 256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm512-256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5zm-96 352.5q0 39.5 28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5t-68 28.5t-28 68zM736 639q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28z" fill="black"/></svg>'];

    //Sätter antalet tärningsslag.
    throwsLeft.innerHTML = 3;

    //lyssnar efter eventet 'click' på kastknappen
    throwDiceBtn.addEventListener('click', function (e) {
        console.log(checkboxHTMLCol);
        throwsLeft.innerHTML--;

        //Räknar ner tärningskast och återställer efter sista kastet.
        if (throwsLeft.innerHTML == -1) {
            console.log("NEXT PLAYER");

            for (let i = 0; i < checkboxHTMLCol.length; i++) {
                checkboxHTMLCol[i].checked = false;
                diceHTMLCol[i].innerHTML = 'X';
            }

            throwsLeft.innerHTML = 3;
        }

        //Slår alla tärningar och visar respektive summa.
        for (let i = 0; i < diceHTMLCol.length; i++) {
            let dieRslt = throwDice();

            if (checkboxHTMLCol[i].checked === false) {
                diceHTMLCol[i].innerHTML = dieSVG[dieRslt - 1];
            };
        };

    });

});