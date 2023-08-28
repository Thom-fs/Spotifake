<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a> <h1 align="center">SPOTIFAKE API</h1></p>

<p aligne="center">Use of the LARAVEL Framework for the Back-end of our SPOTIFAKE application</p>

# Installation de Laravel
<ol>
    <li>Cloner le dépôt à l'aide de git clone</li>
    <li>Aller dans le répertoire du projet avec cd server</li>
    <li>Installer les dépendances nécessaires avec composer install</li>
    <li>Copiez le fichier .env.example en .env avec cp .env.example .env</li>
    <li>Générer une nouvelle clé d'application avec php artisan key:generate</li>
    <li>Démarrer le serveur de développement avec php artisan serve</li>
</ol>


# Route Api

Voici les routes de l'API disponibles dans ce projet Laravel :

<p>Routes publiques</p>
<ul>
    <li>POST /api/register : Inscrire un nouvel utilisateur.</li>
    <li>POST /api/login : Connecter un utilisateur existant.</li>
</ul>
</br>
<p>Routes de réinitialisation du mot de passe</p>
<ul>
    <li>POST /api/forgot-password : Envoyer un e-mail de réinitialisation du mot de passe.</li>
    <li>POST /api/reset-password : Réinitialiser le mot de passe de l'utilisateur.</li>
</ul>
</br>
<p>Routes protégées</p>
<ul>
    <li>GET /api/user : Obtenir l'utilisateur authentifié.</li>
    <li>POST /api/logout : Déconnecter l'utilisateur authentifié.</li>
    <li>GET /api/profil : Obtenir le profil de l'utilisateur.</li>
    <li>GET /api/accueil : Obtenir la page d'accueil.</li>
    <li>GET /api/albums/{album} : Obtenir un album spécifique.</li>
    <li>GET /api/playlists : Obtenir toutes les playlists.</li>
    <li>GET /api/playlists/{playlistId} : Obtenir une playlist spécifique.</li>
    <li>POST /api/playlist : Créer une nouvelle playlist.</li>
    <li>PUT /api/playlist/{playlistId} : Mettre à jour une playlist spécifique.</li>
    <li>DELETE /api/playlist/{playlistId} : Supprimer une playlist spécifique.</li>
    <li>POST /api/playlist/{playlistId}/track : Ajouter une piste à une playlist spécifique.</li>
    <li>DELETE api/playlist/{playlist}/track/{track} : Supprimer une musique d'une playlist;</li>
    <li>GET /api/tracks/{track}/play : Obtenir une URL temporaire pour lire une piste spécifique.</li>
    <li>GET /api/tracks/play : Obtenir des URLs temporaires pour lire toutes les pistes.</li>
</ul>


# Utilisation de SQLITE
<div style="background-color: #eee; border-width:1px; border-style: solid; border-color: #000000;">
    <ul>
        <li>DB_CONNECTION=sqlite</li>
    </ul>
    <div>
        créer un fichier database.sqlite dans le repertoire database
    </div>
</div>


# Utilisation de MySQL
<div style="background-color: #eee; border-width:1px; border-style: solid; border-color: #000000;">
    <ul>
        <li>DB_CONNECTION=mysql</li>
        <li>DB_HOST=127.0.0.1</li>
        <li>#DB_PORT=3306</li>
        <li>#DB_DATABASE=spotifake</li>
        <li>#DB_USERNAME=root</li>
        <li>#DB_PASSWORD=<span style="background-color: red;"><< mettre le password si il y en a un >></span></li>
    </ul>
</div>

# Creation des données dans la DB en dur en fonction de la liste initiale
<p>Création des données songs.json en dur lors de la migration</p>
<p>Faire un php artisan migrate</p>

# Pour utiliser le send mail lors de l'envoi du code de validation
<p>Créer un compte sur mailtrap : <a href="http://www.https://mailtrap.io">https://mailtrap.io</a></p>

<p> Dans le .env modifier le mailer </p>
<div>
    <ul>
        <li>MAIL_MAILER=smtp</li>
        <li>MAIL_HOST=sandbox.smtp.mailtrap.io</li>
        <li>MAIL_PORT=2525</li>
        <li>MAIL_USERNAME=<<selon config mailtrap>></li>
        <li>MAIL_PASSWORD=<<selon config mailtrap>></li>
        <li>MAIL_ENCRYPTION=tls</li>
        <li>MAIL_FROM_ADDRESS="contact@spotifake.com"</li>
        <li>MAIL_FROM_NAME="${APP_NAME}"</li>
    </ul>
</div>