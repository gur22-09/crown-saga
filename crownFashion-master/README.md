This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

How to fork and clone
One quick note about cloning this project. If you wish to make commits and push the code up after cloning this repo, you should fork the project first. In order to own your own copy of this repository, you have to fork it so you get your own copy on your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

alt text

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!

After you fork and clone:
Install dependencies
In your terminal after you clone your project down, remember to run either yarn or npm install to build all the dependencies in the project.

Set your firebase config
Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.

alt text

Set your stripe publishable key
Set the publishableKey variable in the stripe-button.component.jsx with your own publishable key from the stripe dashboard.

alt text

Things to set before you deploy
You will also need to connect your existing Heroku app to this new forked and cloned repo, or you have to create a new Heroku app and push to it. A quick refresher on how to do either of these:

Set to an existing Heroku app
To set to an existing Heroku app you already have deployed, you need to know the name of the app you want to deploy to. To see a list of all the apps you currently have on Heroku:

heroku apps
Copy the name of the app you want to connect the project to, then run:

heroku git:remote -a <PASTE_YOUR_APP_NAME_HERE>
And now you'll have your repo connected to the heroku app under the git remote name heroku.

Then skip to the bottom of this article to see what to do next!

To create a new Heroku app
Create a new Heroku project by typing in your terminal:

heroku create
This will create a new Heroku project for you. Then run:

git remote -v
You should see heroku https://git.heroku.com/<RANDOMLY_GENERATED_NAME_OF_YOUR_APP> in the list. This means you have successfully connected your project to the newly created Heroku app under the git remote of heroku.

Deploying to Heroku
Add the mars/create-react-app-buildpack to your heroku project by typing:

heroku buildpacks:set mars/create-react-app-buildpack
You can then deploy to heroku by running:

git push heroku master
You will see this warning message if you are pushing to an existing app:

! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://git.heroku.com/hasura-crwn-clothing.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
This is because we are pushing to an existing app that was deploying an entirely different repository from what we have now. Simply run:

git push heroku master --force
This will overwrite the existing Heroku app with our new code.

Open our Heroku project
After heroku finishes building our project, we can simply run:

heroku open
This will open up our browser and take us to our newly deployed Heroku project!
