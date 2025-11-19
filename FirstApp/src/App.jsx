// App.jsx
import Homeclass from './Components/Homeclass'

export default function App() {
  let fname = "Gagan";
  let age = 22;
  return (
    <div>
      <h1>Welcome</h1>
      <Homeclass name={fname} age={age} />
    </div>
  );
}