# Pokepack

Pokepack is a React web app that lets you search and explore Pokémon using the [PokeAPI](https://pokeapi.co/). It features a modern UI, animated cards, search functionality, and is styled with Tailwind CSS.

## Features
- Search for any Pokémon by name
- Browse a grid of Pokémon cards with stats and images
- Animated banner and interactive UI elements
- Responsive design
- Footer with social links and API credit

## Getting Started

### 1. Clone the repository
```bash
https://github.com/your-username/pokepack.git
cd pokepack
```

### 2. Install dependencies
```bash
npm install
```

### 3. Tailwind CSS Setup
Pokepack uses Tailwind CSS for styling. The following steps were used to set up Tailwind:

```bash
npm install -D tailwindcss@3
npx tailwindcss init
```

In `src/index.css` (or your main CSS file), add:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Tailwind config:**
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Build Tailwind CSS
To generate the output CSS and watch for changes:
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

### 5. Run the app
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
Pokepack is ready to deploy on platforms like **Vercel** or **Netlify**. Just push your code and import the repo; the platform will handle the build automatically.

## Scripts
- `npm start` — Run in development mode
- `npm run build` — Build for production
- `npm test` — Run tests

## Credits
- Pokémon data from [PokeAPI](https://pokeapi.co/)
- UI built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

