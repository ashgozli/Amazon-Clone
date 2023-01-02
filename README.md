# Getting Started with Amazon Clone App ✨

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Create a Firebase Project and Enable Authentication 🔐

Before you can add Firebase to your JavaScript app, you need to create a Firebase project and register your app with that project. When you register your app with Firebase, you'll get a Firebase configuration object that you'll use to connect your app with your Firebase project resources.

### **Step 1**: In the [Firebase console](https://console.firebase.google.com/?authuser=2), Click Add Project

* To add Firebase resources to an existing Google Cloud project, enter its project name or select it from the dropdown menu.

* To create a new project, enter the desired project name. You can also optionally edit the project ID displayed below the project name.

* If prompted, review and accept the [**Firebase terms**](https://firebase.google.com/terms?authuser=2).

* Click **Create project** (or **Add Firebase**, if you're using an existing Google Cloud project).

### **Step 2**: Install the SDK and [Initialize Firebase](https://firebase.google.com/docs/web/setup?authuser=2&hl=en#add-sdks-initialize)

* This page describes setup instructions for version 9 of the Firebase JS SDK, which uses a [JavaScript Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) format.

* This workflow uses npm and requires module bundlers or JavaScript framework tooling because the v9 SDK is optimized to work with [module   bundlers](https://firebase.google.com/docs/web/module-bundling?authuser=2) to eliminate unused code (tree-shaking) and decrease SDK size.

**Note: Installs Firebase using npm.**

### `npm install firebase`

**Note: Initialize Firebase in your app and create a Firebase App object.**

A Firebase App is a container-like object that stores common configuration and shares authentication across Firebase services. After you initialize a Firebase App object in your code, you can add and start using Firebase services.

```
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
```

### **Step 3**: [Access Firebase](https://firebase.google.com/docs/web/setup?authuser=2&hl=en#access-firebase) in Your App

Firebase services (like Cloud Firestore, Authentication, Realtime Database, Remote Config, and more) are available to import within individual sub-packages.

**The example below shows how you could use the Cloud Firestore Lite SDK to retrieve a list of data:**

```
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
```

⚠️ The `Firebase.js` file is only an example in this repository. 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Credits
- The design and implementation of this project was inspired and guided by [CleverProgrammmers](https://github.com/CleverProgrammers).
