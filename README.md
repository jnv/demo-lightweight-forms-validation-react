# Lightweight Forms Validation in React

Complementary repository with code examples for the article [Lightweight Forms Validation in React](https://www.jnv.zone/react-forms/).

This code demonstrates use of Constraints validation API (supported by all modern browsers) in React.

Try it on [CodeSandbox](https://codesandbox.io/s/github/jnv/demo-lightweight-forms-validation-react).

## Contents

Individual examples are in `ex-*` files under `src/` directory. Examples are mapped to the server path, so to visit `ex-02.js` visit `/ex-02` on the running server (i.e. `http://localhost:3000/ex-02`).

- [ex-01](src/ex-01.js) – Basic form with the default browser validation pop-up message.
- [ex-02](src/ex-02.js) – Capture the validation message and display it next to the field.
- [ex-03](src/ex-03.js) – Suppress the browser's validation pop-up.
- [ex-04](src/ex-04.js) – Add `onChange` handler to hide the displayed validation message when field is fixed.
- [ex-05](src/ex-05.js) – Add custom validation pattern with explanation to demonstrate mixed locale (Firefox only).

## Local setup

1. Run `npm i`
1. Start development server with `npm start`
1. Visit `http://localhost:3000`
