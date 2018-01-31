var calcDate = function (datePublished) {

    // fonction qui permet de connaitre l'écart entre une date et maintenant

    var datePubli = new Date(datePublished);
    var dateNow = new Date();

    // année
    var diffAnnee = dateNow.getFullYear() - datePubli.getFullYear();
    var diffMois = (diffAnnee == 1) ? dateNow.getMonth() - datePubli.getMonth() + 12 : dateNow.getMonth() - datePubli.getMonth();

    if (diffAnnee > 1 && diffMois > 0) return ("il y a " + diffAnnee + " ans");
    else if (diffAnnee >= 1 && diffMois < 0) return ("il y a " + (diffAnnee - 1) + " an");

    // mois
    var diffJour = (diffMois == 1) ? dateNow.getDate() - datePubli.getDate() + 31 : dateNow.getDate() - datePubli.getDate();
    var diffSemaine = Math.floor(diffJour / 7);

    if(diffMois > 1) return ("il y a " + diffMois + " mois");
    if(diffMois >= 1 && diffSemaine > 4) return ("il y a " + diffMois + " mois");

    // semaine
    if (diffSemaine > 1) return ("il y a " + diffSemaine + " semaines");
    else if (diffSemaine === 1) return ("il y a " + diffSemaine + " semaine");

    // jour
    var diffHeure = (diffJour == 1) ? dateNow.getHours() - datePubli.getHours() + 24: dateNow.getHours() - datePubli.getHours();

    if (diffJour > 1) return ("il y a " + diffJour + " jours");
    else if (diffJour >= 1 && diffHeure >= 24) return ("il y a " + diffJour + " jour");

    // heure
    var diffMinute = (diffHeure == 1) ? dateNow.getMinutes() - datePubli.getMinutes() + 60: dateNow.getMinutes() - datePubli.getMinutes();

    if (diffHeure > 1) return ("il y a " + diffHeure + "h");
    if (diffHeure >= 1 && diffMinute >= 60) return ("il y a " + diffHeure + "h");

    //minute et secondes
    var diffSeconde = (diffMinute == 1) ? dateNow.getSeconds() - datePubli.getSeconds() +60: dateNow.getSeconds() - datePubli.getSeconds();

    if (diffMinute > 1) return ("il y a " + diffMinute + "minutes");
    else if (diffMinute == 1 && diffSeconde >= 60) return ("il y a " + diffMinute + "minute");
    else return ("il y a " + diffSeconde + "s");

    return "error date";
};


var getJsonAdressList = function (addresse) {
    // Fonction qui fait une demande à la page givePath.php pour obtenir la liste des articles à afficher sur la page d'accueil
    // Il renvoie une liste contenant les adresses json des articles
    var $res = "a";
    var path = $.ajax({
        url : '/./resources/php/givePath.php',
        type : 'GET',
        dataType: "json",
        data: "key="+1,
        async: false,
        success : function(result, statut) {
            $res = result;
        },
        error : function(resultat, statut, erreur) {
            alert(resultat);
        }
    });
    for (var i = 0; i < $res.length; i++) $res[i] = "resources/data/" + $res[i];
    return $res;
}
