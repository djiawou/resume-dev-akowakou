# 🚀 Configuration CI/CD Vercel avec pnpm Terminée !

Votre pipeline de déploiement GitHub Actions avec Vercel et **pnpm** a été configuré avec succès ! Voici ce qui a été créé :

## 📁 Fichiers créés/modifiés :

### Workflows GitHub Actions :
- `.github/workflows/ci-cd.yml` - **Workflow principal** pour Vercel avec pnpm
- `.github/workflows/vercel-ci-cd.yml` - Workflow de backup
- `.github/workflows/README.md` - Documentation des secrets
- `.github/workflows/setup.sh` - Script d'aide à la configuration

### Configuration Vercel :
- `vercel.json` - Configuration du déploiement avec pnpm

## 🔄 Jobs configurés (séparés comme demandé) :

1. **🔍 validate** : Vérification du code (ESLint + TypeScript)
2. **🏗️ build** : Construction de l'application Next.js avec pnpm
3. **🚀 deploy-production** : Déploiement en production (branche main)
4. **🚀 deploy-preview** : Déploiement en preview (branche develop)

## ⚙️ Configuration requise :

### Secrets GitHub à ajouter :
```
VERCEL_TOKEN        - Token d'accès Vercel
VERCEL_ORG_ID       - ID de l'organisation
VERCEL_PROJECT_ID   - ID du projet
```

### Variables d'environnement (optionnelles) :
```
NEXT_PUBLIC_FIREBASE_* - Variables Firebase si utilisées
NODE_ENV              - Environnement (dev/preview/prod)
```

## 🛠️ Technologies utilisées :

- **Package Manager** : pnpm 9.x (au lieu de npm)
- **Node.js** : Version 20
- **Framework** : Next.js 15
- **Runtime** : Node.js 20.x (pour les functions)

## 🎯 Prochaines étapes :

1. **Configurez les secrets** dans GitHub (Settings > Secrets and variables > Actions)
2. **Importez le projet** sur Vercel depuis votre repository GitHub
3. **Récupérez les IDs** (Project ID, Org ID) depuis le dashboard Vercel
4. **Générez un token** Vercel (Settings > Tokens)
5. **Push ces changements** sur votre branche main
6. **Surveillez** les workflows dans l'onglet Actions GitHub

## 🌐 Environnements de déploiement :

- **main** → Production (vercel.app)
- **dev** → Preview (pr-xxx.vercel.app)
- **Autres branches** → Validation uniquement (pas de déploiement)

## 📦 Commandes utilisées :

- **Installation** : `pnpm install --frozen-lockfile`
- **Build** : `pnpm run build`
- **Lint** : `pnpm run lint`
- **Type check** : `pnpm run typecheck`

Le pipeline se déclenchera automatiquement sur chaque push et créera des environnements distincts pour la production et les previews ! 🎉!
