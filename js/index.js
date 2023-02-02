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
    const response = await fetch(`./i18n_index/${lang}.json`);
    const data = await response.json();

    document.getElementById('navbar_home').innerHTML = data.navbar_home;
    document.getElementById('navbar_games').innerHTML = data.navbar_games;
    document.getElementById('navbar_merch').innerHTML = data.navbar_merch;
    document.getElementById('navbar_contact').innerHTML = data.navbar_contact;
    document.getElementById('footer_sponsors').innerHTML = data.footer_sponsors;
    document.getElementById('footer_resources').innerHTML = data.footer_resources;
    document.getElementById('footer_TC').innerHTML = data.footer_TC;
    document.getElementById('footer_privacy').innerHTML = data.footer_privacy;


    document.getElementById('prepurchase').innerHTML = data.prepurchase;
    document.getElementById('trending').innerHTML = data.trending;
    document.getElementById('BaF').innerHTML = data.BaF;
    document.getElementById('Opiniones').innerHTML = data.Opiniones;
    document.getElementById('review1').innerHTML = data.review1;
    document.getElementById('review2').innerHTML = data.review2;
    document.getElementById('footer_home').innerHTML = data.footer_home;
    document.getElementById('footer_games').innerHTML = data.footer_games;
}