Props: 
In React, props (short for "properties") are a core concept used to pass data from one component to another, typically from a parent component to a child component.
Ex: 
function Button(props) {
  return <Button>{props.label}!</Button>;
}
export default Button


function App() {
  return 
  <Button label="Submit" />;
  <Button label="Edith" />;
  <Button label="Upload" />; 
}
export default App
-----------------------------

State Management in React:
State management in React refers to the way data (state) is handled and shared across components in an application. It helps you keep track of dynamic values (like user inputs, API responses, etc.) and update the UI whenever those values change.

Simple Definition:
State management is the process of controlling how data is stored, updated, and shared between components to keep the UI in sync with the application's data.

Types of Hook:
Here is a list of the most common types of hooks in React:

Basic Hooks:
useState: Manages state in functional components.
Example: const [count, setCount] = useState(0);

i.e:
const Button = (props) => {

    const[label, setlabel]=useState("Want to Press");
    function newlabel (){
        setlabel("WOW You Done");
    }

  return (
    <div>
      <button onClick={newlabel}>{label}</button>
    </div>
  )
}

export default Button
----------------------------------------

useEffect: Handles side effects such as data fetching, subscriptions, or manually changing the DOM after rendering.
Example: useEffect(() => { /* side effect code */ }, []);
ex: 
  useEffect (()=> {
    console.log("Hello");
  }, [])
Outup: Hello

  useEffect (()=> {
    console.log("Hello");
  },)
Outup: Run "Hello" infinite time
<h1>Important Tips for Using the useEffect Hook</h1>
    <ul>
        <li><strong>Dependency Array:</strong>
            <ul>
                <li>Use an empty array <code>[]</code> to run the effect only once when the component mounts.</li>
                <li>Include dependencies in the array to run the effect only when those values change.</li>
            </ul>
        </li>
        <li><strong>Cleanup Function:</strong>
            <ul>
                <li>If your effect creates subscriptions or timers, return a cleanup function to avoid memory leaks.</li>
                <li>Example: <code>return () => clearTimeout(timer);</code> for cleanup.</li>
            </ul>
        </li>
        <li><strong>Avoid Infinite Loops:</strong>
            <ul>
                <li>Be cautious with state updates inside the effect to prevent infinite loops.</li>
            </ul>
        </li>
        <li><strong>Multiple Effects:</strong>
            <ul>
                <li>Use multiple <code>useEffect</code> hooks to separate concerns, improving readability.</li>
            </ul>
        </li>
        <li><strong>Performance Considerations:</strong>
            <ul>
                <li>Optimize your dependencies to avoid unnecessary effect executions.</li>
            </ul>
        </li>
        <li><strong>Conditional Effects:</strong>
            <ul>
                <li>Place conditional logic inside the effect body, but avoid conditions on the dependency array.</li>
            </ul>
        </li>
        <li><strong>Initial State:</strong>
            <ul>
                <li>Use effects to set up initial state that depends on asynchronous data or calculations.</li>
            </ul>
        </li>
        <li><strong>Debugging:</strong>
            <ul>
                <li>Use console logs or debugging tools to track when your effect runs.</li>
            </ul>
        </li>
    </ul>

useContext: Allows you to access values from a context without passing props.
Example: const value = useContext(MyContext);

useReducer: An alternative to useState for managing more complex state logic, often used with a reducer function.
Example: const [state, dispatch] = useReducer(reducer, initialState);

useRef: Allows you to create a reference to a DOM element or store mutable values that persist across renders without causing re-renders.
Example: const inputRef = useRef(null);

