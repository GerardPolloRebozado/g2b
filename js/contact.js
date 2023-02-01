// Obtenir l'idioma de la URL si existeix i executar la funció "changeLanguage"
const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
const urlParams = new URLSearchParams(querystring);
if (urlParams.get('lang')) {
    const lang = urlParams.get('lang');
    changeLanguage(lang);
}

async function changeLanguage(lang) {
    // Guardar l'idioma a la URL
    const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + lang;
    window.history.replaceState({}, '', newURL);

    // Obtenir el fitxer json corresponent

const response = await fetch(`./i18n_contact/${lang}.json`);
    const data = await response.json();


    // Canviar els texts 

    console.log("hola");
    document.getElementById("Contacto").innerHTML = data.Contacto; 
    document.getElementById("t_first_name").innerHTML = data.t_first_name;
    document.getElementById("last_name").innerHTML = data.last_name;
    document.getElementById("Mensaje").innerHTML = data.Mensaje;
    document.getElementById("Edad").innerHTML = data.Edad;
    document.getElementById("cum").innerHTML = data.cum;
    document.getElementById("enviar").innerHTML = data.enviar;


}

