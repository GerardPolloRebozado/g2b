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
    const response = await fetch(`./i18n/${lang}.json`);
    const data = await response.json();

    // Canviar els texts (Aquesta és la part que heu de modificar)
    document.getElementById('navbar_home').innerHTML = data.navbar_home;
    document.getElementById('navbar_games').innerHTML = data.navbar_games;
    document.getElementById('navbar_merch').innerHTML = data.navbar_merch;
    document.getElementById('navbar_contact').innerHTML = data.navbar_contact;

}