# Step by Steps Installation React + Vite

To create the development

## Vite

https://vitejs.dev/guide/

create react
https://react.dev/learn/start-a-new-react-project



To instal Tailwind Vite/ vite react tailwind

npm install -D tailwindcss postcss autoprefixer

## Initialize the Tailwind

npx tailwindcss init -p

## Copy the Tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

## Add the index.css to load the tailwind css

@tailwind base;
@tailwind components;
@tailwind utilities;


## What is div fragment in React

## What is state management in React

## Why using Vite instead of create-react-app

## what is jsx in React