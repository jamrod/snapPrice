import './App.css';

import Header from "./Components/Header"
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home customer="The Little Herbal Apothecary"></Home>
    </div>
  );
}

export default App;
