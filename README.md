# Ovaa

Ovaa est une application web élégante et minimaliste conçue pour simplifier la collaboration entre freelances créatifs (designers, développeurs, photographes, etc.) et leurs clients. Elle propose un espace client dédié pour chaque projet, favorisant une communication fluide, un suivi visuel des étapes et le partage sécurisé de fichiers.

## ✨ Fonctionnalités principales

- 🧾 **Suivi d’étapes visuel** : gardez une vue claire de l’avancement du projet.
- 📂 **Partage de fichiers** : ajoutez et consultez les fichiers liés à chaque étape.
- 💬 **Commentaires simplifiés** : discutez avec votre client directement depuis l’interface.
- 🎨 **Design minimaliste** : une interface intuitive pensée pour l’expérience utilisateur.

## 🛠️ Stack technique

- **Frontend** : Next.js (React), TypeScript, Tailwind CSS
- **Backend** : GraphQL (Apollo Server)
- **Base de données** : PostgreSQL 
- **Authentification** : Auth.js (anciennement NextAuth)
- **Stockage de fichiers** : Cloudinary
- **Déploiement** : Vercel

## 🚀 Installation locale

```bash
# 1. Clonez le repo
git clone https://github.com/ton-utilisateur/ovaa.git
cd ovaa

# 2. Installez les dépendances
npm install

# 3. Configurez les variables d’environnement
cp .env.example .env
# Remplissez les variables nécessaires dans le fichier .env

# 4. Démarrez l’application
npm run dev
