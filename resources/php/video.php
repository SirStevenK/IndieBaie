<!-- Fichier php qui contient le contenu html d'une page video -->

<section id="zone-article">
    <article>
        <div id="head-article">
            <iframe class="main-image" v-bind:src="mainVideo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <h1>{{titre}}</h1>
        </div>
        <div v-html="description" id="desc-article">
            <p>{{description}}</p>
        </div>

        <div v-html="articleContent" id="cont-article"></div>
    </article>
</section>