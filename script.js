function calcular (event){
    event.preventDefault();


    let alcoolinput = document.getElementById("alcool").value;
    let gasolinainput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("contentResult");
    let textResult = document.getElementById("resultado");
    
    let gasolinaSpan = document.getElementById("gasolinaSpan");
    let alcoolaSpan = document.getElementById("alcoolSpan");

    let calculo = (alcoolinput / gasolinainput);

    if (calculo < 0.70){
        textResult.innerHTML ="Compensa usar Alcool!";
    }else{
        textResult.innerHTML ="Compensa usar Gasolina!"
    }

    gasolinaSpan.innerHTML ="Gasolina: R$" + gasolinainput;
    alcoolSpan.innerHTML ="Alcool: R$" + alcoolinput;

    contentResult.classList.remove("hide")

}