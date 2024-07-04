# maslow-gpt-sdk 🌎

An npm package for demonstration purposes using TypeScript to build for both the ECMAScript Module format (i.e. ESM or ES Module) and CommonJS Module format (CJS). 

It can be used in any Javascript application.

Now it's time to make it yours !

## Get Started

1. Run `npm install` in your terminal
1. Then run `npm run build`
1. Update the `package.json` file "name" field with your own package name. Example `@username/package-name`
1. Create an account with [npm](https://www.npmjs.com/signup) if you don't have one already. Also be sure to enable [two-factor authentication](https://docs.npmjs.com/configuring-two-factor-authentication)
1. Sign in to your npm account in your terminal with `npm login`
1. Run `npm publish --access=public` to publish your package

### Testing

To test an npm package locally using Verdaccio, you can follow these steps:

1. Install and set up Verdaccio:

   - Install Verdaccio globally by running the following command:
     ```
     npm install -g verdaccio
     ```
   - Start Verdaccio by running:
     ```
     npx verdaccio
     ```
   - By default, Verdaccio runs on `http://localhost:4873`.

2. Set up a local npm registry:

   - Create a new `.npmrc` file in the root directory of your project (if it doesn't exist already).
   - Add the following line to the `.npmrc` file:
     ```
     registry=http://localhost:4873/
     ```

3. Publish the package locally:

   - In the terminal, navigate to the root directory of your npm package.
   - Run the following command to publish the package to the local registry:
     ```
     npm publish --registry http://localhost:4873
     ```

4. Install the package from the local registry:

   - In the project where you want to test the package, navigate to the project's root directory.
   - Run the following command to install the package from the local registry:
     ```
     npm install <package-name> --registry http://localhost:4873
     ```
   - Replace `<package-name>` with the name of your package.

5. Test the package:
   - In your project, you can now install, import and use the package locally as you would with any other npm package.

Go to http://localhost:4873 to see more details on the pkg

Note: Make sure to use different versions or update the package version each time you publish changes to your package, as Verdaccio treats each published version as a separate package.

By following these steps, you can test and use your npm package locally using Verdaccio as a local npm registry.

## pour tester en accéléré, qd 1er setup fait

Ouvre verdaccio dans 1 cmd, si pas déja open.
(veille a ce que .npmrc soit pas commenté)

```
npx verdaccio
```

Dans 1 autre cmd, execute ceci:

```
npm run build; npm version patch --no-git-tag-version; npm publish --registry http://localhost:4873;
```

Une fois publié, tu peux l'installer la ou tu veux

```
npx yarn add maslow-gpt-sdk@latest
```

## pour retourner en mode npm 'normal'

ferme le cmd de verdaccio

Comment out .npmrc

Voila !
