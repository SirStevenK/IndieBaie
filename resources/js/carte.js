// Vue pour les cartes

Vue.prototype.$items = {};


var app = new Vue({
    el: "#content-presentation",
    created: function ()
    {
        // Fonction qui envoie le contenu json de chaque article dans la liste $items
        // $items peut être appelé avec app.$items dans la console
        var link = '/./resources/php/givePath.php';

        var list = getJsonAdressList(link);

        obj = [];
        for (var i = 0; i < list.length; i++)
        {
            obj[i] = JSON.parse($.ajax(
                {
                type: "GET",
                url: list[i],
                async: false
                }).responseText);
            obj[i].depuis = calcDate(obj[i].datePublished);
        }
        this.$items = obj;
    }
});
