# Configuration des secrets d'environnement pour GitHub Actions (Vercel)
# =====================================================================

## Secrets requis pour Vercel

Dans votre repository GitHub, allez dans Settings > Secrets and variables > Actions et ajoutez ces secrets :

### Secrets Vercel (obligatoires pour le déploiement) :
- `VERCEL_TOKEN` : Token d'accès Vercel (généré depuis Vercel Dashboard > Settings > Tokens)
- `VERCEL_ORG_ID` : ID de votre organisation Vercel (trouvable dans l'URL de votre dashboard)
- `VERCEL_PROJECT_ID` : ID de votre projet Vercel (trouvable dans les paramètres du projet)

### Variables d'environnement (optionnelles) :
- `NODE_ENV` : Environnement (development, preview, production)
- `NEXT_PUBLIC_FIREBASE_API_KEY` : Clé API Firebase publique
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` : Domaine d'authentification
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` : ID du projet Firebase
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` : Bucket de stockage
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` : ID de l'expéditeur de messages
- `NEXT_PUBLIC_FIREBASE_APP_ID` : ID de l'application Firebase

## Configuration Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Importez votre projet GitHub dans Vercel
3. Notez l'ID du projet depuis l'URL du dashboard
4. Générez un token d'accès depuis Settings > Tokens
5. Ajoutez ces informations dans les secrets GitHub

## Branches et environnements

- **main** : Déploiement automatique en production
- **dev** : Déploiement automatique en preview
- **Autres branches** : Tests et validation uniquement

## Workflow des jobs

1. **validate** : Vérification du code (lint + typecheck)
2. **build** : Construction de l'application
3. **deploy-production** : Déploiement production (main branch)
4. **deploy-preview** : Déploiement preview (develop branch)

## Configuration du projet

Le fichier `vercel.json` configure automatiquement :
- Commande de build : `pnpm run build`
- Commande d'installation : `pnpm install --frozen-lockfile`
- Répertoire de sortie : `.next`
- Framework : Next.js
- Runtime Node.js : 20.x

## Technologies utilisées

- **Package Manager** : pnpm 9.x
- **Node.js** : Version 20
- **Framework** : Next.js 15
- **Runtime** : Node.js 20.x (pour les functions)
