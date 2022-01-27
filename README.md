# React Boilerplate

## 🤔 What is it ?

This Boilerplate is includes many config setup for useful developing React web project.
Included package and setup is like below.

- typescript
- react-router (v6)
- styled-components
- storybook
- testing-library/react
- axios / http-proxy-middleware (proxy config)
- redux (reduxjs/toolkit)
- craco (path alias)

🙇‍♂️ _I hope you like this folder structure and useful this boilerplate for saving time project init setup_

## 🗂 Folder Structure

```txt
./src
├── @types
│   └── index.d.ts
├── App.tsx
├── assets
│   ├── fonts
│   ├── images
│   ├── styles
│   └── svgs
├── components
│   ├── Auth            # example folders
│   └── Common
├── constants
│   ├── Colors.ts
│   └── Fonts.ts
├── hooks
│   ├── index.ts
│   └── useSomeHook.tsx # example file
├── index.tsx
├── reportWebVitals.ts
├── router
│   ├── RootRouter.tsx
│   └── index.ts
├── screens
│   ├── Auth
│   ├── Home
│   └── index.ts
├── setupProxy.js
├── setupTests.ts
├── store
│   ├── ducks
│   │   └── auth
│   │       ├── authSlice.ts
│   │       ├── authThunk.ts
│   │       └── index.ts
│   ├── hooks.ts
│   ├── index.ts
│   └── rootReducer.ts
├── stories
│   ├── Introduction.stories.mdx
│   └── assets
└── utils
    ├── AddComma.ts     # example file
    └── Size.ts
```

## 👨‍💻 How to use

1. clone this project

```bash
git clone https://github.com/minsoo-web/react-boilerplate.git
```

2. install package

> before you start this package install, if you use npm rather than use yarn
> I recommend you should remove yarn.lock file

```bash
# go into clone folder before installing the package
# e.g cd react-boilerplate

# using yarn
yarn install

or

# using npm
npm install
```

3. Let`s get it started

```bash
# using yarn
yarn start

or

# using npm
npm run start
```
