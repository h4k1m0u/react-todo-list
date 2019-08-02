The [official docs](https://reactjs.org/docs/hello-world.html) is perfect to get started with `ReactJS`.


# Create a React App

1. **Install NodeJS:** Download [Nodejs for Windows](https://nodejs.org/en/).
2. **Install create-react-app:** `npm install -g create-react-app`
3. **Initialize a React App:** `create-react-app my-app`
4. **Run app:** `npm start`


# Editor
[Visual Studio Code](https://code.visualstudio.com/)


# Serving react app from Github
Following [this tutorial](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d):

1. **Install gh-pages:** `npm install gh-pages`
2. **Add to package.json**: `vim package.json`

```json
"homepage": "https://h4k1m0u.github.io/react-todo-list",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. **Deploy application on Github:** `npm run deploy`
