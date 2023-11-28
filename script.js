
const CALCULAR = document.getElementById('calcula');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DATO = document.getElementById("peso");

CALCULAR.addEventListener('click', () => {
    
let peso = DATO.valueAsNumber;
    if (peso> 0 && peso <= 30){
        ERROR.style.display= "none"
        let res= holliday(peso)
        let man= (res/24)*1.5;

        FLU.innerHTML= (res/24) + " " + "cc/hr";
        MAN.innerHTML= "m+m/2" + man + " " +"cc/hr";

        FLU.style.display= "block"
        MAN.style.display= "block"

    }  else if (peso>30){
        ERROR.style.display = "none";

        let respuesta = superficie(peso);
        let mante = (respuesta * 2000);
        FLU.innerHTML = respuesta * 1500 + " diario" + " " + (respuesta*1500)/24 + " cc/h";
        FLU.style.display = "block"
        MAN.innerHTML = mante + " diario" + " " + mante/24 +" " + " cc/h";
        MAN.style.display = "block";
    } else {
        ERROR.style.display= "block"
        FLU.style.display= "none"
        MAN.style.display= "none" 
    }
})

if (peso<=30){
    (holliday(peso))
} else{
    (superficie(peso))
}

function holliday(valor){
    let resultado
    if (valor >= 20){
        resultado= (((valor - 20)* 20)+1500)
    } else if(valor< 20 && peso> 10){
        resultado= (((valor-10)*50)+1000)
    } else{
        resultado= (valor*100)
    }
    return resultado
}

function superficie(valor){
   return((valor * 4) + 7) / ( valor + 90)
}
