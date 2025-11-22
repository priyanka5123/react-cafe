Step 1: Project Setup

Install Node.js if not already.

Create React app:

npx create-react-app react-cafe
cd react-cafe
npm start


Your app should open at http://localhost:3000.

Step 2: Understanding Components

React apps are made of components.

Example: App.js is your root component.

Create a Coffee.js component to display café coffee items

Step 3: Using props

Props allow passing data to components.

useState is a React Hook that allows a component to remember values between renders.

Think of it as a special kind of variable that React watches for changes.
When it changes → React automatically updates the UI.
const [value, setValue] = useState(initialValue);
value → current state

setValue → function to update the state

initialValue → starting value

const [cart, setCart] = useState([]);
What this means:
You are creating a piece of state called cart

It starts as an empty array ([])

Whenever you want to add something to the cart, you use setCart()
// Why ...cart?
// Because React state must not be changed directly.
// Instead of pushing, you create a new array with existing items plus the new one.
  const addToCart = (item) => setCart([...cart, item]);
// Here:filter creates a new array all items except the one at that index remain
// React re-renders with updated cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  
useEffect allows components to run side effects, such as:

fetching data

timers

listening to events

updating the page title

running code when a component loads

Think of useEffect as:

👉 “Run this code after the component renders.”

📌 Basic useEffect syntax
useEffect(() => {
  // code to run
}, [dependencies]);

🔹 If dependencies are empty ([])

The effect runs once when the component first loads.

🔹 If dependencies contain variables

It runs whenever those variables change.

✔ useState

Stores values the component needs to remember

Updating state causes React to re-render

Used for cart, menu items, loading text, etc.

✔ useEffect

Runs code after render

Perfect for fetching data, setting timers, and more

[] dependency = run once on mount

Dependencies trigger re-run when values change