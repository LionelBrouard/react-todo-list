<h1 align="center">Jus de Mama</h1>

## Installation

** 1 - jusdemama-backend **

Clone this repository :

```
git clone https://github.com/JusDeMama-MVP/jusdemama-backend.git
cd jusdemama-backend
```

Install packages :

```
npm install
```

When installation is complete, run the project with:

```
npm run dev (nodemon est installé en devDependencies dont pas besoin de faire npx nodemon index.js)
```

** 2 - jusdemama-frontend **

Clone this repository :

```
git clone https://github.com/JusDeMama-MVP/jusdemama-frontend.git
cd jusdemama-frontend

```

Install packages :

```
npm install
```

When installation is complete, run the project with:

```
npm start
```

cliquer sur le lien "Press" en bleu et si tout se passe bien vous devez avoir une alert avec
"Hello Jus de Mama"

## Process Github

** 1 - commencer une nouvelle fonctionalité **

- s'assurer d'être sur la branche master
- git pull : avant de commencer à coder pour être sur de démarrer sur le projet à jour
- git checkout -b nomBranche : ca va creer une nouvelle branche et nous deplacer dessus

** 2 - merge la fonctionalité **

- git add .
- git commit -m "description"
- git pull --rebase origin master : vérification des conflits avec ce qui est push sur master
- git push
- copier coller la commande qui s'affiche dans la console
- cliquer sur le lien qui s'affiche dans la console pour créer la pull request, cela vous redirigera vers Github
- cliquer sur le bouton "créer" sur Github
- git checkout master pour revenir à l'étape 1
