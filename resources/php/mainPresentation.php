<!-- Fichier php qui contient le contenu html  -->

<article class="red segment" id="content-presentation">
    <!-- Affiche une carte pour chaque article contenu dans main-card.json -->
    <div class="ui link red card bloc" v-for="card in $items">
        <div class="image">
            <a :href="card.url">
                <img class="ui tiny rounded image" v-bind:src="card.mainImage">
            </a>
            <div class="ui ribbon label etiquette" v-bind:class="card.color">
                <p>{{card.type}}</p>
            </div>
        </div>

        <div class="title-carte">
            <a :href="card.url">
                <h4 style="color: #EA2027">{{card.titre}}</h4>
            </a>
        </div>

        <div class="details">
            <div class="auteur">
                <i class="user icon"></i>
                <p>{{card.author}}</p>
            </div>
            <div class="date">
                <i class="calendar icon"></i>
                <p>{{card.depuis}}</p>
            </div>
        </div>

        <div class="content">
            <a :href="card.url">
                <div>
                    <p>{{card.description}}</p>
                </div>
            </a>
        </div>

        <div class="tag">
            <a class="ui small green label" v-for="item in card.keywords"><i class="hashtag icon"></i><p>{{item.text}}</p></a>
        </div>
    </div>
</article>
<script type="text/javascript" src="resources/js/carte.js"></script>
