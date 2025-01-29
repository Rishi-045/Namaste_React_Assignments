# Theory Assignment:

● - What is `NPM`?
npm is a default package manager for node.js and a powerful tool for managing javaScript dependencies.it allows devlopers to install, share and manages libraries and tools for their project.

● - What is `Parcel/Webpack`? Why do we need it?
parcel and webpack both are web application bundler that helps you to manage your js, css, html and other assets. it bundles your file and optimize them for production.
They help optimize the build process.
They enable module-based development.
They support modern JavaScript features and frameworks (e.g., React, Vue).

● - What is `.parcel-cache`
the .parcel cache folder is a directory created by parcel to store cached data during the build and devlopmemt process.

● - What is `npx` ?
npx is a command line tool that comes with the npm. it allows you to run node.js packages direct;y without globally install them.
if you don't use npx you need to globally install parcel.

● - What is difference between `dependencies` vs `devDependencies`
dependencies are packages, libraries or mordules that your project relies on.
these dependencies are categorized into two types:

1. normal dependencies - these packages are required for your application to run in production.
   installed using the npm install <package-name> command and Listed into the dependencies field in the package.json file.

2. devlopment dependencies(dev dependencies) - these package are required only during devlopment phase not in production.
   installed using npm install -D <package-name> command and listed under the devDependencies field in the package.json file.

● - What is Tree Shaking?
the Shaking is the process of removing unwanted code that we do not need while devloping the application.
In computing, tree Shaking is a dead code elimination technique means once unused code is identified.
it is removed from the final output, which reduces the size of bundle.

● - What is Hot Module Replacement?
HMr (hot module replacement) is a technique used by parcel. parcel will keep a track of all the files which you are updating.
there is a file watching algorithm. it keeps track of all the files which are changing realtime and tells the server to reload the browser.

● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.

- Hot Module Replacement
- browserlists: browserlists is a tool that allows devlopers to specify which web browsers their web application should support.
  for example-
  in package.json file do.
  "browserlists":[
  "last 2 version" // means application works in last 2 versions of all the available browser.
  ]
- tree Shaking
- cleaning our code: cleaning is the process of removing white space , comments , and unused code that are written in our code.
- caching: chaching is a processof storing data temporarily in a location to quickly access it without refetching or recomputing
  it every time its needed. caching is used to improve performance, reduce latency and reduce the load on server or database.

● - What is `.gitignore`? What should we add and not add into it?
● - What is the difference between `package.json` and `package-lock.json`
● - Why should I not modify `package-lock.json`?
● - What is `node_modules` ? Is it a good idea to push that on git?
● - What is the `dist` folder?
● - What is `browserlists`
● Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
● Read about Script types in html
