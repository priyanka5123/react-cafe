
# 📘 React Café — Notes

This document explains how to set up a React café app while learning about components, props, useState, useEffect, and simulating data fetching.

---

# ☕ Step 1: Project Setup

Install **Node.js** if you haven’t already.

Create a new React app:

```bash
npx create-react-app react-cafe
cd react-cafe
npm start
```

Your app should now be running at:

👉 **[http://localhost:3000](http://localhost:3000)**

---

# 🧱 Step 2: Understanding Components

React apps are built using **components**.

* `App.js` → root component
* You can create your own components, such as:

  ```
  src/Coffee.js
  ```

Each component handles a piece of the UI, like displaying coffee or tea items.

---

# 📦 Step 3: Props

Props allow components to receive data from their parent.

Example:

```jsx
<Coffee name="Latte" price={4.5} />
```

Inside the component:

```jsx
function Coffee(props) {
  return (
    <h2>{props.name} - ${props.price}</h2>
  );
}
```

---

# 🔄 useState — Storing State

`useState` lets a component **remember values between renders**.

### Syntax

```jsx
const [value, setValue] = useState(initialValue);
```

* **value** → the current state.
* **setValue** → function to update the state.
* **initialValue** → starting value.

Example:

```jsx
const [cart, setCart] = useState([]);
```

This creates:

* A state variable called `cart`
* A function `setCart()` used to update it
* It begins as an empty array

### Adding Items to Cart

```jsx
const addToCart = (item) => setCart([...cart, item]);
```

Why `...cart`?

* You **never modify React state directly**
* Instead, you create a **new array** containing:

  * previous items
  * the new item

React then re-renders with the updated cart.

### Removing Items From Cart

```jsx
const removeFromCart = (index) => {
  setCart(cart.filter((_, i) => i !== index));
};
```

`filter()` returns a **new array** without the removed item.

---

# ⚡ useEffect — Running Side Effects

`useEffect` lets you run code **after a component renders**.

Used for:

* Fetching data
* Timers
* Event listeners
* Updating the page title
* Running code when the component loads

### Basic Syntax

```jsx
useEffect(() => {
  // code to run
}, [dependencies]);
```

### What dependencies mean:

#### 🟦 Empty dependency array `[]`

```jsx
useEffect(() => {
  // runs once
}, []);
```

Runs only **once**, when the component first appears.

Perfect for:

* Loading data
* Setting up a timer once
* Initializing values

#### 🟦 Variables in the dependency array

```jsx
useEffect(() => {
  console.log("cart changed");
}, [cart]);
```

Runs every time the cart changes.

---

# ⏳ Simulating Fetching Data with setTimeout

Instead of hardcoding items inside your `Coffee` component, you can simulate fetching them:

```jsx
useEffect(() => {
  setTimeout(() => {
    setMenuItems([
      { name: "Espresso", price: 3 },
      { name: "Latte", price: 4.5 }
    ]);
  }, 1000);
}, []);
```

Explanation:

* `useEffect` with `[]` runs once (on mount)
* `setTimeout` waits 1 second
* After the delay, it updates the menu
* React re-renders with the new data

This mimics real API behavior.

---

# 🎉 Summary

### ✔ useState

* Stores values React must remember
* Updating state triggers re-render
* Used for:

  * cart
  * menu items
  * loading states
  * input values

### ✔ useEffect

* Runs after render
* Great for:

  * fetching data
  * timers
  * events
* `[]` → run once
* `[variables]` → run when variables change


