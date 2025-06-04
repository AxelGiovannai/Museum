# Museum Project

## Description

A React TypeScript single page application for browsing museum artifacts.The application provides an intuitive interface to search and explore the Metropolitan Museum of Art's collection.

## commande

```bash
npm install
npm run dev
```

## Functionality

- **Quick Search**: Fast search functionality accessible from the homepage with instant results
- **Advanced Search**: Comprehensive search with multiple filters including:
    - Department filtering
    - Date range selection
    - Geographic location
    - Material and medium specifications
- **Object Details**: Detailed view of individual artifacts with high-resolution images and metadata
- **Responsive Design**: Optimized interface for desktop and mobile devices
- **Error Handling**: Graceful error management with user-friendly messages
- **Loading States**: Visual feedback during API calls and data loading
- **Dark Theme**: Modern dark theme implementation for better user experience
- **Navigation**: Intuitive routing between search results and detailed views


## Project Structure

```
Museum
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ Himmel.jpg
├─ README.md
├─ src
│  ├─ api
│  │  └─ metApi.ts
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ image-not-found.svg
│  │  └─ search-icon.svg
│  ├─ components
│  │  ├─ ErrorMessage.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ Layout.tsx
│  │  ├─ Loader.tsx
│  │  ├─ NotFoundComponent.tsx
│  │  ├─ ObjectCard.tsx
│  │  ├─ ObjectDetails.tsx
│  │  ├─ SearchBar.tsx
│  │  ├─ SearchFiltersForm.tsx
│  │  └─ SearchResults.tsx
│  ├─ main.tsx
│  ├─ Pages
│  │  ├─ AdvancedSearchPage.tsx
│  │  ├─ HomePage.tsx
│  │  ├─ ItemPage.tsx
│  │  ├─ NotFoundPage.tsx
│  │  └─ SearchResultsPage.tsx
│  ├─ styles
│  │  └─ dark-theme.css
│  ├─ types
│  │  ├─ ApiResponse.ts
│  │  ├─ ErrorType.ts
│  │  ├─ MetObject.ts
│  │  └─ SearchParams.ts
│  └─ vite-env.d.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```


## API

L'application utilise l'API publique du Metropolitan Museum of Art. 
Les données affichées proviennent directement de cette API.
