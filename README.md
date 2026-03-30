# React Learning Journey

A progressive, project-based React course covering fundamentals through advanced patterns. Each section is a standalone Vite + React project with inline comments explaining every concept as it's introduced.

---

## Tech Stack

- **React 19** — UI library
- **Vite 6** — build tool and dev server
- **Tailwind CSS v3** — utility-first styling
- **React Router DOM v7** — client-side routing
- **Redux Toolkit v2 + React Redux v9** — global state management

---

## Course Structure

### 01 · Intro — Framework vs Library
Explains the conceptual difference between frameworks (Django, Angular, Spring) and libraries (React, NumPy, Pandas). Establishes why React is officially a library but feels like a framework due to its ecosystem.

---

### 02 · Setup
Two methods of scaffolding a React project:

| Method | Command |
|---|---|
| Create React App | `npx create-react-app <name>` |
| Vite | `npm create vite@latest` |

Includes a working Vite project demonstrating JSX components, file-based component imports, and React fragments (`<></>`).

---

### 03 · Custom React
Two experiments that reveal how React works under the hood:

- **Vanilla JS renderer** — a `customRender` function that manually creates DOM elements from a React-like object, showing what React does internally
- **Vite experiment** — exploring `React.createElement`, the difference between JSX and plain objects, and variable interpolation with `{}`

---

### 04 · Hooks — `useState`
Introduces React's first hook with a bounded counter (0–20). Key insight: normal variables don't trigger re-renders — only state changes via `useState` do.

---

### 05 · Virtual DOM
Reference links covering React Fiber architecture and the reconciliation algorithm.

---

### 06 · Tailwind + Props
Introduces Tailwind CSS integration alongside React props. Demonstrates:
- Prop passing with `name={value}`
- Prop destructuring directly in function parameters
- Default prop values: `function Card({ name = "Anonymous" })`
- Three `<Card/>` instances — two with props, one without to show the default

---

### 07 · Interview Question — State Batching
Isolates a classic React interview topic: what happens when `setCounter(counter+1)` is called four times consecutively?

- **Problem**: React batches updates; all four calls read the same stale value → only one increment
- **Solution**: Functional updater form `setCounter(prev => prev + 1)` chains off scheduled state correctly → increments by 4

---

### 08 · Background Color Changer
A full-screen color switcher built with `useState` and Tailwind. Teaches:
- Inline styles in JSX: `style={{ backgroundColor: color }}` — outer `{}` enters JS, inner `{}` is the CSS object
- The onClick callback pattern: `onClick={() => setColor("red")}` vs the incorrect `onClick={setColor("red")}`

---

### 09 · Password Generator
The most hook-dense project, combining three hooks:

| Hook | Purpose |
|---|---|
| `useState` | length, number/char toggles, password string |
| `useEffect` | re-generates password when dependencies change |
| `useCallback` | memoizes generator and clipboard functions |
| `useRef` | DOM reference for `.select()` and clipboard API |

Also documents the **infinite loop trap** — why `password` was excluded from `useCallback`'s dependency array.

---

### 10 · Custom Hooks — Currency Converter
Introduces custom hooks as a pattern for extracting reusable stateful logic.

- **`useCurrencyInfo(currency)`** — wraps `useState` + `useEffect` + `fetch` from a live currency API
- **`InputBox` component** — uses `useId` for accessibility-safe label-input association
- **`key` prop** — explained when mapping `<option>` elements in a `<select>`
- Swap logic, controlled form submission

---

### 11 · React Router
A multi-page SPA with Header, Footer, and page components. Covers:

- Why `<a>` tags break SPAs (full page reload) — use `<Link>` instead
- `<NavLink>` with active class styling via `({ isActive }) => ...`
- **Layout pattern** with `<Outlet/>` for shared Header/Footer
- Two router creation styles (both shown): object array config and `createRoutesFromElements`
- Dynamic routes: `useParams` for `/user/:userId`
- **Loader pattern**: `githubInfoLoader` + `useLoaderData` as an alternative to in-component `useEffect` fetching
- A `useGitHubInfo` custom hook provided as a comparison to the loader approach

**Pages:** Home, About, Contact, GitHub (followers + avatar), User (dynamic)

---

### 12 · Context API
Three progressively complex sub-projects:

#### ContextAPI-01 — Auth Flow
Basic login/profile pattern demonstrating the full Context API setup:
`createContext` → `Provider` component → `useContext` in consumers

#### ContextAPI-02 — Dark/Light Theme Toggle
A more elegant pattern: the context file exports the context, provider alias, and a `useTheme` custom hook in one place. Uses Tailwind's `darkMode: "class"` strategy, toggling the `<html>` class via `useEffect`.

#### ContextAPI-03 — Todo App with Persistence
The most complete project combining:
- Context API for distributing CRUD operations
- `localStorage` persistence with two `useEffect` calls (load on mount, save on change)
- Full CRUD: add, update (inline editing), delete, toggle completion
- Barrel exports for components and contexts

---

### 13 · Redux Toolkit
Introduces Redux as an alternative to Context API for global state.

**Architecture:**
```
src/
├── app/
│   └── store.js          ← configureStore with todoReducer
├── features/
│   └── todo/
│       └── todoSlice.js  ← createSlice with actions + reducers
└── components/
    ├── AddTodo.jsx        ← useDispatch + useSelector
    └── Todos.jsx          ← useSelector + useDispatch
```

**Slice actions:** `addTodo`, `removeTodo`, `updateTodo`, `setEditTodoInfo`

**Key concepts:**
- `createSlice` — generates reducers and action creators together
- `nanoid` — built-in unique ID generator
- `useSelector` — reads state from the store
- `useDispatch` — sends actions to the store
- `<Provider store={store}>` — makes the store available to the component tree
- Edit mode managed inside Redux state (`editTodoInfo`), synced to the form via `useEffect`

---

## Running Any Project

```bash
# Navigate to the project folder, e.g.:
cd "09 useEffect,UseRef,UseCallback/Password-Generator"

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## Concepts Progression

```
JSX & Components → Props → useState → useEffect → useRef → useCallback
       ↓
  Custom Hooks → React Router → Context API → Redux Toolkit
```
