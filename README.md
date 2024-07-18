# vue-crash-course

This template is an improvement to the amazing tutorial done by [Brad Traversy](https://x.com/traversymedia) in this [Youtube Video](https://www.youtube.com/watch?v=VeNfHj6MhgA). Original repository from Brad Traversy is here on [Github](https://github.com/bradtraversy/vue-crash-2024)

# Improvements Done

1. Add Typescript Support
2. Turn Form Inputs (input, select and textarea) into reusable components
3. Added [Pinia](https://pinia.vuejs.org) for State Management
4. Added [@tanstack/vue-query](https://tanstack.com/query/latest/docs/framework/vue/overview) for server state management
5. Added [vee-validate](https://vee-validate.logaretm.com/v4/) for form validation
6. Added [zod](https://zod.dev/) for schema validation

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
