<!-- Fichier php qui contient le contenu html d'une page actualite -->

<section id="zone-article">
    <article>
        <div id="head-article">
            <img v-bind:src="mainImage" class="main-image">
            <h1>{{titre}}</h1>
        </div>
        <div id="desc-article">
            <p>{{description}}</p>
        </div>

        <div v-html="articleContent" id="cont-article"></div>

        <div v-html="link" id="link"></div>
    </article>
</section>