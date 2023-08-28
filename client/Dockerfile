# Utilise une image de base Node.js LTS (Long Term Support) basée sur Alpine Linux
FROM node:lts-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie le package.json et le package-lock.json dans le conteneur
COPY package*.json ./
COPY *.config.js ./

# Installe les dépendances du projet
RUN npm install

# Copie tous les fichiers du projet dans le conteneur
COPY . .

# Construit l'application pour la production // n'est pas utile en developpement
# RUN npm run build

# Expose le port utilisé par l'application (facultatif)
EXPOSE 5173

# Définit la commande par défaut pour démarrer l'application
CMD [ "npm", "run", "dev" ]
