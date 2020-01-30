# Web_Store

### 1. Outils / Pré-requis
- Javascript / HTML / CSS
- React version 16.2
- yarn 1.13.0 (ou npm)

Autre modules/libraires utilisées:
- reactstrap
- enzyme (test)
- chai (test)

..* Commandes d'installation de chaque module librairies

``bash
npm install --save bootstrap
npm install --save reactstrap react react-dom

npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer chai-enzyme@beta

npm install --save-dev dirty-chai
npm install --save-dev chai-jest-diff
``


### 2. Commandes

..* Installation des modules et packages nécessaires

```bash
cd web-app
yarn install
```
..* Lancement de l'application web (tournera par défaut sur localhost:3000)

```bash
yarn start
```

Optionnel..* Test (Partie non optimisée)
```bash
yarn test
