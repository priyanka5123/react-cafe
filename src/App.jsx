import './App.css'
import Greeting from "./Greeting"
import ClassGreeting from './ClassGreeting';
import Coffee from './Coffee';
import Tea from './Tea';
import Pastries from './Pastries';
import './MenuStyles.css'
function App() {
  // const name = "John";
  // const greeting =<p>Hello, {name}</p>
  return (
    <div>
      {/* <h1>Hello, World</h1>
      <h2>{greeting}</h2>
      <Greeting />
      <ClassGreeting /> */}
      <div className='menu-board'>
        <Coffee />
        <Tea />
        <Pastries />
      </div>
    </div>
  )
 
}

export default App