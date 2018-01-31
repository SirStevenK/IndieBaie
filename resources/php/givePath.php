<?php
    // Fichier php qui nous permet de récupérer la liste des articles à afficher dans le page de présentation
    $fichier = file_get_contents("../../resources/data/main-card.json");
    $vari = json_decode($fichier) -> list;
    echo json_encode($vari);
?>