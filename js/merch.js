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
    const response = await fetch(`./i18n_merch/${lang}.json`);
    const data = await response.json();


    // Canviar els texts 

    console.log("hola");
    document.getElementById("navbar_home").innerHTML = data.navbar_home;
    document.getElementById("navbar_games").innerHTML = data.navbar_games;
    document.getElementById("navbar_merch").innerHTML = data.navbar_merch;
    document.getElementById("navbar_contact").innerHTML = data.navbar_contact;


    document.getElementById("m_amongusplush").innerHTML = data.m_amongusplush;
    document.getElementById("m_helloneighborfunko").innerHTML = data.m_helloneighborfunko;
    document.getElementById("m_kirbyshirt").innerHTML = data.m_kirbyshirt;
    document.getElementById("m_kratosshirt").innerHTML = data.m_kratosshirt;
    document.getElementById("m_amongusshirt").innerHTML = data.m_amongusshirt;
    document.getElementById("m_quagsireplush").innerHTML = data.m_quagsireplush;
    document.getElementById("m_berserkshirt").innerHTML = data.m_berserkshirt;
    document.getElementById("m_llamaplush").innerHTML = data.m_llamaplush;
    document.getElementById("m_kirbyplush").innerHTML = data.m_kirbyplush;
    document.getElementById("m_kratosfunko").innerHTML = data.m_kratosfunko;
    document.getElementById("m_creepershirt").innerHTML = data.m_creepershirt;
    document.getElementById('footer_resources').innerHTML = data.footer_resources;
    document.getElementById('footer_privacy').innerHTML = data.footer_privacy;
    document.getElementById('footer_TC').innerHTML = data.footer_TC;
    document.getElementById('footer_home').innerHTML = data.footer_home;
    document.getElementById('footer_games').innerHTML = data.footer_games;
    document.getElementById('footer_sponsors').innerHTML = data.footer_sponsors;
}