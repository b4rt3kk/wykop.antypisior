/**
 * Pobierz listę podejrzanych użytkowników w postaci tablicy nicków
 * @todo Do przepięcia na pobieranie danych z bazy danych poprzez api
 * @returns {Array}
 */
function getSuspiciousUsers() {
    let data = [
        "Tumurochir",
        "janusz_z_czarnolasu",
        "4x80",
        "Mezomorfix",
        "L3stko",
        "dafto",
        "getin",
        "Redguard86",
        "damienbudzik",
        "krol_europy",
        "Xi_Velazquez",
        "fujiyama",
        "Stabilizator",
        "pochfiarz_wiekonos",
        "LicentAbsolweum",
        "czeslaw1988",
        "Sisal",
        "beconase",
        "papanostulos",
        "typ53B",
        "3x32"
    ];
    
    data = data.map(word => word.toLowerCase());
    
    return data;
}

/**
 * Pobierz listę podejrzanych stron
 * @todo Do przepięcia na pobieranie danych z bazy danych poprzez api
 * @returns {Array}
 */
function getSuspiciousPages() {
    let data = [
        "http*://*niezalezna.pl",
        "http*://*dorzeczy.pl",
        "http*://*tysol.pl",
        "http*://*wgospodarce.pl",
        "http*://*wpolityce.pl",
        "http*://*gazetapolska.pl",
        "http*://*tvrepublika.pl"
    ];
    
    return data;
}

function matchElementAsSuspicious(element) {
    element.css("border", "1px solid #f1aeb5");
    element.css("background-color", "#f8d7da");
}

function getUsernameFromArticle(element) {
    let userName = element.attr('href').replace('/ludzie/', '').toLowerCase();
    
    return userName;
}

