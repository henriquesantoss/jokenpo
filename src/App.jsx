import "./App.css"; // Certifique-se de ter um arquivo CSS para estilização
import Game from "./components/games";

function App() {
  return (
    <div className="App">
      <h1>Pedra, Papel e Tesoura</h1>
      <Game />
    </div>
  );
}

export default App;
