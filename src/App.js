import Counter from "./components/2-classcomponents/Counter";
import Events from "./components/event-intro/Events";
import UseStateExample from "./components/useStateHook/UseStateExample";

function App() {
  return (
    <div>
      <Events/>
      <Counter count={10}/> 
      <Counter />
      <UseStateExample/>
    </div>
  );
}

export default App;
