# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Tests fonctionnels avec Cypress

Pour tester les tests fonctionnels se trouvant dans le dossier
`cypress/e2e/order`, vous devez :

- checkout le repo back : [other-tests](https://github.com/HappyMisfits/other-tests)
- dans other-tests : npm install
- dans other-tests : npm run start:dev
- le server back est maintenant en marche
- dans ce repo, lancer le server front : npm run dev
- dans le dossier `cypress` : npx cypress run
- vos tests d'intégration ont tourné
- pour voir le détail avec screenshots du déroulé des tests : npx cypress open
- l'interface graphique de cypress s'ouvre, vous pouvez maintenant choisir 'E2E Testing' puis le navigateur sur lequel vous désirez lancer l'interface. Vous y trouverez votre suite de test et pourrez observer étape par étape le déroulé des tests.
