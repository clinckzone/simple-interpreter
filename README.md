# simple-interpreter

A simple interpreter implemented in JavaScript that can parse and evaluate arithmetic expressions.

![simple-interpreter](https://user-images.githubusercontent.com/28980632/153396608-50793a3a-d9b8-4882-9945-8fe37f0bb591.gif)

## Setup for local development

In the project directory, you can run:

```js
npm install
```

- You don't really need this since I forgot to add a .gitignore file.
- But do it just in case something goes wrong.

```js
node server.js
```

- Runs the server.js file in the project.
- Open http://localhost:8000 to view it in the browser.
- The page won't magically reload if you make edits. You will have to restart the server.

### Notes

You would find that the syntax style of javascript used here is quite archaic. This is because this project was written when browsers didn't used to support the mordern ECMAScript syntax. You had to write the code in plain old javascript so that the browser can understand.
