//variables globales
var contClicks = 0;
var contCaracteres = 0; //para iniciar los contadores
var textoEntrada = document.getElementById("textoEntrada");
var usuario = document.getElementById("usuario");
var enviar = document.getElementById("enviar");

document.addEventListener("click", numeroClicks); //Evento para los clicks en el documento
function numeroClicks(){
 
    contClicks += 1; //incremento de los clicks 
    var cantClicks = document.getElementById("contClicks");
    cantClicks.innerText =contClicks;
}
//Areas donde no deben contarse los clicks
textoEntrada.addEventListener("click", noClicks);
usuario.addEventListener("click", noClicks);
enviar.addEventListener("click", noClicks);

function noClicks(){
    event.stopPropagation();
}

//contador de caracteres para tweet
textoEntrada.addEventListener("keyup", numeroLetras);
function numeroLetras(){
    contCaracteres +=1;
    var cantLetras = document.getElementById("noLetras");
    cantLetras.innerText = contCaracteres;
} //falta limitar numero de caracteres ingresados.

//para publicar un tweet
enviar.addEventListener("click", tweet);
function tweet(){
    var tweets = document.getElementById("tweets");
    
    var nuevoTweet = document.createElement("div");
    var contenido = document.createElement("p");
    var autor = document.createElement("h4");
    
    contenido.innerHTML= textoEntrada.value;
    autor.innerHTML= usuario.value;
    
    nuevoTweet.appendChild(contenido);
    nuevoTweet.appendChild(autor);
    
    tweets.insertBefore(nuevoTweet, tweets.firstChild); //para que queden al principio.
}

