The [official docs](https://reactjs.org/docs/hello-world.html) is perfect to get started with `ReactJS`.


# Cloning this repo

1. **Clone with git:** `git clone https://github.com/h4k1m0u/react-todo-list.git`
2. **Install dependencies in package.json:** `npm install`


# Create a React App from scratch

1. **Install NodeJS:** Download [Nodejs for Windows](https://nodejs.org/en/).
2. **Install create-react-app:** `npm install create-react-app`
3. **Initialize a React App:** `create-react-app my-app`
4. **Run app:** `npm start`


# Learn material-ui
[Tutorial on youtube](https://www.youtube.com/watch?v=xm4LX5fJKZ8)


# Assets
[GeoJSON file](https://github.com/johan/world.geo.json) available for free.


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
