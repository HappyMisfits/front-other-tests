import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // URL du front React
    supportFile: false,              // Désactive le fichier de support par défaut (optionnel)
  },
});