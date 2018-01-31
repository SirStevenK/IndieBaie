// Animation boutons en-tête

$(function () {

    var heightBase =  "77px"; // height lorsque recherche et le menu sont fermés
    var heightMenu = "277px"; // height lorsque le menu est ouvert
    var heightRecherche = "147px"; // height lorsque recherche est ouvert

    $("#recherche").click(function () {
        if ($("#h-down").css("height") == heightMenu) {
            fermetureMenu(heightRecherche);
            $("#content-presentation a").removeClass("disabled");  // active la possibilité de changer de page avec les cartes

            ouvertureRecherche(heightRecherche);
        }

        else if ($("#h-down").css("height") == heightBase) {
            ouvertureRecherche(heightRecherche);

        }
        else if ($("#h-down").css("height") == heightRecherche) {
            fermetureRecherche(heightBase);
        }
    });

    $("#menu").click(function () {
        if ($("#h-down").css("height") == heightRecherche) {
            fermetureRecherche(heightMenu);

            ouvertureMenu(heightMenu);
            $("#content-presentation a").addClass("disabled");  // désactive la possibilité de changer de page avec les cartes
        }

        else if ($("#h-down").css("height") == heightBase) {
            ouvertureMenu(heightMenu);
            $("#content-presentation  a").addClass("disabled");   // désactive la possibilité de changer de page avec les cartes
        }
        else if ($("#h-down").css("height") == heightMenu) {
            fermetureMenu(heightBase);
            $("#content-presentation a").removeClass("disabled");  // active la possibilité de changer de page avec les cartes
        }
    });
    $("#presentation, #zone-article").click(function () {
        if ($("#h-down").css("height") == heightMenu) {
            fermetureMenu(heightBase);
            $("#content-presentation a").removeClass("disabled");  // active la possibilité de changer de page avec les cartes
        }
        if ($("#h-down").css("height") == heightRecherche) {
            fermetureRecherche(heightBase);
        }
    });

    $("#menu-slide a").hover(function () {
        // Effet sur l'item du menu dont la souris touche
        $("#menu-slide a").removeClass("active");  
        $(this).addClass("active");
    })

    var ouvertureRecherche = function (height) {
        // Ouvre le slide de la recherche
        $("#side-search").show();
        $("#h-down").animate({height: height});
        $("#side-search").css({display: "inline-flex"});
    };

    var ouvertureMenu = function (height) {
        // Ouvre le menu
        $("#menu-slide").show();
        $("#h-down").animate({height: height});
        $("#presentation, #zone-article").css({filter: "blur(2px)"});
    }

    var fermetureRecherche = function (height) {
        // Ferme le slide de la recherche
        $("#side-search").hide();
        $("#h-down").animate({height: height, display: "none"});
    };

    var fermetureMenu = function (height) {
        // Ferme le menu
        $("#presentation, #zone-article").css({filter: "blur(0px)"});
        $("#menu-slide").hide();
        $("#h-down").animate({height: height, display: "none"});
    };
});