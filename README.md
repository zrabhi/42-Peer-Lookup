# 📱 42 Look Up

**42 Look Up** is a mobile application that uses the [42 API](https://api.intra.42.fr/apidoc) to fetch and display detailed information about users from the 42 Network. It includes profiles, project achievements, skills, and more.

---

## ✨ Features

- 🔐 42 OAuth login flow
- 👤 View user profiles and cursus
- 🏆 Display user achievements and finished/in-progress projects
- 📊 Skill chart rendering
- 🧪 Type-safe environment variable validation with `zod`
- 🚀 Built with React Native and Expo

## 📸 Screenshots
|       Login        |
|--------------------|
| ![](./screenshots/Login.png) |

| Profile - Marks | Profile - Skills | Profile - Achievements |
|-----------------|------------------|-------------------------|
| ![](./screenshots/UserProfileMarks.jpeg) | ![](./screenshots/UserDetailsSkills.jpeg) | ![](./screenshots/UserProfileAchievements.jpeg) |

| Settings | Users List | Users List + Search |
|----------|------------|---------------------|
| ![](./screenshots/Settings.jpeg) | ![](./screenshots/UsersList.jpeg) | ![](./screenshots/UsersListSearch.jpeg) |

| Error View | Network Issue | Not Found |
|------------|----------------|-----------|
| ![](./screenshots/Error.jpeg) | ![](./screenshots/NoInternet.png) | ![](./screenshots/NotFound.jpeg) |


## ⚙️ Environment Variables

The project uses strict validation for environment variables via `zod`.

Create a `.env` file at the root of your project with the following structure:

```env
NAME=42-look-up
SCHEME=your-app-scheme
CLIENT_SECRET=your-client-secret
REDIRECT_URL=your-redirect-uri
CLIENT_UID=your-client-uid
FORTY_TWO_CDN_URL=Forty-two cdn
BUNDLE_ID=com.your.bundle.id
PACKAGE=com.your.package.name
API_URL=https://your.api.url
EXPO_ACCOUNT_OWNER=your-expo-username
EAS_PROJECT_ID=your-eas-project-id
```

##  🛠️ Setup

 1. Clone the repository
git clone https://github.com/yourusername/42-look-up.git

 2. Install dependencies
yarn install

 3. Add your .env file
touch .env
 (Fill it using the structure above)

 4. Start the project
yarn start

##  🧹 Developer Tooling
 This project includes modern tooling for a great DX:

✅ TypeScript – static typing
🧼 ESLint – linting with custom rules

💅 Prettier – auto formatting

🧪 Commitlint + Husky – commit message linting and pre-commit checks

⚙️ Babel + tsconfig.json – customized build config

## 📁 Project Structure
42-look-up/
├── assets/
├── components/
├── app/
├── env.js          # Validates env vars with zod
├── .env            # Your local environment variables
├── .eslintrc.js    # ESLint config
├── .prettierrc     # Prettier config
├── babel.config.js
├── tsconfig.json
└── ...
