# Le Jardin

Site vitrine statique et responsive pour un restaurant indépendant fictif.

## Prérequis

- Node.js 20.19 ou plus récent
- pnpm 11

## Lancer le projet

Installez les dépendances et démarrez Vite :

```bash
pnpm install
pnpm dev
```

Puis ouvrez l’adresse indiquée par Vite, généralement `http://localhost:5173`.

Pour rendre le site accessible sur le réseau local :

```bash
pnpm dev --host
```

## Build de production

```bash
pnpm build
pnpm preview
```

Le site compilé est généré dans `dist/`.

## Déploiement Vercel

Le projet est configuré comme application Vite. Sur Vercel, importez le dépôt GitHub : la commande de build et le dossier de sortie seront détectés automatiquement depuis `vercel.json`.

## Personnalisation

- Textes principaux et coordonnées : `index.html`
- Plats et galerie : objet `siteContent` au début de `script.js`
- Images : fichiers dans `assets/`, puis chemins dans `index.html` et `script.js`
- Couleurs : variables CSS dans `:root` au début de `styles.css`
