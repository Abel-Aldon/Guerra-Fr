
//Abajo comienza el script del menú despleable

var itemOrig;
function despMenu(nombre,sn)

{

obj = document.getElementById(nombre);
if (sn)
obj.style.visibility = "visible";
else
obj.style.visibility = "hidden";

}

function destacar(obj, val)

{

if (val)

{

itemOrig = obj.style.backgroundColor;
obj.style.backgroundColor="white";

}

else
obj.style.backgroundColor= itemOrig;

}

//Aqui termina el script del menu 

//Abajo empieza el script del reloj


function actReloj(){
let hhmmss=new Date();
let horas=hhmmss.getHours();
let minutos=hhmmss.getMinutes();
let segundos=hhmmss.getSeconds();
let lahora="";
horas = (horas<=9)?("0"+horas):horas;
minutos = (minutos<=9)?("0"+minutos):minutos;
segundos=(segundos<=9)? ("0"+segundos):segundos;       
lahora = horas+":"+minutos+":" +segundos
reloj = document.getElementById('reloj')
reloj.innerHTML=lahora;
 setTimeout("actReloj()",1000);
}

    //Aqui termina el script del reloj
    
    //Abajo empieza el script del titulo animado

  
function animaTitulo(ini)
{
if (ini){
document.title = document.title.replaceAll(" ","\xA0")+"-";
ini = false;
}
var actual = document.title;
var ind;
if(actual[0]=="\xA0")
ind=2;
else
ind=1;
sp = actual.substring(0, ind);
document.title = actual.substr(ind)+sp;
setTimeout(animaTitulo, 220,ini);
}

    //Aqui termina el script de titulo animado



