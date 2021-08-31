# Quasar App (qs-revue-draggable) 🤏

![top-language](https://img.shields.io/github/languages/top/bcakmakoglu/revue-draggable-example-quasar)
[![dependencies Status](https://status.david-dm.org/gh/bcakmakoglu/revue-draggable-example-quasar.svg)](https://david-dm.org/bcakmakoglu/revue-draggable-example-quasar)
[![devDependencies Status](https://status.david-dm.org/gh/bcakmakoglu/revue-draggable-example-quasar.svg?type=dev)](https://david-dm.org/bcakmakoglu/revue-draggable-example-quasar?type=dev)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/bcakmakoglu/revue-draggable-example-quasar)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bcakmakoglu/revue-draggable-example-quasar)
![GitHub last commit](https://img.shields.io/github/last-commit/bcakmakoglu/revue-draggable-example-quasar)

**A Quasar Framework app using [Revue-Draggable](https://github.com/bcakmakoglu/revue-draggable). 🍟**

## 🪄 Registering Revue Draggable
```bash
yarn add @braks/revue-draggable
```

```js
// app boot file (/src/boot)
// --> boot files are part of "main.js"
// https://v2.quasar.dev/quasar-cli/boot-files
boot: [
  '~src/boot/register-draggable.ts'
]
```

Check the [Example Component](./src/components/CompositionComponent.vue) to see it in action.

## 🛠 Setup

```bash
yarn
```

## 🧪 Development
### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build
```
