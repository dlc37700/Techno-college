# Projet DLC-37 — TechnoCollège

Plateforme pédagogique Technologie cycle 4 (collège). React 18 + Vite 6.

- Code de l'app : sous-dossier `technocollege/` (lancer `npm install`, `npm run dev`, `npm run build` depuis ce dossier)
- Proxy IA (Gemini) : `technocollege/api/chat.js` (fonction serverless Vercel)
- Frontend : `technocollege/src/App.jsx`
- GitHub : https://github.com/dlc37700/Techno-college (branche `main`)
- Déploiement : Vercel, projet `techno-college-37` (https://vercel.com/maz37700s-projects/techno-college-37), déploiement automatique à chaque push sur `main`

## Conventions
- Langue : français (interface, commentaires de commit, échanges)
- Ne jamais committer de clé API (la clé Gemini vit dans les variables d'environnement Vercel)
- Petits commits clairs ; push sur `main` = mise en ligne
