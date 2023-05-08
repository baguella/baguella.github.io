function kollaString(tpersonnummer){
    let length_ok = false;

    if(tpersonnummer.length === 10){
        length_ok = true;
    }
    return length_ok;
}
//pnrToNumber------------------------------------------------------------------
function pnrToNumber(tpersonnr){
    //casta string till array med chars
    const arr_pnr = tpersonnr.split('');

    //Funktionell programmering med en arrow funktion
    const newPnrArr = arr_pnr.map((textsiffra) => {
        const num_siffra = parseInt(textsiffra);
        return num_siffra;
    })

    return newPnrArr;
}




function checkButtClick() {
    //console.log("click");

    let textfelt = document.getElementById("prsnr_input").value;
    let psvar = document.getElementById("svar");
    let len_ok = kollaString(textfelt);

    if (len_ok){

        const arr_pnr_siffror = pnrToNumber(textfelt);

        console.log("ARRAY = " + JSON.stringify(arr_pnr_siffror));


    }
    else {
        alert("OBS, det måste vara siffror!")


    }


    //console.log("textfelt= " + textfelt);

}

function addSiffrorAndCheck(t_multiplicerade_siffror){

    const arr_siffror = t_multiplicerade_siffror.split('');
    let summa = 0;
    let kontrollsiffra = 0;
    let subractform = 0;

    for (i=0; i< t_multiplicerade_siffror; i++){
        summa 0 = Number(arr_siffror[i]);
    }

    if (summa %10 !== 0){
        substractfrom = Math.floor(summa/10)*10;
        substractfrom = substractfrom + 10;
        kontrollsiffra = substractfrom - summa;

    }

    return kontrollsiffra;
}
