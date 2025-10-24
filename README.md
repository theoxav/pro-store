# Pro Store E-commerce

Une application e-commerce moderne construite avec Next.js 15 et React 19, utilisant PostgreSQL comme base de données et Prisma comme ORM.

## 🚀 Technologies Principales

### **Frontend**
- **Next.js 15** - Framework React avec App Router et Server Components
- **React 19** - Bibliothèque UI avec les dernières fonctionnalités
- **TypeScript** - Typage statique pour une meilleure robustesse du code
- **Tailwind CSS** - Framework CSS utility-first pour un design moderne
- **Shadcn/ui** - Composants UI modernes et accessibles

### **Backend & Base de données**
- **PostgreSQL** - Base de données relationnelle robuste
- **Prisma** - ORM moderne avec type-safety
- **NextAuth.js** - Authentification sécurisée
- **API Routes** - Endpoints REST intégrés à Next.js

### **Paiements & Transactions**
- **Stripe** - Paiements en ligne sécurisés
- **PayPal** - Solution de paiement alternative
- **Gestion des commandes** - Workflow complet e-commerce

### **Gestion d'état & Données**
- **React Hook Form** - Gestion performante des formulaires
- **Zod** - Validation de schémas TypeScript-first
- **TanStack Query** - Gestion du cache et synchronisation des données

### **UI/UX & Communication**
- **React Email** - Templates d'emails transactionnels
- **Panel Admin** - Interface d'administration complète
- **Design responsive** - Interface adaptative mobile/desktop

### **Tests & Déploiement**
- **Jest** - Framework de tests unitaires
- **Vercel** - Déploiement et hébergement optimisé

## 🛠️ Fonctionnalités

- **Catalogue produits** - Gestion complète des produits avec images
- **Panier d'achat** - Ajout, modification et suppression d'articles
- **Processus de commande** - Workflow complet de checkout
- **Authentification** - Connexion/inscription sécurisée
- **Paiements multiples** - Stripe et PayPal intégrés
- **Panel administrateur** - Gestion des produits, commandes et utilisateurs
- **Emails transactionnels** - Notifications automatiques
- **Interface responsive** - Design adaptatif mobile/desktop

## 📦 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd pro-store-ecommerce

# Installer les dépendances
pnpm install

# Configurer les variables d'environnement
cp .env.example .env.local

# Démarrer le serveur de développement
pnpm dev
```

## 🔧 Scripts Disponibles

- `pnpm dev` - Serveur de développement
- `pnpm build` - Build de production
- `pnpm start` - Serveur de production
- `pnpm lint` - Vérification du code
- `pnpm test` - Exécution des tests

