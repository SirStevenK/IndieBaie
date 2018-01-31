// Vue pour les articles

new Vue({
    el: "article",
    data: function () {
        // Fonction qui permet de récupérer le contenu json de l'article

        var path = window.location.href.replace("php", "json"); // Récupère l'url et modifie l'extension

        // On modifie le chemin de path pour aller dans le dossier data
        var indice = path.indexOf("articles/") + 8;
        path = "/./resources/data/" + path.substring(indice);

        // On récupère le contenu json de l'article
        var all =  $.ajax({type: "GET", url: path, async: false}).responseText;
        var obj = JSON.parse(all);
        return obj;
    },
    computed: {


    }
});










